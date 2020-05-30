import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
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