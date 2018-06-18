import {StyleSheet} from "react-native";
import {fonts} from "../../shared/fonts";

export default StyleSheet.create({
    button: {
        marginTop: 100,
        paddingTop: 15,
        paddingRight: 25,
        paddingBottom: 15,
        paddingLeft: 25,
        backgroundColor: 'black',
        borderRadius: 50,
    },
    buttonForHeightComponent: {
        marginTop: 40,
        paddingTop: 15,
        paddingRight: 25,
        paddingBottom: 15,
        paddingLeft: 25,
        backgroundColor: 'black',
        borderRadius: 50,
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: fonts.FiraSansMedium,
        fontSize: 16,
        color: "white",
    }
});
