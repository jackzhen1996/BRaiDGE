import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '5%',
        width:'100%',
        position:'absolute',
        top:50, 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent:'space-evenly'
      },
      searchBar: {
        paddingTop: 2,
        backgroundColor:'white',
        borderRadius: 20,
        width:'80%', 
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      menuContainer: {
        height: '50%', 
        alignSelf:'center', 
        justifyContent:'center',
         marginLeft:'5%'
      },

      input: {
        borderRadius: 15,
        width: '80%',
        fontSize: 18,
        height:40,
        backgroundColor:'white',
         marginLeft:'5%'
      },
      cancel: {
        height: '100%', 
        justifyContent:'center'
      },
      cancelFont: {
        fontSize: 15
      }
    
  });

export default styles;