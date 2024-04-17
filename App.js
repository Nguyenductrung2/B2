

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PaperProvider, Text} from 'react-native-paper';
import CustonNavigationBar from './src/CustomNavigationBar';
import HomeScreen from './Screen/HomeScreen';
import DetailScreen from './Screen/DetailScreen';
import { Image } from 'react-native';

const Stack = createStackNavigator();
const Hinh1=(props)=>{
  return(
    <Image
    source={require('./assets/hinh2.png')}
    style={{
      width:50,
      height:50,
      flex:1
    }}
    />
  )
};

const App=()=>{
  return(
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header:(props)=> <CustonNavigationBar {...props}/>
        }}
        >
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Details' component={DetailScreen}
        options={{
          title:'Details Screen',
          headerBackground: props => <Hinh1 {...props}/>
        }}
        />

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>

  )
}
export default App;