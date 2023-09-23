import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { categories } from '../data/categories';

const CategoriesFilter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category Filter</Text>
      <ScrollView horizontal>
        {categories.map((category, index) => {
          return (
            <View
              key={index}
              style={{
                ...styles.category,
                ...(index === 0
                  ? { backgroundColor: '#f96163' }
                  : { backgroundColor: '#fff' }),
              }}
            >
              <Text
                style={{
                  ...styles.categoryText,
                  ...(index === 0 ? { color: '#fff' } : { color: '#000' }),
                }}
              >
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 16 },
  text: {
    fontSize: 22,
    fontWeight: '700',
  },
  category: {
    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 36,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 16,
    minWidth: 120,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,

    elevation: 4,
  },
  categoryText: {
    fontSize: 14,
  },
});

export default CategoriesFilter;
