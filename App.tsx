import React from "react";
import {View, Text, Image} from 'react-native'


function App(){
  let nome = 'Vinicius';
  let Img = 'https://blog.polipet.com.br/wp-content/uploads/2024/01/pato-1110x508.jpeg'
  return(
    <View>
      <Text>Meu primeiro App</Text>
      <Text style={{color: 'red', fontSize:30, margin: 70}}>Ola mundo meu nome e {nome} e</Text>
      <Text style={{color: 'red', fontSize: 30, left: 30}}> Kennedy e meu pato</Text>
      <Image source={{uri:Img}} style={{width: 300, height:300, left:50, margin: 5}} />


    </View>
  )
}


export default App;