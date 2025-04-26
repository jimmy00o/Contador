import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Contador = ({ numClics }) => {
  return (
    <View style={estilos.cajaContador}>
      <Text style={estilos.numeroGrande}>{numClics}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  cajaContador: {
    width: 200, 
    height: 250, 
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numeroGrande: {
    fontSize: 150, 
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Contador;






