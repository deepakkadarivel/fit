import {StyleSheet} from "react-native";
import {fonts} from "../../shared/fonts";

export default StyleSheet.create({
    keyboardView: {
        flex: 1,
        position: 'absolute',
        bottom: 20,
    },
    button: {
        paddingTop: 15,
        paddingRight: 25,
        paddingBottom: 15,
        paddingLeft: 25,
        borderRadius: 50,
    },
    buttonActive: {
        backgroundColor: 'black',
    },
    buttonDisabled: {
        backgroundColor: '#888888',
    }
});
