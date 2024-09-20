import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput,Image, useWindowDimensions, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {getFirestore,collection, addDoc, db,getDocs } from '../firebase/index';
import Entypo from '@expo/vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Proflis() {
    const Addprofile = async()=>{
try {
    const docRef  = await addDoc(collection(db,"Profils"),{
name :name,
Address:address,
phone:phone

    });
    console.log("Document written with ID: ", docRef.id);
    alert('Success')
  } catch (e) {
    console.error("Error adding document: ", e);
    alert('No')

}        
    };
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');



const Save = async() =>{
try {
  await AsyncStorage.setItem("name" , name), AsyncStorage.setItem("phone",phone), AsyncStorage.setItem("address",address);
} catch (error) {
  alert(error);
}
};

const load = async ()=>{
  try {
    let name  = await AsyncStorage.getItem("name") 
    let name1  = await AsyncStorage.getItem("phone") 
    let name2  = await AsyncStorage.getItem("address") 

    if(name!==null ){
      setName(name),
      setPhone(name1),
      setAddress(name2)
    };

  } catch (error) {
    alert(error);
  }
}

useEffect(()=>{
  load();
},[])



  return (
<View style={{backgroundColor:"#101010",width:"100%",height:"100%"}}>
<Entypo name="log-out" size={24} color="white" style={{top:100,fontSize:120,width:"100%",marginLeft:110}} />
<View style={{top:150}}>
    <TextInput placeholder='Full Name' placeholderTextColor={"gray"} style={styles.txtinp} onChangeText={(text)=>setName(text)} value={name} />
    <TextInput placeholder='Phone Number' placeholderTextColor={"gray"} style={styles.txtinp} onChangeText={(text1)=>setPhone(text1)} value={phone} />
    <TextInput placeholder='Address' placeholderTextColor={"gray"} style={styles.txtinp} onChangeText={(text2)=>setAddress(text2)} value={address} />
</View>
<TouchableOpacity onPressIn={Addprofile} onPress={()=>Save()} style={{marginTop:220}}>
    <Text style={styles.btn}>Send</Text>
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
  txtinp:{
borderWidth:0.5,
color:"white",
marginLeft:30,
marginRight:30,
height:38,
borderColor:"white",
paddingLeft:10,
marginTop:20,
borderRadius:10
},
  btn:{
    backgroundColor:"white",
    textAlign:"center",
    height:50,
    padding:10,
    fontSize:18,
    fontWeight:"700",
    marginLeft:50,
    marginRight:50,
    borderRadius:25,
}
});