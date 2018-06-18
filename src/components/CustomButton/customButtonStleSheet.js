import {StyleSheet} from "react-native";
import {fonts} from "../../shared/fonts";

export default StyleSheet.create({
    button: {
        marginTop:100,
        padding:15,
        backgroundColor:'black',
        borderRadius:50,
    },
    buttonText: {
        textAlign:'center',
        fontFamily: fonts.FiraSansMedium,
        fontSize: 16,
        color: "white",
    }
});
