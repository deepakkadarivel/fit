import {StyleSheet} from "react-native";
import {fonts} from "../../shared/fonts";

export default StyleSheet.create({
    container: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        borderColor: "black",
        borderBottomWidth: 1,
    },
    input: {
        marginTop: 60,
        width: "80%",
        alignSelf: "center",
        textAlign: "center",
        height: 48,
        fontFamily: fonts.FiraSansBold,
        fontSize: 24,
        borderColor: "black",
        borderBottomWidth: 1,
    },
    inputFTView: {
        width: "50%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
    },
    inputWithNoBorder: {
        width: "30%",
        borderBottomWidth: 0,
    },
});
