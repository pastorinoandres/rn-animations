import React, { useState } from 'react';
import { View } from 'react-native';
import { Figura, Row } from './components';
import styles from './styles';
import { useAnimations } from './useAnimations';


const Module1 = ({navigation})=>{

    const { animation, toogleAnimation} = useAnimations();
    
    return(
        <View style={styles.container}>
            <Figura 
                style={{...animation }} 
                onPress={toogleAnimation} 
            />
        </View>
    )
}

export default Module1;

