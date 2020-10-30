import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingVertical: 100,
      paddingHorizontal:40,
      backgroundColor: 'white',
      alignItems: 'center'
    },
    figura:{
        height: 100,
        width:100,
        backgroundColor: 'white',
        borderRadius:10,
        backgroundColor: '#FF8C8C',
        marginTop:200
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        width: '100%'
    }
  });
  

export default styles;