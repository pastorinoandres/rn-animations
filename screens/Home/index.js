import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const Card = ({name, action})=> { 

    return(

        <TouchableWithoutFeedback onPress={action}>
            <View style={styles.card}>
                <Text style={styles.textCard}>{name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const modules = [
    {
        name: 'Animated API',
        screen: "Module1"
    },
    {
        name: 'Reanimated',
        screen: "Module2"
    },
]

const Home = ({navigation})=>{
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Animaciones</Text>
            {modules.map(({name, screen}) => {
                const action = ()=> navigation.navigate(screen)
                return(
                    <Card name={name} action={action} key={name}/>
                )
            } )}
            
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingVertical: 50,
      paddingHorizontal:20,
      backgroundColor: '#6980A7'
    },
    title:{
        fontSize:30,
        fontWeight: '600',
        textAlign:'center',
        color: 'white',
        marginVertical:60
    },
    card:{
        height: 100,
        width:'100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        backgroundColor: 'white',
        borderRadius:20,
        marginBottom:20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCard:{
        fontSize:20,
        fontWeight: '500',
        textAlign:'center',
        color: 'rgba(0,0,0,0.8)',
    }
  });
  