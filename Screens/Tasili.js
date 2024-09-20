import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function Tasili() {
  const Navigation = useNavigation();
  return (
<View style={{width:'100%',height:'100%',backgroundColor:"#101010"}}>
  <StatusBar style='light' />
  <TouchableOpacity onPress={()=>Navigation.navigate("Category")}>
    <AntDesign name="bars" size={24} color="white" style={{margin:25,top:25,fontSize:28}} />
    </TouchableOpacity>
<View>
<Image source={{uri:"https://r4.wallpaperflare.com/wallpaper/139/484/908/algeria-africa-red-desert-mountains-rocks-clouds-wallpaper-22d1b2d07d765e9bba48821590d88902.jpg"}} style={{width:'100%',height:340,marginTop:20}}/>
<Text style={{color:'white',textAlign:"left",paddingLeft:20,paddingTop:10,fontSize:35,fontWeight:"700"}}>Tasili</Text>
<Text style={{color:"#A5A5A5",padding:10,left:10}}>Tassili n'Ajjer is a UNESCO World Heritage site in Algeria, famous for its desert landscapes, ancient rock art, and unique geological formations.</Text>
</View>
<TouchableOpacity style={{backgroundColor:"#FDAF01",width:"86%",left:24,marginTop:10,height:45,padding:10,borderRadius:5}} onPress={()=>Navigation.navigate("Book_tasili")}>
  <Text style={{textAlign:"center",color:"white",fontWeight:"700"}}>Book this trip</Text>
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