import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet,FlatList, Text, View,TextInput,Image, useWindowDimensions,TouchableOpacity, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function Rec() {
    const Navigation = useNavigation();

    const data=[
{
id:1,
title:"Béjaïa",
imageUrl:"https://media.safarway.com/content/e0176ed3-ba3c-41b0-b39d-f66e5d5b198b_sm.jpg",
cat:"Discover and book top experiences in Bejaia, Algeria, from stunning ...",
},
{
    id:2,
    title:"Ain-Taya",
    imageUrl:"https://cdn.pixabay.com/photo/2017/06/20/22/13/ain-taya-2425120_1280.jpg",
    cat:"Ain Taya: Explore picturesque beaches and local attractions. Our app simplifies ...",

    },
    {
        id:3,
        title:"Skikda",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Collo_skikda.jpg",
        cat:"Skikda is a picturesque coastal city in Algeria, known for its stunning ...",

        },
        
        {
            id:4,
            title:"Tasili",
            imageUrl:"https://www.dzbreaking.com/wp-content/uploads/2018/11/tasiiiii.jpg",
            cat:"Tassili n'Ajjer is a UNESCO World Heritage site in Algeria, famous for...",

            },
            
    ]

  return (
<View style={{backgroundColor:"#101010",width:"100%",height:"100%",paddingBottom:"60%"}}>
<StatusBar style='light'/>
<View>
    <TouchableOpacity onPress={()=>Navigation.navigate("Category")}>
    <AntDesign name="bars" size={24} color="white" style={{margin:25,top:25,fontSize:28}} />
    </TouchableOpacity>

    <Text style={{color:"white",margin:26,fontSize:45,bottom:10,fontWeight:"700"}}>Explore</Text>
    <TouchableOpacity style={{marginLeft:205,bottom:65,width:19,height:20}} onPress={()=>Navigation.navigate("Category")}>
    <FontAwesome6 name="caret-down" size={24} color="white"  />
    </TouchableOpacity>
    <FlatList
  data={data}
  renderItem={({ item }) => (
    <View style={{ paddingBottom: 100 }}>
      <View style={{ marginLeft: 13 }}>
        {item.id === 1 ? (
          <TouchableOpacity
            onPress={() => Navigation.navigate('Details', { id: item.id })}
          >
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                width: 290,
                height: 150,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5
              }}
            />
            <Text style={{ color: "white", top: 10, fontSize: 18, fontWeight: '700' }}>
              {item.title}
            </Text>
            <Text style={{ color: "#A5A5A5", top: 20, width: "90%", marginBottom: -40 }}>
              {item.cat}
            </Text>
          </TouchableOpacity>
        ) : item.id === 2 ? (
          <TouchableOpacity
            onPress={() => Navigation.navigate('aintaya', { id: item.id })}
          >
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                width: 290,
                height: 150,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5
              }}
            />
            <Text style={{ color: "white", top: 10, fontSize: 18, fontWeight: '700' }}>
              {item.title}
            </Text>
            <Text style={{ color: "#A5A5A5", top: 20, width: "90%", marginBottom: -40 }}>
              {item.cat}
            </Text>
          </TouchableOpacity>
        ) : item.id === 3 ? (
          <TouchableOpacity
            onPress={() => Navigation.navigate('skikda', { id: item.id })}
          >
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                width: 290,
                height: 150,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5
              }}
            />
            <Text style={{ color: "white", top: 10, fontSize: 18, fontWeight: '700' }}>
              {item.title}
            </Text>
            <Text style={{ color: "#A5A5A5", top: 20, width: "90%", marginBottom: -40 }}>
              {item.cat}
            </Text>
          </TouchableOpacity>
        ) : item.id === 4 ? (
          <TouchableOpacity
            onPress={() => Navigation.navigate('Tasili', { id: item.id })}
          >
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                width: 290,
                height: 150,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5
              }}
            />
            <Text style={{ color: "white", top: 10, fontSize: 18, fontWeight: '700' }}>
              {item.title}
            </Text>
            <Text style={{ color: "#A5A5A5", top: 20, width: "90%", marginBottom: -40 }}>
              {item.cat}
            </Text>
          </TouchableOpacity>
        ) : (
          <View>
            <Image
              source={{ uri: item.imageUrl }}
              style={{
                width: 290,
                height: 150,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5
              }}
            />
            <Text style={{ color: "white", top: 10, fontSize: 18, fontWeight: '700' }}>
              {item.title}
            </Text>
            <Text style={{ color: "#A5A5A5", top: 20, width: "90%", marginBottom: -40 }}>
              {item.cat}
            </Text>
          </View>
        )}
      </View>
    </View>
  )}
/>

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
});
