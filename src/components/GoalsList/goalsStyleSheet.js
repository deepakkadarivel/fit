import { StyleSheet } from "react-native";
import {fonts} from "../../shared/fonts";

export default StyleSheet.create({
    container: {
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        height: 380,
    },
    row: {
        height: 100,
        width: "100%",
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: "center",
        alignItems: "center",
        borderColor: "#CCCCCC",
        borderWidth: 0.4,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowOffset:{  width: 0,  height: 2,  },
        shadowColor: 'grey',
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
});
