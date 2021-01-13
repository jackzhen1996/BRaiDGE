import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      container2: {
        borderBottomColor: "#E9E8E8",
        borderBottomWidth: 1,
        width: "100%",
        display: "flex",
      },
      headerTitle : {
        fontSize: 40,
        textAlign: "center",
        width: "100%",
        fontWeight: "bold",
        marginTop: "10%",
        paddingBottom: "1%",
      },   
      headerDescription: {
        fontSize: 18,
         width: "95%", 
         alignSelf: "center" 
      },
      predictButton: {
        marginTop: "10%",
        height: 45,
        width: 165,
        backgroundColor: "#257FF2",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      },    

      scroll: {
        width: Dimensions.get("window").width,
        paddingBottom: "35%",
      },
    
      inputContainer: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 13,
        height: 90,
        width: "90%",
        alignSelf: "center",
        marginTop: "10%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      },
      predictButtonText: {
        fontSize: 18,
        color: "white" 
      },
      inputDescription: {
        fontSize: 20, 
        fontWeight: "bold"
      },
      inputText: {
        borderBottomWidth: 1,
        borderBottomColor: "black",
        width: "70%",
        height: 40,
        textAlign: "center",
        fontSize: 15,
      }
  });

export default styles;