import React from 'react';
import { ScrollView, StyleSheet, Text,View, ImageBackground} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import MyStyles from '../constants/MyStyles'

export default class PersonScreen extends React.Component {
  static navigationOptions = {
    ...MyStyles.header,
  title: 'Ship Info'
};
state = {
  ship: {
    ...this.props.navigation.getParam('shipInfo',false)
  }


}

render(){
  let {ship} = this.state
  console.log(ship)
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: MyStyles.images.background}} style={styles.backgroundImage}>
      <Text style={{color:'white'}}>Name: {ship.name}</Text>
      <Text style={{color:'white'}}>Model: {ship.model}</Text>
      <Text style={{color:'white'}}>Manufacturer {ship.manufacturer}</Text>
      <Text style={{color:'white'}}>Length: {ship.length}</Text>
      </ImageBackground>
    </View>
  );
}


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
backgroundImage: {
  width: '100%',
  height: '100%'
},
});
