import React from "react";
import { View, Text, Modal, Button } from "react-native";
import styles from "./styles";

export default function ConfirmationModal(props) {
  const { visible, cocktail, onPressConfirm, onPressCancel, onFavorite } = props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onPressCancel}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          <Text style={styles.modalText}>{cocktail.strDrink}</Text>
          <Text style={styles.modalText}>Glass: {cocktail.strGlass}</Text>
          <Text style={styles.modalText}>Instructions: {cocktail.strInstructions}</Text>
          <Text style={styles.modalText}>Ingredients:</Text>
          {Array.from({ length: 15 }, (_, i) => i + 1).map((index) => {
            const ingredient = cocktail[`strIngredient${index}`];
            const measure = cocktail[`strMeasure${index}`];
            return (
              ingredient && (
                <Text key={index} style={styles.modalText}>
                  {measure} {ingredient}
                </Text>
              )
            );
          })}
          <Button title="Close" onPress={onPressCancel} />
          <Button title="Favorite" onPress={() => onFavorite(cocktail)} />
        </View>
      </View>
    </Modal>
  );
}

ConfirmationModal.defaultProps = {
  cocktail: {},
  onRequestClose: () => {},
};

