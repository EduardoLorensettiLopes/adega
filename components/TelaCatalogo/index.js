import react from "react";
import { View, Text, Image, ImageBackground, ScrollView } from "react-native"
import styles from "./style";

import Vinho1 from "../../assets/vinho-branco.jpg"
import Vinho2 from "../../assets/vinho-rose.jpg"
import Vinho3 from "../../assets/vinho-seco.jpg"
import Vinho4 from "../../assets/vinho-especial.jpg"

import Capa from "../../assets/capa.jpg"

export default function TelaInicio() {
    return (
        <ScrollView style={styles.container}>
            
                <Text style={styles.title}>Nossos vinhos</Text>
                <Text style={styles.textDescription}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>
            <View style={styles.containerItems}>
                <View style={styles.cards}>
                    <Image style={styles.img} source={Vinho1} />
                    <View style={styles.ContainerCardItems}>
                        <Text style={styles.CardTitle}>Chatigny Chardonnay</Text>
                        <Text style={styles.CardDescription}>Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
                    </View>
                </View>

                <View style={styles.cards}>
                    <Image style={styles.img} source={Vinho2} />
                    <View style={styles.ContainerCardItems}>
                        <Text style={styles.CardTitle}>Concha y Toro Exportacion</Text>
                        <Text style={styles.CardDescription}>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
                    </View>
                </View>

                <View style={styles.cards}>
                    <Image style={styles.img} source={Vinho3} />
                    <View style={styles.ContainerCardItems}>
                        <Text style={styles.CardTitle}>Portada Winemaker's</Text>
                        <Text style={styles.CardDescription}>Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>
                    </View>
                </View>

                <View style={styles.cards}>
                    <Image style={styles.img} source={Vinho4} />
                    <View style={styles.ContainerCardItems}>
                        <Text style={styles.CardTitle}>Elvio Cogno Ravera Barolo</Text>
                        <Text style={styles.CardDescription}>Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}