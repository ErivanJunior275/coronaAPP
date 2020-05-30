import React from 'react';
import { ScrollView, Image } from 'react-native';

import styles from './styles';

export default function Tips() {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image source={require("../../assets/dicas.jpg")} 
                resizeMode="cover" style={styles.backdrop}>
            </Image>
        </ScrollView>
    );
}