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
    width: 200, // un poco más angosto
    height: 250, // alto para que se vea tipo vertical
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numeroGrande: {
    fontSize: 150, // bien grande para que resalte
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Contador;






