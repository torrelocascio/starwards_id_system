import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground, FlatList
} from 'react-native';
import MyStyles from '../constants/MyStyles'
import {Card, Spinner, CardItem, Left, Right, Body, Icon} from 'native-base'
import axios from 'axios'


 class PersonScreen extends React.Component {
   static navigationOptions = {
      ...MyStyles.header,
    title: 'Pilot License'
  };
  state = {
    person: {},
    personLoading: false,
    shipLoading: false,
    errors: {},
    starships: []


  }



componentDidMount = async () => {
  //api request to grab person
if(Object.keys(this.state.person)>0){

} else {
  try {
    this.setState({
      personLoading:true,
      shipsLoading: true
    })
    let personData = await axios.get('https://swapi.co/api/people/1')
    this.setState({
      personLoading:false,
      person: personData.data
    })
    let newShipArray = []
    console.log('hello')
    for (let i = 0; i<personData.data.starships.length; i++){
      console.log('hello2',personData.data.starships[i],i)

      let result = await axios.get(personData.data.starships[i])
        console.log('hello3')
          newShipArray.push(result.data)
          if(i==personData.data.starships.length-1){
            console.log('howdy')
            console.log(newShipArray)
            this.setState(prevState=> ({
              shipLoading:false,
              starships: [
                ...newShipArray,
              ]
            })
            )
          }
    }


  }
  
  catch (err) {
    this.setState({
      errors: {
        ...this.state.errors,
        person: 'Unable to get info from database'
      },
      shipLoading: false,
      personLoading: false
    })
  }
}

  
}
openShip = (index) => {
  this.props.navigation.navigate('Ship',{
    shipInfo:this.state.starships[index]
  })
}

renderShip = ({item,index}) => {
  return(
    <TouchableOpacity onPress={()=>this.openShip(index)}>
      <Card style={styles.shipCard}>
        <CardItem>
        <Left>
          <Text style={{fontSize:20,fontWeight:'700'}}>{item.name}</Text>
        </Left>
        <Right>
        <Icon name='arrow-forward' />
        </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  )
}

  render(){
    let {person, starships} = this.state
    console.log('starships in render',starships)
    return (
      <View style={styles.container}>
      <ImageBackground source={{uri: MyStyles.images.background}} style={styles.backgroundImage}>
        {this.state.personLoading? <Spinner color={'white'} style={{alignSelf:'center', marginTop:200}}/>:
          <View>
            {Object.keys(this.state.errors).length>0? 
            <Text>{this.state.errors.person}</Text>:
            <View>
              
              <Card style={{backgroundColor: MyStyles.color.cb1}}>
                <View style={{marginTop:10}}>
                <Text style={styles.h1}>{person.name}</Text>
                </View>
              
              <Image style={{width:'100%',height:250, marginTop:10, marginBottom:10}}source={{uri:'https://i.imgur.com/G3wOCdt.jpg'}}/>
                <CardItem style={{backgroundColor: MyStyles.color.cb1,}}>
                  <Left>
                  <Text style={{...styles.text,fontWeight:'700'}}>Gender:</Text>
                  <Text style={styles.text}> {person.gender}</Text>
                  </Left>
                  <Right>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{...styles.text,fontWeight:'700'}}>Birth Year: </Text>
                  <Text style={styles.text}>{person.birth_year}</Text>
                  </View>
                  </Right>
                </CardItem>
                <CardItem style={{backgroundColor: MyStyles.color.cb1,}}>
                  <Left>
                  <Text style={{...styles.text,fontWeight:'700'}}>Height:</Text>
                  <Text style={styles.text}> {person.height}</Text>
                  </Left>
                  <Right>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{...styles.text,fontWeight:'700'}}>Mass: </Text>
                  <Text style={styles.text}>{person.mass}</Text>
                  </View>


                  </Right>
                </CardItem>
                <CardItem style={{backgroundColor: MyStyles.color.cb1,}}>
                  <Left>
                  <Text style={{...styles.text,fontWeight:'700'}}>Eye Color: </Text>
                  <Text style={styles.text}>{person.eye_color}</Text>
                  </Left>
                  <Right>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{...styles.text,fontWeight:'700'}}>Skin Color: </Text>
                  <Text style={styles.text}>{person.skin_color}</Text>
                  </View>


                  </Right>
                </CardItem>
              </Card>
            </View>}
            <Text style={{...styles.h2,fontWeight:'700',marginTop:5, alignSelf:'center'}}>Ships</Text>
            {starships.length==0? <Spinner color={'white'}/> :
                        <FlatList
                        style={{backgroundColor:MyStyles.color.cb1,padding:10}}
                        data={starships}
                        renderItem={this.renderShip}
                        keyExtractor={this.keyExtractor}
                        />
                      }

          </View>}
      
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
},
h1: {
  fontSize: 50,
  color: 'white',
  textAlign: 'center'
},
h2: {
  fontSize: 30,
  color: 'white'
},
h3: {
  fontSize: 22,
  color: 'white'
},
text: {
  fontSize:16,
  color: 'white'
},
shipCard: {

}
});

export default PersonScreen