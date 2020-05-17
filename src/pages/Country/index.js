import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

export default function Country() {

    const route = useRoute();
    const country = route.params.country.split(' ').join('').toUpperCase();
    const navigation = useNavigation();

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
    <Text style={styles.title}>{country}</Text>
        </View>
    );
}