import React, {useEffect, useState, useRef} from 'react';
import {TouchableOpacity,Dimensions,FlatList,Input,Button,TextInput, StyleSheet, Text, View,Image,ScrollView} from 'react-native';
import { set } from 'react-native-reanimated';


const abcForm = function() {
    const constructionImpact = ['Weather limitation', 'Environmental schedule', 'Economic Impact', 'District limitation             (>= 1 season)', 'Construction on projects critical path'];
    const environmentalImpact = ['Mitigating sensitive environmental impact with ABC'];
    const costAndDelay = ['Hight ADT/ADTT on or under bridge', 'Significant improvement of traffic control via ABC', 'Are short term closures allowed?', 'Significant delays due to conventional construction'
    , 'High Impact on local economy'];
    const siteConditions = ['Existing Railraods affecting construction window', 'Existing utilities affecting construction window', 'Site issues for conventional construction', 'Is the bridge over waterway?'];
    const riskManagement = ['Worker safety improvement', 'Traveler safety improvement via ABC', 'Any other risks managed by ABC?'];
    const other = ['Will repetition of elements allow for economy of scale?']; 

    const [RP, sumRP] = useState();
    const renderSection = function(form) {          
    const result = form.map((row,index)=>{
        
        const [R,setR] = useState(0);
        const [P,setP] = useState(0);
        const regexR = /[1-5]/g;
        const regexP = /[1-3]/g;


        return(
            <View key = {index} style = {{display:'flex',flexDirection:'row', marginTop: '2.5%'}}>
            <Text style = {{fontSize: 15,flex:6, height: '100%'}}>{row}</Text>
            <View style = {{display: 'flex', flexDirection:'row', flex: 5,marginLeft: '8%'}}>
                <TextInput maxLength = {1}   
                onChangeText = {
                    r=>regexR.test(r)? 
                    setR(parseInt(r))
                    : setR('0')
            }
                 keyboardType = 'numbers-and-punctuation' placeholder = '1-5' style = {[styles.inputBackground,{flex:1,marginRight: '3%', height: 34, textAlign:'center',}]}/>
                <TextInput maxLength = {1} 
                onChangeText = {
                    p=>regexP.test(p)? 
                    setP(parseInt(p))
                    : 
                    setP('0')
            } 
                keyboardType = 'numbers-and-punctuation' placeholder = '1-3' style = {[styles.inputBackground,{flex:1, marginLeft:'3%',marginRight: '3%',height: 34, textAlign:'center',}]}/>
                <Text style = {{flex:1, marginLeft:'3%',fontSize:15, paddingTop:'2.5%', color: '#78849E'}}>{R*P}</Text>
            </View>
        </View>
    )})
        return result;
    }
    return(
        <View style = {styles.container}>
            <ScrollView contentContainerStyle = {styles.scroll}>

                {/*section 1*/}
                <View style = {{width: '90%', alignSelf:'center', height: 180, borderBottomWidth: 1, borderBottomColor:'#E9E8E8'}}>
                    {/*project name*/}
                    <View style = {{width:'100%',}}>
                        <View style = {{height: '40%'}}>
                            <Text style = {styles.header}>Project Name</Text>
                            <TextInput style = {[styles.inputBackground,{marginTop: '2%', width: '95%', height: '60%', borderWidth:1,fontSize:20,padding:5}]}/>
                        </View>
                        <View style = {{display:'flex', flexDirection:'row', height: '40%', marginTop: '4%'}}>
                            <View style = {{flex:1,}}>
                                <Text style = {styles.header}>Date</Text>
                                <TextInput style = {[styles.inputBackground,{marginTop: '2%', width: '90%',height:'60%',fontSize:20,padding:5}]}/>
                            </View>
                            <View style = {{flex:1,}}>
                                <Text style = {styles.header}>Completed By</Text>
                                <TextInput style = {[styles.inputBackground,{marginTop: '2%', width: '90%',height:'60%',fontSize:20,padding:5}]}/>
                            </View>
                        </View>
                    </View>
                </View>

                <View style = {{width: '90%', alignSelf:'center', borderBottomWidth: 1, height: '6.5%',display:'flex', flexDirection:'row', marginTop: '5%',borderBottomColor:'#E9E8E8'}}>
                    <View style = {{flex:1,}}>
                        <Text style = {[styles.header]}>(R) Relevance Range</Text>
                        <Text style = {{width: '75%', color: '#78849E'}}>Enter a number from 1 (low) to 5 (high)</Text>
                    </View>
                    <View style = {{flex:1,}}>
                        <Text style = {[styles.header]}>(P) Priority Rating</Text>
                        <Text style = {{width: '75%',color: '#78849E', marginTop: '13%'}}>Enter a number from 1 (low) to 3 (high)</Text>
                    </View>
                </View>

                {/*section 2*/}
                <View style = {{width: '90%', alignSelf:'center', borderBottomWidth: 1, height: '19%', marginTop: '5%',borderBottomColor:'#E9E8E8'}}>
                    <View style = {{height: '10%', }}>
                        <Text style = {styles.header}>Impacts on Construction Time</Text>
                        {/*R P RXP row*/}
                        <View style = {{display:'flex',flexDirection:'row', justifyContent:'flex-end', marginTop:'2%'}}>
                            <Text style = {[styles.header,{marginRight:'6%'}]}>(R)</Text>
                            <Text style = {[styles.header,{marginRight:'2%'}]}>(P)</Text>
                            <Text style = {styles.header}>(RXP)</Text>
                        </View>

                        {/*rest of the rows*/}
                        {/*<View  style = {{display:'flex',flexDirection:'row',borderWidth:1}}>
                            <Text style = {{fontSize: 18,flex:6}}>Weather Limitation</Text>
                            <View style = {{display: 'flex', flexDirection:'row', borderWidth:2, flex: 5}}>
                                <TextInput style = {{borderWidth:1, flex:1,marginRight: '3%'}}/>
                                <TextInput style = {{borderWidth:1, flex:1, marginLeft:'3%',marginRight: '3%'}}/>
                                <Text style = {{borderWidth:1, flex:1, marginLeft:'3%'}}/>
                            </View>
                        </View>*/}
                        {renderSection(constructionImpact)}                        
                    </View>
                </View>

                <View style = {{width: '90%', alignSelf:'center', borderBottomWidth: 1, height: '8%',marginTop: '8%',borderBottomColor:'#E9E8E8'}}>
                    <Text style = {styles.header}>Environmental Impact(s)</Text>
                    {renderSection(environmentalImpact)}
                </View>

                <View style = {{width: '90%', alignSelf:'center', borderBottomWidth: 1, height: '18%',marginTop: '8%',borderBottomColor:'#E9E8E8'}}>
                    <Text style = {styles.header}>Impacts on User Cost and Delay</Text>
                    {renderSection(costAndDelay)}
                </View>


                <View style = {{width: '90%', alignSelf:'center', borderBottomWidth: 1, height: '15%', marginTop: '7%',borderBottomColor:'#E9E8E8'}}>
                    <Text style = {styles.header}>Site Conditions</Text>
                    {renderSection(siteConditions)}
                </View>

                <View style = {{width: '90%', alignSelf:'center', borderBottomWidth: 1, height: '12%', marginTop: '8%',borderBottomColor:'#E9E8E8'}}>
                    <Text style = {styles.header}>Risk Management</Text>
                    {renderSection(riskManagement)}
                </View>

                <View style = {{width: '90%', alignSelf:'center', borderBottomWidth: 1, height: 250, marginTop: '7%',borderBottomColor:'#E9E8E8'}}>
                    <Text style = {styles.header}>Other</Text>
                    {renderSection(other)}
                </View>

            </ScrollView>

            <View style = {{height: '18%', borderTopWidth:1, width: '100%',display:'flex',borderTopColor:'#E9E8E8'}}>
                <View style = {{display:'flex', flexDirection:'row', justifyContent:'flex-end'}}>
                    <Text style = {[styles.header,{textAlign:'right',padding: '2%',}]}>ABC Rating </Text>
                    <Text style = {{height: '100%', textAlign:'center', paddingTop:'3%',paddingLeft:'3%',paddingRight: '7%', fontSize: 15, color: '#78849E'}}>{}</Text>
                </View>
                <View style = {{flex:1, flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity style = {{borderColor: '#257FF2',height: '50%', width: '40%', borderWidth:2, marginRight: '10%', justifyContent:'center',alignItems:'center', borderRadius : 30}}><Text style = {{color: '#257FF2',fontSize:18,textAlign:'center',fontWeight:'bold'}}>Save Scoresheet</Text></TouchableOpacity>
                    <TouchableOpacity style = {{backgroundColor: '#257FF2',height: '50%', width: '40%',  justifyContent:'center',alignItems:'center',borderRadius : 30}}><Text style = {{color: 'white',fontSize:18, textAlign:'center',fontWeight:'bold'}}>Email Scoresheet</Text></TouchableOpacity>
                </View>
            </View>
        
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      fontSize:20,
      fontWeight:'bold',

    },
    scroll: {
        marginTop: '5%',
        width:Dimensions.get('window').width,
        paddingBottom: '35%'
    },
    inputBackground: {
        borderColor: '#95AED1', 
        backgroundColor:'#F9FBFF',
        borderWidth:1,
        borderRadius: 5
    }
  });

export default abcForm;