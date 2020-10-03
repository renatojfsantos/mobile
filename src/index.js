import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Não possuem valor semântico (significado)
//Não possuem estilização própria
//Todos componentes possuem por padrão "display: flex"

//View: div, footer, header, main, aside, section
//Text: p, span, strong, h1, h2, h3

export default function App() {
  return (
    <View style={styles.container}>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#7159c1',
  }
})