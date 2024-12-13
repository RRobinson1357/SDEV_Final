import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { fetchCocktails } from './api';
import ConfirmationModal from './ConfirmationModal';

export default function Cocktails({ favorites, setFavorites }) {
  const [cocktails, setCocktails] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCocktail, setSelectedCocktail] = useState({});

  useEffect(() => {
    const getCocktails = async () => {
      const fetchedCocktails = await fetchCocktails();
      setCocktails(fetchedCocktails);
    };

    getCocktails();
  }, []);

  const handleItemPress = (cocktail) => {
    setSelectedCocktail(cocktail);
    setModalVisible(true);
  };

  const handleFavorite = (cocktail) => {
    setFavorites([...favorites, cocktail]);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={cocktails}
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
        onFavorite={handleFavorite}
      />
    </View>
  );
}
