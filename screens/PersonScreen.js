import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default function PersonScreen() {
  return (
    <View style={styles.container}>
      <Text>Person Screen</Text>
    </View>
  );
}

PersonScreen.navigationOptions = {
  header: null,
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
}
});
