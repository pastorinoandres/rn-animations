import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { Figura, Row } from './components';
import { BottomModal } from './components/BottomModal';
import styles from './styles';

const Module2 = ({navigation})=>{
    const myRef = useRef();
    
    return(
        <>
        <View style={styles.container}>
            <Figura onPress={()=>myRef.current.toggleModal()} />
        </View>
        <BottomModal
          heightExtended={400}
          ref={ref => {
            myRef.current = ref;
          }}
        >
            <View style={{width: '100%', height:400}}></View>
        </BottomModal>
        </>
    )
}

export default Module2;

