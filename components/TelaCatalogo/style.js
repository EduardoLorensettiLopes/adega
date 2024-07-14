import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    containerItems: {
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 10
    },
    textDescription: {
        marginTop:10,
        marginLeft: 10,
        width: 370,
        fontSize: 17
    },
    cards: {
        marginTop: 15,
        borderRadius: 10,
        width: 350,
        height: 150,
        backgroundColor: "#AB887C",
        flexDirection: "row"
    },
    img: {
        marginLeft: 20,
        marginTop: 10,
        width: 35,
        height: 130
    },
    ContainerCardItems:{
        width: 270,
        marginLeft: 15,
        marginTop: 20,
    },
    CardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
    },
    CardDescription:{
        color: "#fff"
    }
})

export default styles;