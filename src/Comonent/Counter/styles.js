import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    incrementContainer: {
        elevation: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2ECC71',
        width: WINDOW_WIDTH * 0.4,
        height: WINDOW_HEIGHT * 0.05,
    },
    counterLabel: {
        fontSize: 25,
        color: "#909497",
        fontWeight: '700',
        paddingVertical: 10,
    },
    labelContainer: {
        color: "#fff",
        fontSize: 17,
        fontWeight: '700',
    },
    decrementContainer: {
        elevation: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E74C3C',
        width: WINDOW_WIDTH * 0.4,
        height: WINDOW_HEIGHT * 0.05,
    }
});
export default styles;
