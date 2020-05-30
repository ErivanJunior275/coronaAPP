import React from 'react';
import { View, Text} from 'react-native';
import { useRoute } from '@react-navigation/native';
import WebView from 'react-native-webview';

import styles from './styles';

export default 
function Country() {

    const route = useRoute();
    const country = route.params.country.split(' ').join('').toUpperCase();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{country}</Text>
            <WebView showsVerticalScrollIndicator={false}
                source={{uri: `https://public.tableau.com/views/coronaAPP/Paisdetail?param_react=${country}&&:embed=yes&:tooltip=no&:toolbar=no&:showVizHome=no&:mobile=y&:showAppBanner=false&:`}}
                style={styles.webview}/>

        </View>
    );
}

