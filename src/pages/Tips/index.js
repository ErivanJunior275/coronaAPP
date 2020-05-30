import React from 'react';
import { ScrollView, Image } from 'react-native';

import styles from './styles';

export default function Tips() {

    return (
        <ScrollView style={styles.container}>
            <Image source={require("../../assets/info-covid.jpg")} resizeMode="stretch" > 
            </Image>
        </ScrollView>
    );
}