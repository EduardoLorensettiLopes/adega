import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    Title: {
        fontSize: 25,
        fontWeight: "bold",
        margin: 20,
    },
    containerItems: {
        width: 350,
        height: 150,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        margin: 10
    },
    CardTitle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#3A0000",
        margin: 10
    },
    CardDescription: {
        fontSize: 18,
        color: "#3A0000",
        
    }
})

export default styles;