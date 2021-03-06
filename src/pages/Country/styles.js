import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        // paddingTop: Constants.statusBarHeight,
    },
    webview: {
        backgroundColor: '#f2f2f2'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold: {
        fontWeight: 'bold'
    },
    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 12,
        color: '#13131a',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },
    incidentList: {
        marginTop: 15
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        marginBottom: 16,
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailsButtonText: {
        backgroundColor: '#30bd13',
        padding: 12,
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 8,
    }
});