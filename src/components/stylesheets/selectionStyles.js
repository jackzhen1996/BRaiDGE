import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        zIndex: 1,
        height: '100%',
        width:'100%',
        //borderWidth:1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
      list : {
          marginTop: '24%',
          width:'93%',
        //  borderWidth: 1
      },
      row: {
        flex: 1,
        flexDirection: "row",
        borderBottomColor: "#E9E8E8",
        borderBottomWidth: 1,
        height: 45,
        justifyContent: "space-around",
      },
      pinIcon: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center" 
      },
      resultText: {
        width: "85%",
        fontSize: 18,
        padding: "2.5%",
        textAlign: "left",

      }
  });

export default styles;