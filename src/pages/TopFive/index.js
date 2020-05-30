import React from 'react';
import { View, Text } from 'react-native';
import WebView from 'react-native-webview';

import styles from './styles';


export default function TopFive() {

    return (
        <View style={styles.container}>
            <WebView showsVerticalScrollIndicator={false}
                source={{uri: `https://public.tableau.com/views/coronaAPP/Top5_1?:embed=yes&:tooltip=no&:toolbar=no&:showVizHome=no&:mobile=y&:showAppBanner=false&:`}}
                style={styles.webview}/>
        </View>
        
    );
}