import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#A21212',
  },

  item: {
    margin: 10,
    padding: 30,
    color: 'black',
    backgroundColor: 'orange',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

title: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#A21212",
},
titleText: {
  fontSize: 75,
  color: "#FDD303",
  fontStyle: "italic",
},

modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalInner: {
    backgroundColor: "ghostwhite",
    padding: 20,
    borderWidth: 5,
    borderColor: "black",
    borderRadius: 10,
    alignItems: "center",
  },

  modalText: {
    fontSize: 20,
    margin: 5,
    color: "black",
  },

  modalButton: {
    fontWeight: "bold",
    margin: 5,
    color: "white",
  },

  scroll: {
    height: 1,
    alignSelf: "stretch",
  },

 
});
