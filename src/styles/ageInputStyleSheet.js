import {StyleSheet} from "react-native";
import {fonts} from "../shared/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    question: {
        marginTop: 26,
        fontFamily: fonts.FiraSansBold,
        fontSize: 24,
    },
    input: {
        marginTop: 100,
        width: "80%",
        alignSelf: "center",
        textAlign: "center",
        height: 40,
        fontFamily: fonts.FiraSansBold,
        fontSize: 24,
        borderColor: "black",
        borderBottomWidth: 1,
    },
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
