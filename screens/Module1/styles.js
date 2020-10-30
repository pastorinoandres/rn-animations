import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingVertical: 100,
      paddingHorizontal:40,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    figura:{
        height: 100,
        width:100,
        backgroundColor: 'white',
        borderRadius:10,
        backgroundColor: '#FF8C8C'
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        width: '100%'
    }
  });
  

export default styles;