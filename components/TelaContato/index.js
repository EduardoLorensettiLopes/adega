import react from "react";
import { View, Text, Image, ScrollView } from "react-native"

import { FontAwesome, MaterialIcons, FontAwesome6, Entypo } from '@expo/vector-icons';

import styles from "./style";

export default function TelaContato() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.Title}>Entre em contato conosco para comprar nossos produtos</Text>

                <View style={styles.containerItems}>
                    <FontAwesome name="phone" size={50} color="#3A0000" />
                    <Text style={styles.CardTitle}>Telefone:</Text>
                    <Text style={styles.CardDescription}>+55 (41) 99999-9999</Text>
                </View>

                <View style={styles.containerItems}>
                    <FontAwesome6 name="location-dot" size={50} color="#3A0000" />
                    <Text style={styles.CardTitle}>Endereço:</Text>
                    <Text style={styles.CardDescription}>Av. 123,222 - Paraná PR</Text>
                </View>

                <View style={styles.containerItems}>
                    <MaterialIcons name="email" size={50} color="#3A0000" />
                    <Text style={styles.CardTitle}>Email:</Text>
                    <Text style={styles.CardDescription}>preferida@adega.com.br</Text>
                </View>

                <View style={styles.containerItems}>
                    <Entypo name="instagram" size={50} color="#3A0000" />
                    <Text style={styles.CardTitle}>Instagram:</Text>
                    <Text style={styles.CardDescription}>@adegapreferida</Text>
                </View>
            </View>
        </ScrollView>
    )
}