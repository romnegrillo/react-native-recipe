import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = ({ text, iconName, iconColor }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Ionicons name={iconName} size={24} color={iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: '700',
  },
  icons: {},
});

export default Header;
