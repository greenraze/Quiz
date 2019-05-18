import { StyleSheet } from 'react-native';
import {Colors} from '@common'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.BACKGROUND
    },
    welcomeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 200,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.BLACK
    },
    buttonTextStyle: {
        color: Colors.WHITE,
        fontSize: 22
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        color:  Colors.WHITE,
        marginBottom: 20
    }
});