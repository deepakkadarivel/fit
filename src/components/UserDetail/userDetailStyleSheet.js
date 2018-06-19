import {fonts} from "../../shared/fonts";
import {StyleSheet} from "react-native";

export default StyleSheet.create({
    navLeft: {
        position: 'absolute',
        top: 30,
        left:4
    },
    container: {
        flex: 1,
        width: "100%",
        marginTop: 60,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    question: {
        marginTop: 26,
        fontFamily: fonts.FiraSansBold,
        fontSize: 24,
    },
    card: {
        width: "100%",
        marginTop: 40,
        height: 200,
        justifyContent: 'space-evenly',
        borderColor: "#888888",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    cardRow: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: fonts.FiraSansRegular,
        fontSize: 16,
        color: "black",
    },
    value: {
        fontFamily: fonts.FiraSansRegular,
        fontSize: 16,
        color: "#444444",
    },
    border: {
        borderColor: "#CCCCCC",
        borderBottomWidth: 1,
    },
});