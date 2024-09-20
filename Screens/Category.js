import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Image, useWindowDimensions ,TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


export default function All() {
    const Navigation = useNavigation();
  return (
<View style={{backgroundColor:"#101010",width:"100%",height:"100%"}}>
<TouchableOpacity onPress={()=>Navigation.goBack()}>
<AntDesign name="close" size={24} color="white" style={{margin:20,top:40,fontSize:30,fontWeight:"bold"}} />
</TouchableOpacity>
<View style={{marginTop:"40%"}}>
<TouchableOpacity onPress={()=>Navigation.navigate("Recommended")}>
<Text style={styles.txt}>Explore</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>Navigation.navigate("Profiles")}>
<Text style={styles.txt}>Profile</Text>
</TouchableOpacity>
<TouchableOpacity onPress={()=>Navigation.navigate("User")}>
<Text style={styles.txt}>App user's</Text>
</TouchableOpacity>

</View>
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
  txt:{
    textAlign:"center",
    alignItems:"center",
    color:"white",
    fontSize:45,
    fontWeight:"700",
    paddingBottom:20
  }
});
