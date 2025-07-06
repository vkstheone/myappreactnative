import { useEffect, useState } from "react";
import {View, Text, Image, ScrollView, FlatList, TextInput, Button, Alert, Touchable, TouchableOpacity, StyleSheet} from 'react-native'
import { db } from "./firebaseConection";
import { doc, getDoc, onSnapshot, } from "firebase/firestore";

function App(){

    const [nome, setNome] = useState("");

    useEffect(() => {
        async function getDados() {
            onSnapshot(doc(db, "usuario", "1"), (doc) =>{
                setNome(doc.data()?.nome)
            })
            
        }
        getDados()

        
    },[])   


    return(
        <View style={styles.container}>
            <Text style={styles.text}>sFirebase {nome}</Text>

        </View>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontSize: 30,
        color: "#fff"
    }

})


export default App