import React from "react";
import {View, Text, Image, ScrollView, FlatList, TextInput, Button, Alert} from 'react-native'


function App(){
  let nome = 'Vinicius';
  let Img = 'https://blog.polipet.com.br/wp-content/uploads/2024/01/pato-1110x508.jpeg'
  return(
    <ScrollView>

      <View style={{alignItems: 'center'}}>
      <Text>Meu primeiro App</Text>
      <TextInput placeholder="Digite Seu nome" style={{ height: 40, borderColor: 'red', borderWidth:2, backgroundColor: "gray"}}/>
      <Text style={{color: 'red', fontSize:30, margin: 70}}>Ola mundo meu nome e {nome} e</Text>
      <Text style={{color: 'red', fontSize: 30, textAlign: "center"}}> Kennedy e meu pato</Text>
      <Image source={{uri:Img}} style={{width: 300, height:300,  margin: 5}} />
       <Image source={{uri:Img}} style={{width: 300, height:300,  margin: 5}} />

       <Image source={{uri:Img}} style={{width: 300, height:300,  margin: 5}} />
       <Image source={{uri:Img}} style={{width: 300, height:300,  margin: 5}} />
       <Image source={{uri:Img}} style={{width: 300, height:300,  margin: 5}} />
       <Image source={{uri:Img}} style={{width: 300, height:300,  margin: 5}} />
       <Image source={{uri:Img}} style={{width: 300, height:300, margin: 5}} />
       <Image source={{uri:Img}} style={{width: 300, height:300,  margin: 5}} />
       <Image source={{uri:Img}} style={{width: 300, height:300,  margin: 5}} />
       <Image source={{uri:Img}} style={{width: 300, height:300, margin: 5}} />

       <FlatList data={[{key: 'Arrox'}, {key:'feijão'}, {key: 'Macarrão'}]} 
        renderItem={({ item }) => <Text>{item.key}</Text>}
        />
        <Button title="Clique em mim" onPress={()=> Alert.alert("kk")}/>
      </View>
    </ScrollView>
    
  )
}


export default App;