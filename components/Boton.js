import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Boton = ({ onPress, texto, esBotonClic }) => {
  return (
    <TouchableOpacity
      style={[styles.boton, esBotonClic ? styles.botonClic : styles.botonReiniciar]}
      onPress={onPress}
    >
      <Text style={styles.textoBoton}>{texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 5,
    borderWidth: 2, // ← aquí
    borderColor: 'white', // ← y aquí
  },
  botonClic: {
    backgroundColor: '#005eff',
  },
  botonReiniciar: {
    backgroundColor: '#2e8b57',
  },
  textoBoton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Boton;



