import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import WebView from 'react-native-webview';
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
            <WebView
                source={{uri: `https://public.tableau.com/views/coronaAPP/Top5_1?:embed=yes&:tooltip=no&:toolbar=no&:showVizHome=no&:mobile=y&:showAppBanner=false&:`}}
                style={styles.webview}/>
      
        </View>
        
    );
}