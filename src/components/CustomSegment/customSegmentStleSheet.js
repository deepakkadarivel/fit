import {StyleSheet} from "react-native";
import {fonts} from "../../shared/fonts";

export default StyleSheet.create({
    view: {
        width: "60%",
        height: 40,
        marginTop:40,
        borderColor: "black",
        borderWidth: 1,
        borderRadius:30,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    buttonInactive: {
        height: 40,
        width: "50%",
        justifyContent: "center",
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    },
    buttonActiveRight: {
        height: 40,
        width: "50%",
        justifyContent: "center",
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor:'black',
    },
    buttonActiveLeft: {
        height: 40,
        width: "50%",
        justifyContent: "center",
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor:'black',
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
