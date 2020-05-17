import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';

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
        let data = [...response.data.features];
        let value = 0;
        data.reduce((accumulator, incident) => {
            value += incident.properties.Confirmed;
            return value;
        })
        setTotal(value);
        setIncidents(data);
    }

    function navigateToList(incidents) {
        navigation.navigate('List', { incidents });
    }

    function navigateToTopFive() {
        navigation.navigate('TopFive');
    }

    function navigateToTips() {
        navigation.navigate('Tips');
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Você anda acompanhando o Coronavírus (COVID-19) nos últimos dias?</Text>
            <View style={styles.header}>
                <FontAwesome5 size={80} name='procedures' color='black' style={styles.icon} />
                <View style={styles.break}>
                    <Text style={styles.headerText}>Total de</Text>
                    <Text style={styles.headerTextBold}>{Intl.NumberFormat('pt-BR', { style: 'decimal' })
                        .format(total)}</Text>
                    <Text style={styles.headerText}>casos confirmados.</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() => navigateToList(incidents)}>
                    <Text style={styles.detailsButtonText}>Ver listagem de casos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.navigateContainer}>
                <TouchableOpacity
                    onPress={() => navigateToTopFive()}>
                    <FontAwesome5 size={80} name='trophy' color='#f28e2b' />
                    <Text style={styles.goldButtonText}>Top 5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.skyButton}
                    onPress={() => navigateToTips()}>
                    <FontAwesome5 size={80} name='tint' color='#4e79a7' />
                    <Text style={styles.skyButtonText}>Dicas</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}