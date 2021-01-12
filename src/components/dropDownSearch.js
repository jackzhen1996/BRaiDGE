import {Image,Dimensions,Input,Button,TextInput, StyleSheet, Text, View,TouchableWithoutFeedback, Keyboard,LayoutAnimation } from 'react-native';
import React, {useEffect, useState,createRef} from 'react';
import { useNavigation ,} from '@react-navigation/native';
import MenuIcon from '../../assets/icons-menu.tsx';
import { TouchableOpacity } from 'react-native-gesture-handler';


const DropDown = function({checkOnPress,isFocused,searchingFor,selected}) {
    //onTextChange checks for matched results
    const navigation = useNavigation();
    const [textRef,setRef] = useState(createRef());

    return (
        <View style = {{height: '5%',width:'100%',position:'absolute',top:50, display: 'flex', flexDirection: 'row', justifyContent:'space-evenly'}}>
            <View style = {styles.searchBar}>
            {/*<Image source = {require('../../assets/menu.svg')}/>*/}
            <View style = {{height: '50%', alignSelf:'center', justifyContent:'center', marginLeft:'5%'}}>
                <TouchableOpacity onPress = {()=>navigation.openDrawer()}>
                    <MenuIcon/>
                </TouchableOpacity>
            </View>
            <TextInput 
                clearButtonMode = 'always' 
                style = {{borderRadius: 15,width: '80%',fontSize: 18,height:40,backgroundColor:'white', marginLeft:'5%'}}
                clearTextOnFocus = {true}
                placeholder = 'Enter county name'
                //Navigates to SelectionPage
                onFocus = {()=>{
                    LayoutAnimation.configureNext( LayoutAnimation.create(
                        170,
                        LayoutAnimation.Types.keyboard,
                        LayoutAnimation.Properties.opacity
                      ));
                    checkOnPress(true)
                }}
                //SelectionPage catches this value by callback function
                onChangeText = {(value)=>{
                    searchingFor(value);
                }
                }
                //value = {selected}
            />
            </View>
            {isFocused?
             <TouchableOpacity
             style = {{height: '100%', justifyContent:'center'}}
             onPress = {
                 ()=>{
                    LayoutAnimation.configureNext( LayoutAnimation.create(
                        170,
                        LayoutAnimation.Types.keyboard,
                        LayoutAnimation.Properties.opacity
                      ));
                     
                     checkOnPress(false);
                     Keyboard.dismiss();
                    }

                }> 
                <Text style = {{fontSize: 15}}>
                    Cancel
                </Text>
            </TouchableOpacity>
            : 
                null
            }

        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
      }

  });

export default DropDown;

