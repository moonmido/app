import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Cat from './Screens/Category';
import Rec from './Screens/Rec';
import Details from './Screens/Details';
import All from './Screens/All';
import Proflis from './Screens/Profils';
import Start from './Screens/Start';
import aintaya from './Screens/Details-aintaya';
import tasili from './Screens/Tasili';
import skikda from './Screens/Details_skikda';
import Book_bejaya from './Screens/Book_bejaya';
import Book_aintaya from './Screens/Book_aintaya';
import Book_skikda from './Screens/Book_skikda';
import Book_tasili from './Screens/Book_tasili';
import Confirmtrip from './Screens/Confirmtrip';
const Stack  = createStackNavigator();
export default function App() {
  return (
<NavigationContainer>
<Stack.Navigator initialRouteName='Start'>
<Stack.Screen name='Recommended' component={Rec} options={{headerShown:false}}/>
<Stack.Screen name='All' component={Rec} options={{headerShown:false}}/>
<Stack.Screen name='Category' component={Cat} options={{headerShown:false}}/>
<Stack.Screen name='Profiles' component={Proflis} options={{headerShown:false}}/>
<Stack.Screen name='Start' component={Start} options={{headerShown:false}}/>
<Stack.Screen name='Details' component={Details} options={{headerShown:false}}/>
<Stack.Screen name='aintaya' component={aintaya} options={{headerShown:false}}/>
<Stack.Screen name='skikda' component={skikda} options={{headerShown:false}}/>
<Stack.Screen name='Tasili' component={tasili} options={{headerShown:false}}/>
<Stack.Screen name='Book_bejaya' component={Book_bejaya} options={{headerShown:false}}/>
<Stack.Screen name='Book_aintaya' component={Book_aintaya} options={{headerShown:false}}/>
<Stack.Screen name='Book_skikda' component={Book_skikda} options={{headerShown:false}}/>
<Stack.Screen name='Book_tasili' component={Book_tasili} options={{headerShown:false}}/>
<Stack.Screen name='Confirmtrip' component={Confirmtrip} options={{headerShown:false}}/>

</Stack.Navigator>


</NavigationContainer>


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
