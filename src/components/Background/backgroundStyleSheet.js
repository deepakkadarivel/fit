import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    landingBeanImage: {
        position: 'absolute',
        left: 0
    },
    landingMatImage: {
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    landingDumbbellImage: {
        position: 'absolute',
        right: 0,
        bottom: 20
    },
    confirmationParsleyImage: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    confirmationBeanImage: {
        position: 'absolute',
        bottom: -150,
        left: 0
    },
});
