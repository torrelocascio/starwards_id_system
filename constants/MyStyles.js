import React from 'react'
import {Image} from 'react-native'

const color = {
    p1 : '#5700f9', //purple
    p2: '#4501c1', //darker purple 
    p3: '#9055fc', //lighter purple
    b1: '#686868', //gray
    b2: '#3f3f3f', //darker gray
    b3: '#2b2b2b', //darkes gray
    t1: '#000000', //white
    t2: '#3f3f3f', //dark gray
    t3: '#4501c1', //darker purple
}

images = {
    logo: 'https://i.imgur.com/18JK6oE.jpg',
    background: 'https://i.imgur.com/aWKOJsf.jpg'
}

const header = {
    headerTintColor: '#4501c1',
    headerStyle: {
      backgroundColor: color.b3,
      borderBottomColor: color.b2,
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      fontSize: 18,
    },
    headerRight: (
      <Image style={{width:60,height:40}} source={{uri: 'https://i.imgur.com/18JK6oE.jpg'}}/>
          ),
    
  }

  const MyStyles = {
      color,
      header,
      images
  }

  export default MyStyles

