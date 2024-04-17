import { StyleSheet, Text, View } from "react-native"
import { Image } from "react-native";
import hinh1 from './hinh1.png'

const DetailScreen=({navigation})=>{
    return(
        <View style = {myStyle.container}>
            <Text>Detail Screen</Text>
            <View>
                <Image source={require("./hinh1.png")}
                style ={myStyle.image}/>
            </View>
        </View>

    )
}

export default DetailScreen;

const myStyle = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        flex:1,
        width:420,
        height:'auto'
    }
})