import { useLinkProps, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput,Image, useWindowDimensions,TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore,collection, addDoc, db,getDocs } from '../firebase/index';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function Confirmtrip() {

const Addprofile = async()=>{
    try {
        const docRef  = await addDoc(collection(db,"Commands"),{
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
        const [subject,setSubject] = useState('');

    const Navigation = useNavigation();


const save = async()=>{
    try {
        await AsyncStorage.setItem('name',name),AsyncStorage.setItem("phone",phone),AsyncStorage.setItem("address",address);
    } catch (error) {
        alert(error);
    }
};
const load = async()=>{
    try {
let name = await AsyncStorage.getItem('name');
let name1 = await AsyncStorage.getItem('phone');
let name2 = await AsyncStorage.getItem('address')

if(name!==null ){
    setName(name),
    setPhone(name1),
    setAddress(name2)
  };


    } catch (error) {
        alert(error);
    }
};
useEffect(()=>{
    load();
},[])




  return (
    <View style={{width:"100%",height:"100%",backgroundColor:"#101010"}}>
  <StatusBar style='light' />
  <TouchableOpacity onPress={()=>Navigation.navigate("Category")}>
    <AntDesign name="bars" size={24} color="white" style={{margin:25,top:25,fontSize:28}} />
    </TouchableOpacity>
<View>
<MaterialIcons name="confirmation-num" size={54} color="white" style={{textAlign:"center",marginTop:20}}/>
    <Text style={{color:'white',textAlign:'center',fontSize:25,fontWeight:'700',marginTop:20}}>Confirm your trip</Text>
</View>
<View style={{marginTop:40}}>
<TextInput placeholder='Name' onChangeText={(text)=>setName(text)} value={name}  placeholderTextColor={'gray'} style={{borderWidth:1,  borderColor:"white",height:40,paddingLeft:10,width:"80%",marginLeft:"10%",color:"white"}}/>
</View>
<View style={{marginTop:30}}>
<TextInput placeholder='Phone' keyboardType='numeric'  onChangeText={(text1)=>setPhone(text1)} value={phone}  placeholderTextColor={'gray'} style={{borderWidth:1, borderColor:"white",height:40,paddingLeft:10,width:"80%",marginLeft:"10%",color:"white"}}/>
</View>
<View style={{marginTop:30}}>
<TextInput placeholder='Address' onChangeText={(text2)=>setAddress(text2)} value={address} placeholderTextColor={'gray'} style={{borderWidth:1,borderColor:"white",height:40,paddingLeft:10,width:"80%",marginLeft:"10%",color:"white"}}/>
</View>
<View style={{marginTop:30}}>
<TextInput placeholder='Subject' onChangeText={(text3)=>setSubject(text3)} value={subject} placeholderTextColor={'gray'} style={{borderWidth:1, borderColor:"white",height:40,paddingLeft:10,width:"80%",marginLeft:"10%",color:"white"}}/>
</View>
<TouchableOpacity style={{backgroundColor:"#FDAF01",width:"86%",left:24,marginTop:70,height:45,padding:10,borderRadius:5}} onPressIn={Addprofile} onPress={()=>save}>
  <Text style={{textAlign:"center",color:"white",fontWeight:"700"}}>Get your trip</Text>
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