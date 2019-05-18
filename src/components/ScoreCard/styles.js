import { StyleSheet } from 'react-native';
import {Colors} from '@common'

export const styles = StyleSheet.create({
    container: {
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
    score: {
        fontSize: 20,
        color: Colors.WHITE,
        textAlign: 'center',
        marginBottom: 20
    }
});