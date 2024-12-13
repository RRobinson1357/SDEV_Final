import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import ConfirmationModal from './ConfirmationModal';

export default function Favorites({ favorites }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCocktail, setSelectedCocktail] = useState({});

  const handleItemPress = (cocktail) => {
    setSelectedCocktail(cocktail);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.idDrink.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <Text style={styles.item}>{item.strDrink}</Text>
          </TouchableOpacity>
        )}
      />
      </ScrollView>
      <ConfirmationModal
        animationType="fade"
        visible={modalVisible}
        cocktail={selectedCocktail}
        onPressConfirm={() => setModalVisible(false)}
        onPressCancel={() => setModalVisible(false)}
      />
    </View>
  );
}
