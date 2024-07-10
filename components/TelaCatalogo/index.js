import react from "react";
import { View, Text, Image, ImageBackground, ScrollView } from "react-native"
import styles from "./style";

import Vinho1 from "../../assets/vinho-branco.jpg"

import Capa from "../../assets/capa.jpg"

export default function TelaInicio() {
    return (
        <ScrollView style={styles.container}>
            
                <Text style={styles.title}>Nossos vinhos</Text>
                <Text style={styles.textDescription}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>
            <View style={styles.containerItems}>
                <View style={styles.cards}>
                    <Image style={styles.img} source={Vinho1} />
                    <View>
                        <Text>Chatigny Chardonnay</Text>
                        <Text>Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}