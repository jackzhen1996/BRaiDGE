import React, {useEffect, useState,} from 'react';
import {ScrollView,TouchableOpacity,Dimensions,FlatList,Input,Button,TextInput, StyleSheet, Text, View, TouchableOpacityBase, Image, ImageBackground } from 'react-native';
import Modal from 'react-native-modal';
import BackButton from '../../assets/backButton.tsx';
import Svg from '../../assets/cc.tsx';

const detailedView = function({setModal,showModal,data}) {
    //Use useeffect to fetch required data in this view
        //POST api route test method
    const [pic,showPic] = useState(true);

    const Data = data? data[0]: 'No data found';

    const material = Data['structure_kind_43a'];
    const type = Data['structure_type_43b'];
    const year_built = Data['year_built_027'];
    const county = Data['county_name'];
    const id = Data['structure_number_008'];

    const fakeData= {
        'Identification and Location' : [
            {'Highway Agency District': Data['highway_district_002']},
            {'County Code': 'abc'},
            //{'Place Code (4):': Data['']},
            {'Features Intersected' : Data['features_desc_006a']},
            {'Facility Carried By Structure' : Data['facility_carried_007']},
            {'Location': Data['location_009']},
            {'Latitude, decimal' : Data['latitude']},
            {'Longitude, decimal' : Data['longitude']},
            {'Maintenance Responsiblity' : Data['maintenance']},
            {'Owner' : Data['owner_022']},
            {'Year Built' : Data['year_built_027']},
            {'Historical Significance': Data['historic_sig']},
            {'Neighboring State Code': Data['other_state_code_098a']},
            {'Percent Responsibility Border Bridge': Data['other_state_pcnt_098b']},
            {'Border Bridge Structure Number': Data['othr_state_struc_no_099']},
            {'Parallel Structure Designation Code': Data['parallel_structure_101']},
            {'Year Reconstructed': Data['year_reconstructed_106']}
        ],
        'Structure Type and Materials': [
            {'Main Design Material Code': Data['structure_kind_43a']},
            {'Type of Design Construction Main Code': Data['structure_type_43b']},
            {'Approach Span Design Material Code': Data['appr_kind_44a']},
            {'Type of Design Construction Approach Code': Data['appr_type_44b']},
            {'Number of Spans in Main Unit': Data['main_unit_spans_045']},
            {'Number of Approach Span' : Data['appr_spans_046']},
            {'Deck Structure Type Code': Data['deck_structure_type_107']},
            {'Wear Surface Type Code': Data['surface_type_108a']},
            {'Membrane Type Code' : Data['membrane_type_108b']},
            {'Deck Protection Code': Data['deck_protection_108c']},
        ],
        'Dimensions and Clearances': [
            {'Inventory Route- Minimum Vertical Clearance': Data['min_vert_clr_010']},
            {'Approach Roadway Width': Data['appr_width_ft_032']},
            {'Bridge Median Code': Data['median_code_33']},
            {'Skew Angle, degrees' : Data['degrees_skew_034']},
            {'Structure Flared' : Data['structure_flared_035']},
            {'Navigation Control Code': Data['navigation_038']},
            {'Navigation Vertical Clearance': Data['nav_vert_clr_mt_039']},
            {'Navigation Horizontal Clearance': Data['nav_horr_clr_mt_040']},
            {'Inventory Route Total Horizontal Clearance': Data['horr_clr_mt_047']},
            {'Length of Maximum Span': Data['max_span_len_mt_048']},
            {'Structure Length, ft' : Data['structure_len_mt_049']},
            {'Left Curb/Sidewalk, Width, ft': Data['left_curb_mt_050a']},
            {'Right Curb/Sidewalk, Width, ft': Data['right_curb_mt_050b']},
            {'Bridge Roadway Width Curb to Curb, ft': Data['roadway_width_mt_051']},
            {'Deck Width': Data['deck_width_mt_052']},
            {'Minimum Vertical Clearance Over Bridge Roadway, ft': Data['vert_clr_over_mt_053']},
            {'Minimum Vertical Underclearance, ft': Data['vert_clr_und_054b']},
            {'Minimum Lateral Underclearnce on Right, ft': Data['lat_und_mt_055b']},
            {'Minimum Lateral Underclearance on Left, ft': Data['left_lat_und_mt_056']},
            {'Pier Abutment Protection Code': Data['pier_protection_111']},
            {'Minimum Vertical Clearance - Lift Bridge, ft': Data['min_nav_clr_mt_116']},
            {'Deck Area': 'Deck width x deck length?'}
        ],
        'Inspection': [
            {'Inspection Date': Data['date_of_inspect_090']},
            {'Designated Inspection Frequency, months' : Data['inspect_freq_months_091']},
            {'Fracture Critical Details': Data['fracture_092a']},
            {'Underwater Inspection': Data['undwater_look_see_092b']},
            {'Other Special Inspection Data': Data['spec_inspect_092c']},
            {'Fracture Critical Detail Date': Data['fracture_last_date_093a']},
            {'Underwater Inspection Date': Data['undwater_last_date_093b']},
            {'Other Special Inspection Date': Data['spec_last_date_093c']}
        ],
        'Conditions Rating and Evaluation': [
            {'Birdge Railings': Data['railings_036a']},
            {'Transitions': Data['transitions_036b']},
            {'Approach Guardrail': Data['appr_rail_036c']},
            {'Bridge Guardrail Ends': Data['appr_rail_end_036d']},
            {'Deck Condition Rating': Data['deck_cond_058']},
            {'Superstructure Condition Rating': Data['superstructure_cond_059']},
            {'Substructure Condition': Data['substructure_cond_060']},
            {'Channel Protection Condition': Data['channel_cond_061']},
            {'Culvert Condition': Data['culvert_cond_062']},
            {'Structural Evaluation Appraisal': Data['structural_eval_067']},
            {'Deck Geometry Appraisal': Data['deck_geometry_eval_068']},
            {'Underclearance Appraisal Vertical Horizontal': Data['undclrence_eval_069']},
            {'Waterway Adequacy Appraisal': Data['waterway_eval_071']},
            {'Approach Alignment Appraisal': Data['appr_road_eval_072']},
            {'Scour Critical Bridges Code': Data['scour_critical_113']}
        ],
        'Load Rating and Posting': [
            {'Design Load Descriptor': Data['design_load_31']},
            {'Structure Operational Status Code': Data['open_closed_posted_041']},
            {'Operating Rating Method Code': Data['opr_rating_meth_063']},
            {'Operating Rating, US tons': Data['operating_rating_064']},
            {'Inventory Rating Method Code' : Data['inv_rating_meth_065']},
            {'Inventory Rating, US tons': Data['inventory_rating_066']},
            {'Bridge Posting Code': Data['posting_eval_070']},
        ],
        'Traffic and Roadway Data': [
            {'Record Type': 'Cant find this'},
            {'Route Signing Prefix Code': Data['route_prefix_5b']},
            {'Designated Level of Service Code': Data['service_level_5c']},
            {'Route Number': 'Cant find this'},
            {'Directional Suffix Code': Data['direction_5e']},
            {'Base Highway Network': 'cant find this'},
            {'Bypass or Detour Length, miles': Data['detour_miles']},
            {'Toll Status': Data['toll_20']},
            {'Functional Class of Inventory': Data['functional_class_26']},
            {'Lanes on the Structure': Data['traffic_lanes_on_028a']},
            {'Lanes Under the Structure': Data['traffic_lanes_und_028b']},
            {'Average Daily Traffic' : Data['adt_029']},
            {'Year of Average Daily Traffic': Data['year_adt_030']},
            {'Type of Service on Bridge Code': Data['service_on_042a']},
            {'Type of Service Under Bridge Code': Data['service_und_042b']},
            {'STRAHNET Highway Designation': Data['strahnet_highway_100']},
            {'Number of Directions of Traffic': Data['traffic_direction_102']},
            {'Inventory Route NHS Code': Data['highway_system_104']},
            {'Federal Lands Highways Code': Data['federal_lands_105']},
            {'Average Daily Truck Traffic (Percent ADT)': Data['percent_adt_truck_109']},
            {'Designated National Truck Network Code': Data['national_network_110']},
            {'Future Average Daily Traffic': Data['future_adt_114']},
            {'Year of Fture Average Daily Traffic': Data['year_of_future_adt_115']}

        ]
    }

    const materialMap = {
        '0 - Other': {
            'color': 'black',
            'name' : 'O'
        },
        '1 - Concrete': {
            'color': '#FF8E14',
            'name' : 'C'
        },
        '2 - Concrete Continuous': {
            'color' : '#FF8E14',
            'name': 'CC'
        },
        '3 - Steel' : {
            'color': '#65C8FF',
            'name': 'S'
        },
        '4 - Steel Continuous': {
            'color': '#65C8FF',
            'name': 'SC'
        },
        '5 - Prestressed Concrete' : {
            'color': '#92DDAF',
            'name': 'PC'
        },
        '6 - Prestressed Concrete Continuous': {
            'color' : '#92DDAF',
            'name' : 'PCC'
        },
        '7 - Wood or Timber' : {
            'color' : '#E8475A',
            'name' : 'WT'
        },
        '8 - Mansonry': {
            'color' : '#5F4E79',
            'name' : 'M'
        },
        '9 - Aluminum, Wrought Iron, or Cast Iron': {
            'color': '#6697FB',
            'name': 'AL'
        }
    }

    //Maps out drop downs for each category
    const mapData = function(data) {
        const result = [];
        if (data) {
        for (const item in fakeData) {
            const [show,showInfo] = useState(false);
            result.push(
                <View style = {{flex:1, justifyContent:'space-evenly', paddingBottom:'2%'}}>
                    <TouchableOpacity onPress = {()=>showInfo(!show)} style = {{display:'flex', flexDirection:'row',borderBottomWidth: show? 1: null, justifyContent:'space-between'}}>
                        <View style = {{width:'88%',}}>
                            <Text style = {{fontSize:20, paddingTop:15, fontWeight: 'bold',}}>{item}</Text>
                        </View>
                        {show? 
                            <Image style = {{marginTop: '3%',height: 30, width: 25,}} source = {require('../../assets/arrowUp.png')}/>
                        : 
                            <Image style = {{ marginTop: '3%',height: 30, width: 25,}} source = {require('../../assets/arrowDown.png')}/>
                    }
                    </TouchableOpacity>
                    <View style = {{marginBottom: show? '10%' : 0, marginTop: show? '5%': 0}}>
                        {show &&  data[item].map((item,index)=>{
                            const key = Object.keys(item)[0];
                            return (
                                <View style = {{flex:1, flexDirection:'row', borderBottomWidth:1,borderBottomColor:'#E9E8E8',}}>
                                    <View style = {{flex:4, justifyContent:'center'}}>
                                        <Text style = {{fontSize:15,fontWeight: 'bold',padding:16,paddingLeft:0,paddingRight:20}} key = {index}>{key}</Text>
                                    </View>
                                    <View style = {{flex:3, justifyContent:'center'}}>
                                        <Text style = {{fontSize:15, textAlign:'right',padding:11}}>{item[key]}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
            )
        }
    }
        return result;
    }
    
    
    
    const dataFields = 
    ["Structure Number #", 'Structure Type','Last Inspection Date','Identification and Location',
    'Structural Type and Materials','Dimensions and Clearance', 'Inspection', 'Condition Rating and Evaluation'
     ,'Load Rating and Posting', 'Traffic and Roadway Data', 'Dimensions and Clearance'];

    //Map out all data fields
    //const mappedFields = dataFields.map((field,index)=>(
    //    <TouchableOpacity key = {index}>
    //        <Text style = {{fontSize:23}}>
    //            {field}
    //        </Text>
    //    </TouchableOpacity>
    //));

    //const mapData = function(obj) {
    //    let result = [];
    //    for (const [key,value] of Object.entries(obj[0])) {
    //        result.push(
    //            <Text>{key} : {value}</Text>
    //        )
    //    }
    //    return result;
    //}

    return (
        <View>
            <Modal style = {{margin:0,backgroundColor:'white'}} isVisible = {showModal}>
                <View style = {{position:'relative',width: '100%',height: '40%', zIndex: 2}}>
                    <TouchableOpacity onPress = {()=>showPic(!pic)} style = {{height: '80%',width: '100%',}}>
                        <ImageBackground style = {{height: 286, tintColor: 'cyan',}} source = {require('../../assets/bridge_placeholder_large.png')} >
                        {/*{pic? 
                        <Image style = {{height: 286}}source = {require('../../assets/bridge_placeholder_large.png')}/>
                            :*/}
                         {/*//Top*/}
                         {pic?
                        <View style = {{flex:1, backgroundColor: pic ?'rgba(100,100,100,0.7)' : null}}>

                            <View style = {{width: '100%', flex:3}}>
                                <TouchableOpacity style = {{top: '60%', left: '5%',width:'15%'}} onPress = {()=>setModal(false)}><BackButton/></TouchableOpacity>
                            </View>
                            <View style = {{width: '100%', flex:2}}>
                                <Text style = {{fontSize: 50, textAlign:'center', fontWeight:'bold', color: 'white'}}>#{id}</Text>
                            </View>
                            
                            <View style = {{flex:3, marginLeft: '5%',}}>
                                <View style = {{alignSelf: 'left', height: '40%'}}>
                                    <Text style = {{overflow: 'hidden',borderRadius: 10,fontSize: 15,height: '70%',backgroundColor:'white', paddingTop: '1.5%', textAlign:'left', marginTop: '3%', padding: '5%'}}>{material}</Text>
                                </View>
                                <View style = {{alignSelf: 'left', height: '40%'}}>
                                    <Text style = {{overflow: 'hidden',borderRadius: 10, fontSize: 15,height: '80%',backgroundColor:'white', padding: '1.5%', textAlign:'left', marginTop: '3%', paddingTop:'2%', paddingLeft:'5%',paddingRight:'5%'}}>{type}</Text>
                                </View>
                            </View>
                        </View>
                        : 
                        <TouchableOpacity style = {{top: '23%', left: '5%',width:'15%'}} onPress = {()=>setModal(false)}><BackButton/></TouchableOpacity>
                        }
                        </ImageBackground>
                    </TouchableOpacity>
                    <View style = {{flex:1, flexDirection:'row', }} >
                        <View style = {{flex: 2, justifyContent:'center', alignItems:'center'}}>
                           {data? <Svg height = {50} width = {50} name = {materialMap[material].name} color = {materialMap[material].color}/> : null}
                        </View>
                        <View style = {{flex: 5}}>
                            <Text style = {{textAlign:'right', fontSize: 15, marginTop: '5%',marginRight: '4%', fontWeight: 'bold'}}>Year Built: {year_built} </Text>
                            <Text style = {{textAlign:'right', fontSize: 15, marginRight: '4%', marginTop: '1%',marginRight:'4%', textDecorationLine: 'underline'}}>{county}, California</Text>
                        </View>
                    </View>
                </View>

                    <ScrollView contentContainerStyle = {{alignItems:'center',paddingBottom:'10%',paddingTop:'2%', marginTop:20, marginLeft:14,marginRight:14, borderTopColor:'#E9E8E8', borderTopWidth:1 }}>
                    {mapData(fakeData) }
                    {/*<TouchableOpacity onPress = {()=>showInfo(!show)} style = {{display:'flex', flexDirection:'row'}}>
                        <Text style = {{width:'70%'}}>Identification and Location</Text>
                        <Text>more info</Text>
                    </TouchableOpacity>*/}
                        {/*Required data fields*/}
                        {/*{data?mapData(data):null}*/}
                    </ScrollView>

            </Modal>
        </View>
    )
}

export default detailedView