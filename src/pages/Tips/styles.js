import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    backdrop: {
        flex: 1,
        flexDirection: "column",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
});