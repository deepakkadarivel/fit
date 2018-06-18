import {StyleSheet} from "react-native";
import {fonts} from "../../shared/fonts";

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
    inputView: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        borderColor: "black",
        borderBottomWidth: 1,
    },
    inputHint: {
        paddingBottom: 6,
        fontFamily: fonts.FiraSansRegular,
        fontSize: 16,
        color: "grey",
    },
});
