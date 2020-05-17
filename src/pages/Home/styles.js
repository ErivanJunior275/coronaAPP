import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems: 'center'
    },
    headerText: {
        fontSize: 25,
        color: '#767f8b',
        margin: 12
    },
    headerTextBold: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#e15759'
    },
    break: {
        marginLeft: 25,
        alignItems: 'center',
        paddingRight: 15
    },
    title: {
        fontSize: 30,
        marginBottom: 25,
        marginTop: 15,
        color: '#4e79a7',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 26,
        lineHeight: 24,
        color: '#767f8b',
        paddingBottom: 25,
        textAlign: "justify"
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
    icon: {
        margin: 40,
        paddingRight: 15
    },
    navigateContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around"
    },
    goldButtonText: {
        color: '#f28e2b',
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    skyButtonText: {
        color: '#4e79a7',
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
});