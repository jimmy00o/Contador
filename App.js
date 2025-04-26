import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Image, Alert } from 'react-native';
import Boton from './components/Boton';
import Contador from './components/Contador';

export default function App() {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1);
  };

  const reiniciar = () => {
    setContador(0);
  };

  const disminuir = () => {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      Alert.alert('Advertencia', 'El contador ya está en cero');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1b1b32" />

      <View style={styles.logoBox}>
        <Image
          source={require('./assets/imagenes/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Contador numClics={contador} />

      <Boton texto="Clic" esBotonClic={true} onPress={aumentar} />
      <Boton texto="Reiniciar" esBotonClic={false} onPress={reiniciar} />
      <Boton texto="Decrementar" esBotonClic={false} onPress={disminuir} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b32',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: -30,
  },
  logo: {
    width: 350,
    height: 80,
  },
});
