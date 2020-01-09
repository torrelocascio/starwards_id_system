import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import MyStyles from '../constants/MyStyles'


export default class PersonScreen extends React.Component {
   static navigationOptions = {
      ...MyStyles.header,
    title: 'Person'
  };
  render(){
    return (
      <View style={styles.container}>
      <ImageBackground source={{uri: MyStyles.images.background}} style={styles.backgroundImage}>
      <Text>Person Screen</Text>
      </ImageBackground>
    </View>
    )

  }

}

// PersonScreen.navigationOptions = {
//   header: {
//     style: {
//       ...MyStyles.header
//     },
//     title: 'H'
//   },
// };




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
},
backgroundImage: {
  width: '100%',
  height: '100%'
}
});
