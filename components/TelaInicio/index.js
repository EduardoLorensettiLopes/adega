import react from "react";
import { View, Text, Image, ImageBackground } from "react-native"
import styles from "./style";

import Capa from "../../assets/capa.jpg"

export default function TelaInicio(){
    return(
        <ImageBackground 
        style={styles.container} 
        source={Capa}
        blurRadius={15}
        >
            <View style={styles.containerItems}>
                <Text style={styles.title}>Adega Preferida</Text>
                <Text style={styles.textDescription}>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
            </View>
        </ImageBackground>
    )
}