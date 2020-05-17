import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 30,
        marginBottom: 25,
        marginTop: 15,
        color: '#4e79a7',
        fontWeight: 'bold'
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25
    },
    detailsButtonText: {
        backgroundColor: '#59a14f',
        padding: 12,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        borderRadius: 8,
    },
});