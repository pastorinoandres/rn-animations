import React from 'react'
import { View } from "react-native";
import styles from '../styles';

export const Row = ({children})=>(
    <View style={styles.row}>
        {children}
    </View>
)

