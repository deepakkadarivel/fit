import {StyleSheet} from "react-native";
import {fonts} from "../../shared/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "white",
    },
    question: {
        marginTop: 26,
        fontFamily: fonts.FiraSansBold,
        fontSize: 24,
    }
});
