import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

import { recipeList } from '../data/recipeList';

const RecipeCards = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recipes</Text>
      <FlatList
        data={recipeList}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <View style={styles.recipeCard}>
            <Image
              source={item.image}
              resizeMode="contain"
              style={{ width: 150, height: 150 }}
            />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 16,
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
  },

  recipeCard: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 18,

    borderRadius: 16,
    marginVertical: 16,
    paddingHorizontal: 8,
    paddingVertical: 24,

    alignItems: 'center',
  },
});

export default RecipeCards;
