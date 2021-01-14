import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    imageContainer: {
        height: "75%", 
        borderTopLeftRadius: 10 
    },
    imageStyle: {
        width: 150, 
        height: 100, 
        borderTopLeftRadius: 13 
    },
    textContainer: {
        height: "25%",
        backgroundColor: "white",
        borderBottomLeftRadius: 13,
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        paddingRight: "10%",
        paddingTop: "2%",

    },
    heartContainer: {
        position: "absolute",
         right: "5%", 
         top: "5%"
    },
    changeStyle: {
        position: "relative",
        width: "90%",
        height: 135,
        flex: 1,
        margin: "3%",
        left: null,
        right: null,
        bottom: null,
    },
    previewContainer: {
        position: "absolute",
        width: "90%",
        height: "16%",
        backgroundColor: "white",
        bottom: "8%",
        left: "5.3%",
        borderRadius: 13,
        flex: 1,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      left: {
        position: "relative",
        width: "40%",
        borderBottomLeftRadius: 13,
        //borderWidth: 1
        //borderWidth: 1,
      },
      text: {
        backgroundColor: "#F8F8F8",
        flex: 1,
        position: "relative",
        padding: "3%",
        borderTopRightRadius: 13,
        borderBottomRightRadius: 13,
      },
      header: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: "1%",
        paddingLeft: 10,
        width: "100%",
        //borderWidth:1
      },
      data: {
        padding: "1%",
        flexWrap: "wrap",
        marginTop: "1%",
        fontSize: 15,
        paddingLeft: 10,
      },
    
  });

export default styles;