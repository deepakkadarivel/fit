import { StyleSheet } from "react-native";
import {fonts} from "../shared/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    question: {
        marginTop: 20,
        fontFamily: fonts.FiraSansBold,
        fontSize: 24,
    }
});
