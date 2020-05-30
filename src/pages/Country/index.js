import React from 'react';
import { View, Text} from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './styles';

export default function Country() {

    const route = useRoute();
    const country = route.params.country.split(' ').join('').toUpperCase();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{country}</Text>
        </View>
    );
}