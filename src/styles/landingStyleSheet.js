import { StyleSheet } from "react-native";
import {fonts} from "../shared/fonts";

export default StyleSheet.create({
    logo: {
        alignSelf: "center",
        height: 44,
        width: 22
    },
    appTitle: {
        marginTop: 10,
        fontFamily: fonts.FiraSansMedium,
        fontSize: 12,
    }
});