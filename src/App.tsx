import React from "react";
import {View, Text, Image, ScrollView, FlatList, TextInput, Button, Alert, Touchable, TouchableOpacity} from 'react-native'



function App(){
    return(
        <View style={{ alignItems: 'center', alignContent:"center", }}>
            <Text style={{ alignItems:'center',fontSize: 30, color: 'red', marginBottom: 50}}>

                O palmeiras nao tem mundial
                        
                
            </Text>
                <Button title="Clique em mim" onPress={()=> Alert.alert("o PALMEIRAS SEM MUNDIAL")}/>
        
       
        </View>

        
    )
}


export default App