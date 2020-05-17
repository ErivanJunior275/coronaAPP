import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

export default function TopFive() {

    const route = useRoute();
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
            <Text style={styles.title}>Top 5</Text>
        </View>
    );
}