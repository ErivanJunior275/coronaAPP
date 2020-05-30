import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    backdrop: {
        flex: 1,
        flexDirection: "column",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
});