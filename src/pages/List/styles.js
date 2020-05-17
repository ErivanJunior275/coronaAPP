import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
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
        marginBottom: 25,
        marginTop: 15,
        color: '#4e79a7',
        fontWeight: 'bold'
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
    },
    searchBox: {
        flexDirection: 'row',
        borderRadius: 6,
        backgroundColor: '#e4eeed',
        marginTop: 12,
        padding: 6,

    },
});