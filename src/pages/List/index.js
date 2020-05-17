import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

export default function List() {

    const [incidents, setIncidents] = useState([]);
    const navigation = useNavigation();
    const route = useRoute();
    const dataIncidents = route.params.incidents;
    let data = dataIncidents;
    let incidentsByCountry = [];

    useEffect(() => {
        loadIncidents();
    }, []);

    function loadIncidents() {
        chargeIncidents(dataIncidents);
        sortIncidents();
    }

    function sortIncidents() {
        setIncidents(incidentsByCountry.sort((current, next) => {
            if (current.properties.Country_Region < next.properties.Country_Region) { return -1 }
            if (current.properties.Country_Region > next.properties.Country_Region) { return 1 }
            return 0;
        }));
    }

    function chargeIncidents(dataIncidents) {
        dataIncidents.forEach((incident, index) => {
            let accumulator = 0;
            let found = data.filter(search => (search.properties.Country_Region === incident.properties.Country_Region));
            found.forEach((valor) => {
                accumulator += valor.properties.Confirmed;
            });
            data = data.filter(search => incident.properties.Country_Region !== search.properties.Country_Region);
            let test = incidentsByCountry.some(valores => valores.properties.Country_Region == incident.properties.Country_Region);
            if (!test) {
                incidentsByCountry.push({
                    properties: {
                        OBJECTID: incident.properties.OBJECTID,
                        Country_Region: incident.properties.Country_Region,
                        Confirmed: accumulator,
                        Last_Update: incident.properties.Last_Update
                    }
                });
            }
            ;
        });
    }

    function navigateToDetail(country) {
        navigation.navigate('Details', { country });
    }

    function searchCountry(event) {
        let searchText = event.nativeEvent.text.trim().toLowerCase();
        if (searchText) {
            setIncidents(incidents.filter(valores =>
                valores.properties.Country_Region.toLowerCase().match(searchText)));
        } else {
            loadIncidents();
        }
    }

    function navigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.detailsButton}>
                <TouchableOpacity
                    style={styles.detailsButtonText}
                    onPress={navigateBack}>
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>COVID-19</Text>
            <TextInput style={[styles.description, styles.searchBox]}
                onSubmitEditing={searchCountry}
                underlineColorAndroid="transparent"
                placeholder="Buscar"
            />
            <FlatList
                style={styles.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.properties.OBJECTID)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>PAÍS:</Text>
                        <Text style={styles.incidentValue}>{incident.properties.Country_Region}</Text>
                        <Text style={styles.incidentProperty}>CASOS CONFIRMADOS:</Text>
                        <Text style={styles.incidentValue}>{incident.properties.Confirmed}</Text>
                        <Text style={styles.incidentProperty}>ATUALIZADO EM:</Text>
                        <Text style={styles.incidentValue}>{incident.properties.Last_Update}</Text>
                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident.properties.Country_Region)}>
                            <Text style={styles.detailsButtonText}>Veja mais detalhes</Text>
                        </TouchableOpacity>
                    </View>
                )} />
        </View >
    );
}