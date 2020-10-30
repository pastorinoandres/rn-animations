import React from 'react'
import { TouchableWithoutFeedback, Animated } from "react-native"
import styles from "../styles"

export const Figura = ({onPress, onLongPress, style={}}) => {

    const figura = {
        ...styles.figura,
        ...style
    }

    return(

        <TouchableWithoutFeedback onPress={onPress} onLongPress={onLongPress}>
            <Animated.View style={figura}>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}