import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import welcome1 from '../../assets/images/welcome1.png';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={welcome1}
        resizeMode="contain"
        style={styles.headerImage}
      />

      <Text style={styles.subHeader}>40K+ Premium Recipes</Text>
      <Text style={styles.header}>Cook Like a Chef</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('RecipeList');
        }}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  subHeader: { color: '#f96163', fontSize: 24, fontWeight: 'bold' },
  headerImage: {
    width: '100%',
  },
  header: {
    color: '#3c444c',
    fontSize: 40,
    fontWeight: 'bold',

    marginBottom: 40,
  },
  button: {
    backgroundColor: '#f96163',
    borderRadius: 18,
    paddingVertical: 18,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default WelcomeScreen;
