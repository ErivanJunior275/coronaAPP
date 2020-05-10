import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './styles';

import api from '../../services/api';

export default function Home() {

    const [backupData, setBackupData] = useState([]);
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        loadIncidents();
    }, []);

    async function loadIncidents() {
        const response = await api.get('').catch(error => console.log(error));
        let incidentsByCountry = [];
        let data = [...response.data.features];
        [...response.data.features].forEach((incident, index) => {
            let accumulator = 0;
            let found = data.filter(search =>
                (search.properties.Country_Region === incident.properties.Country_Region));
            found.forEach((valor) => {
                accumulator += valor.properties.Confirmed;
            });
            data = data.filter(search =>
                incident.properties.Country_Region !== search.properties.Country_Region);
            let test = incidentsByCountry.some(valores => valores.properties.Country_Region == incident.properties.Country_Region);
            if (!test) {
                incidentsByCountry.push({
                    properties:
                    {
                        OBJECTID: incident.properties.OBJECTID,
                        Country_Region: incident.properties.Country_Region,
                        Confirmed: accumulator,
                        Last_Update: incident.properties.Last_Update
                    }
                });
            };
        });
        setIncidents(incidentsByCountry.sort((current, next) => {
            if (current.properties.Country_Region < next.properties.Country_Region) { return -1; }
            if (current.properties.Country_Region > next.properties.Country_Region) { return 1; }
            return 0;
        }));
        setBackupData(incidentsByCountry.sort((current, next) => {
            if (current.properties.Country_Region < next.properties.Country_Region) { return -1; }
            if (current.properties.Country_Region > next.properties.Country_Region) { return 1; }
            return 0;
        }));
        let value = 0;
        [...response.data.features].reduce((accumulator, incident) => {
            value += incident.properties.Confirmed;
            return value;
        })
        setTotal(value);
    }

    function navigateToDetail(country) {
        navigation.navigate('Details', { country });
    }

   function searchCountry(event) {
        searchText = event.nativeEvent.text.trim().toLowerCase();
        if(searchText) {
            setIncidents(incidents.filter(valores => 
                valores.properties.Country_Region.toLowerCase().match(searchText)));
        } else {
            setIncidents(backupData);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos.</Text>
                </Text>
            </View>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Você anda acompanhando o Corona Vírus (COVID-19) nos últimos dias?</Text>
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