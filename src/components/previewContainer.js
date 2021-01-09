import React, {useEffect, useState,} from 'react';
import {TouchableOpacity,Dimensions,FlatList,Input,Button,TextInput, StyleSheet, Text, View,Image} from 'react-native';
import Heart from '../../assets/heart.tsx';
import EmptyHeart from '../../assets/EmptyHeart.tsx';


const previewContainer = function({identifier, goToDetailed,fetchData, savePage, isLiked}) {
  var changeStyle = null;

  const [heart,showHeart] = useState(false);
  savePage? changeStyle = {
    position: 'relative',
    width: '90%',
    height: 135,
    flex:1,
    margin: '3%',
    left: null,
    right: null,
    bottom: null
  }: null

  const kind = identifier.kind;
  const type = identifier.type;
  const structID = identifier.id;

  var post_route = "http://192.168.86.61:5000/testID";
  const post_search = function(url,identifier) {
      const requestOptions = {
        method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({'latitude': identifier})
      }
      fetch(url, requestOptions)
      //response is in json string or Python object string
          .then(response => response.json())
          .then(data => {
              fetchData(data);
          });
    }
    const id = identifier? identifier.latitude : 0;
    return (
    //On press with lead to the detailed page
    <TouchableOpacity onPress = {()=>{
        goToDetailed(true)
        post_search(post_route,id)
        }} 
        style = {[styles.previewContainer, changeStyle]}>
            <View style = {styles.left}>
                {/*icon goes here*/}
                {/*<Image></Image>*/}
                <View style = {{height: '75%', borderTopLeftRadius:10}}>
                  <Image style = {{width:150, height: 100, borderTopLeftRadius:13,}} source = {require('../../assets/bridge_placeholder.png')}/>
                </View>
                <View style = {{height: '25%',backgroundColor: 'white',borderBottomLeftRadius:13}}>
                  <Text style = {{fontSize: 20, textAlign:'center', fontWeight:'bold',paddingRight: '10%', paddingTop: '2%',}}>#{structID}</Text>
                </View>
            </View>
            <View style = {styles.text}>
              {/*<View style = {{flex:1,flexDirection:'row', width: '100%',justifyContent:'flex-end'}}><HeartIcon/></View>*/}
              <View style = {{position:'absolute',right: '5%', top: '5%'}}>
                {heart?
                <TouchableOpacity onPress = {()=>showHeart(false)}>
                  <Heart/>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress = {()=>showHeart(true)}>
                  <EmptyHeart/>
                </TouchableOpacity>
                }
                </View>
                <Text style = {styles.header}>Kind</Text>
                <Text style = {styles.data}>{kind}</Text>
                <Text style = {styles.header} >Type</Text>
                <Text style = {styles.data}>{type}</Text>
            </View>
    </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    previewContainer : {
        position:'absolute',
        width: '90%',
        height: '16%',
        backgroundColor: 'white',
        bottom: '8%',
        left: '5.3%',
        borderRadius: 13,
        flex:1,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      left: {
        position: 'relative',
        width: '40%',
        borderBottomLeftRadius: 13,
        //borderWidth: 1
        //borderWidth: 1,
      },
      text: {
        backgroundColor: '#F8F8F8',
        flex:1,
        position: 'relative',
        padding: '3%',
        borderTopRightRadius: 13,
        borderBottomRightRadius: 13
      },
      header: {
        fontWeight:'bold',
        fontSize: 18,
        marginTop: '1%',
        paddingLeft: 10,
        width: '100%',
        //borderWidth:1

      },
      data : {
        padding: '1%',
        flexWrap: 'wrap',
        marginTop: '1%',
        fontSize:15,
        paddingLeft: 10
      }
  
});


export default previewContainer;