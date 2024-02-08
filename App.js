import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          GAIVOTAS
        </Text>
        <Text style={styles.subtitle}>
        Gaivotas são aves marinhas adaptadas para voar longas distâncias e capturar uma variedade de presas no mar. Elas vivem em colônias costeiras, reproduzindo-se em ninhos simples e se comunicando através de vocalizações distintivas. Embora desempenhem um papel importante nos ecossistemas costeiros, podem se tornar pragas em áreas urbanas devido à sua busca por alimentos em lixões e aterros.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: '40%', // Largura do contêiner de texto
    backgroundColor: 'pink',
    borderRadius: 10, // Borda arredondada
    padding: 15, // Espaçamento interno
  },
  title: {
    fontSize: 30,
    backgroundColor: 'white',
    padding: 10,
  },
  subtitle: {
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 0,
    padding: 10,
  },
});
