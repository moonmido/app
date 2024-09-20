import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


export default function All() {
    const Navigation = useNavigation();
  return (
<View style={{backgroundColor:'#101010',width:"100%",height:"100%"}}>
<StatusBar style='light'/>
<MaterialIcons name="travel-explore" size={204} color="white" style={{textAlign:"center",marginTop:"28%"}} />
<Text style={{color:"white",fontSize:45,fontWeight:"700",textAlign:'center'}}>DzTravel</Text>
<View>
    <Text style={{width:"100%",textAlign:"center",padding:5,paddingTop:30,color:'#A5A5A5'}}>Explore Algeria: ancient ruins, stunning coasts, and cozy rentals await!</Text>
</View>
<TouchableOpacity style={{backgroundColor:"white",top:60,marginLeft:"38%",width:"25%",height:"12%",borderRadius:100}} onPress={()=>Navigation.navigate("Recommended")}>
<MaterialIcons name="start" size={40} color="black" style={{textAlign:"center",padding:20}} />
</TouchableOpacity>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});