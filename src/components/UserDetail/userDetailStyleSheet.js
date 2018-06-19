import {fonts} from "../../shared/fonts";
import {StyleSheet} from "react-native";

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
    card: {
        width: "90%",
        marginTop: 40,
        padding: 20,
        height: 200,
        justifyContent: 'space-between',
        borderColor: "#888888",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    cardRow: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        borderColor: "#888888",
        borderBottomWidth: 1,
    },
    title: {
        marginBottom: 10,
        fontFamily: fonts.FiraSansRegular,
        fontSize: 20,
        color: "black",
    },
    value: {
        marginBottom: 10,
        fontFamily: fonts.FiraSansRegular,
        fontSize: 18,
        color: "#444444",
    }

});