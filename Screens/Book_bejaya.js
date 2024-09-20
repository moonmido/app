import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Image, useWindowDimensions,TouchableOpacity,CheckBox } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Checkbox from 'expo-checkbox';

export default function Book_bejaya() {
    const [isChecked, setChecked] = useState(false);

    const Navigation = useNavigation();
  return (
<View style={{width:'100%',height:'100%',backgroundColor:"#101010"}}>
<TouchableOpacity onPress={()=>Navigation.navigate("Category")}>
    <AntDesign name="bars" size={24} color="white" style={{margin:25,top:25,fontSize:28}} />
    </TouchableOpacity>
<View style={{display:"flex"}}>
    <Image source={{uri:"https://media.safarway.com/content/e0176ed3-ba3c-41b0-b39d-f66e5d5b198b_sm.jpg"}} style={{width:125,height:175,marginLeft:"55%",borderRadius:15,top:14}} />
<Text style={{color:"white",width:180,bottom:168,padding:10,fontSize:27,fontWeight:"700"}}>Summary of your trip to Béjaïa</Text>
<Text style={{color:'white',textAlign:"center",fontSize:30,fontWeight:"800",bottom:90}}>Hotel</Text>
<View style={{padding:10,marginBottom:750,top:-40}}>
    <Image source={{uri:"https://scontent.falg6-1.fna.fbcdn.net/v/t39.30808-6/274995173_434629511740566_2383953812805078528_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=QYVMww4-WOgQ7kNvgHB6m6L&_nc_ht=scontent.falg6-1.fna&oh=00_AYC1Ny5-YWT5juA0IpJ_bMDzU3XaRlG8OVI0xchijzrYWQ&oe=66BFCF43"}} style={{width:"22%",height:"25%",marginBottom:50,bottom:40,borderRadius:10}}/>
<Text style={{color:"white",paddingLeft:80,bottom:178,fontSize:20}}>Atlantis Hôtel Bejaia</Text>
<Text style={{color:"white",paddingLeft:80,bottom:175}}>RN N 09 IRIYAHEN</Text>
<Text style={{color:"white",paddingLeft:80,bottom:172}}><FontAwesome name="star" size={24} color="#FDAF01"/><FontAwesome name="star" size={24} color="#FDAF01"/><FontAwesome name="star" size={24} color="#FDAF01"/><FontAwesome name="star" size={24} color="#FDAF01"/></Text>
<Text style={{color:"white",bottom:145,textAlign:"center",fontSize:20,fontWeight:"800"}}>TOTALE : 80000 DA</Text>
<Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : "#FDAF01"}
        />
<Text style={{color:"gray",marginLeft:35,bottom:182,fontSize:10}}>By clicking this button you are accepting our terms and conditions</Text>
<TouchableOpacity style={{backgroundColor:"#FDAF01",width:"86%",left:24,marginTop:10,height:45,padding:10,borderRadius:5,bottom:170}} onPress={()=>{if(isChecked){
  Navigation.navigate("Confirmtrip");}
  else{
    alert("Accept Terms Please !");
  }
}}>
  <Text style={{textAlign:"center",color:"white",fontWeight:"700"}}>Confirm booking</Text>
</TouchableOpacity>
</View>

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
  checkbox: {
    marginTop:20,
    margin: 8,
    bottom:150
  },

});