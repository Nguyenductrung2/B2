import {Button, StyleSheet, View,Text} from 'react-native'

const HomeScreen =({navigation})=>{
    return(
        <View style = {myStyle.container}>
            <View>
            <Text style = {myStyle.text} >Home Screen</Text>
            <Button mode ="contained" onPress={() => navigation.navigate('Details')} title=' Go to details'>
            Go to details
            </Button>
            </View>
        </View>
    )
}
export default HomeScreen;

const myStyle = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'aqua'
    },
    text:{
       fontFamily:'bold',
       fontSize:30 
    }

});