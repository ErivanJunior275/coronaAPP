import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import api from '../../services/api';

export default function Home() {

    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);

    const navigation = useNavigation();

    useEffect(() => {
        loadIncidents();
    }, []);

    async function loadIncidents() {
        const response = await api.get('').catch(error => console.log(error));
        setIncidents([...response.data.features]);
    }

    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident });
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
            <FlatList
                style={styles.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.properties.OBJECTID)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>PAÍS:</Text>
                        <Text style={styles.incidentValue}>{incident.properties.Country_Region}</Text>
                        <Text style={styles.incidentProperty}>PROVÍNCIA:</Text>
                        <Text style={styles.incidentValue}>{incident.properties.Province_State}</Text>
                        <Text style={styles.incidentProperty}>CASOS CONFIRMADOS:</Text>
                        <Text style={styles.incidentValue}>{incident.properties.Confirmed}</Text>
                        <Text style={styles.incidentProperty}>ATUALIZADO EM:</Text>
                        <Text style={styles.incidentValue}>{incident.properties.Last_Update}</Text>
                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident)}>
                            <Text style={styles.detailsButtonText}>Veja mais detalhes</Text>
                        </TouchableOpacity>
                    </View>
                )} />
        </View >
    );
}