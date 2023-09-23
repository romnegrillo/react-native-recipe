import { View, Text, TextInput, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const SearchFilter = ({ placeholder, searchText, iconName, iconColor }) => {
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={24} color={iconColor} />
      <TextInput style={styles.searchInput} placeholder={placeholder}>
        {searchText}
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginVertical: 16,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,

    elevation: 4,
  },
  searchInput: { marginLeft: 8 },
});

export default SearchFilter;
