import {Image,Dimensions,Input,Button,TextInput, StyleSheet, Text, View,TouchableWithoutFeedback, Keyboard,LayoutAnimation } from 'react-native';
import React, {useEffect, useState,createRef} from 'react';
import { useNavigation ,} from '@react-navigation/native';
import MenuIcon from '../../assets/icons-menu.tsx';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from "./stylesheets/dropDownStyles.js";


const DropDown = function({checkOnPress,isFocused,searchingFor,selected}) {
    //onTextChange checks for matched results
    const navigation = useNavigation();
    const [textRef,setRef] = useState(createRef());

    return (
        <View style = {styles.container}>
            <View style = {styles.searchBar}>
            {/*<Image source = {require('../../assets/menu.svg')}/>*/}
            <View style = {styles.menuContainer}>
                <TouchableOpacity onPress = {()=>navigation.openDrawer()}>
                    <MenuIcon/>
                </TouchableOpacity>
            </View>
            <TextInput 
                clearButtonMode = 'always' 
                style = {styles.input}
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
             style = {styles.cancel}
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
                <Text style = {styles.cancelFont}>
                    Cancel
                </Text>
            </TouchableOpacity>
            : 
                null
            }

        </View>

    )
};

export default DropDown;

