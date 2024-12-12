import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";


export default function Home() {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>Rylans Bar</Text>
    </View>
  );
}
