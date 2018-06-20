import {StyleSheet} from "react-native";
import {fonts} from "../../shared/fonts";

export default StyleSheet.create({
    question: {
        marginTop: 20,
        fontFamily: fonts.FiraSansBold,
        fontSize: 24,
    },
    cardTitle: {
        fontFamily: fonts.FiraSansRegular,
        fontSize: 16,
        color: "black",
    },
    cardValue: {
        fontFamily: fonts.FiraSansRegular,
        fontSize: 16,
        color: "#444444",
    },
    appTitle: {
        marginTop: 10,
        fontFamily: fonts.FiraSansMedium,
        fontSize: 12,
    },
    inputSuffix: {
        paddingBottom: 6,
        fontFamily: fonts.FiraSansRegular,
        fontSize: 16,
        color: "grey",
    },
    goalTitle: {
        fontFamily: fonts.FiraSansBold,
        fontSize: 20,
    },
    goalDescription: {
        marginTop: 10,
        fontFamily: fonts.FiraSansRegular,
        fontSize: 16,
    },
    buttonTextBlack: {
        textAlign:'center',
        fontFamily: fonts.FiraSansMedium,
        fontSize: 16,
        color: "black",
    },
    buttonTextWhite: {
        textAlign:'center',
        fontFamily: fonts.FiraSansMedium,
        fontSize: 16,
        color: "white",
    }
});
