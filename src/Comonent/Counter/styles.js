import { AppFonts } from "../constants";
import { StyleSheet, Dimensions } from 'react-native';

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
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2ECC71',
        width: WINDOW_WIDTH * 0.4,
        height: WINDOW_HEIGHT * 0.05,
        justifyContent: 'space-evenly',
    },
    counterLabel: {
        fontSize: 25,
        color: "#909497",
        paddingVertical: 10,
        fontFamily: AppFonts.Medium
        // fontFamily: 'Mulish-ExtraBold',
    },
    labelContainer: {
        color: "#fff",
        fontSize: 15,
        //fontFamily: 'Mulish-Medium',
        fontFamily: 'Mulish-ExtraBold',
    },
    decrementContainer: {
        padding: 5,
        elevation: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E74C3C',
        width: WINDOW_WIDTH * 0.4,
        height: WINDOW_HEIGHT * 0.05,
        justifyContent: 'space-evenly',
    }
});
export default styles;
