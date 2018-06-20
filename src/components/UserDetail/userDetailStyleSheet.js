import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        marginTop: 60,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        justifyContent: "flex-start",
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
    border: {
        borderColor: "#CCCCCC",
        borderBottomWidth: 1,
    },
});