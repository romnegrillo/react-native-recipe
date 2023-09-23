import { View, Text, StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Header, SearchFilter, CategoriesFilter } from '../components';

const RecipeListScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Hello, Rom!" iconName="notifications" iconColor="#f96163" />
      <SearchFilter
        placeholder="What are you cooking?"
        iconName="search"
        iconColor="#f96163"
      />
      <CategoriesFilter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default RecipeListScreen;
