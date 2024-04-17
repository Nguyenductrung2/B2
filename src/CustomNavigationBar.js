import{Appbar,Menu}from 'react-native-paper';
import{getHeaderTitle}from"@react-navigation/elements"
import React, { useState } from "react"

const CustonNavigationBar =({navigation,route,options,back,})=>{
    const[visible,setVisible] = useState(false);
    const openMenu =() =>setVisible(true)
    const closeMenu =() =>setVisible(false);

    const title =getHeaderTitle(options,route.name);

    return(
        <Appbar.Header>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={title}/>
            { ! back ? (
                <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor = {
                    <Appbar.Action
                    icon ="dots-vertical"
                    onPress={openMenu}/> 
                }>
                <Menu.Item
                 onPress={()=>{
                    console.log('Option 1 was')
                 }}
                 title ="Home"
                />
                <Menu.Item
                 onPress={()=>{
                    navigation.navigate("Details")
                 }}
                 title ="Details"
                />
                <Menu.Item
                 onPress={()=>{
                    console.log('Option 3 was')
                 }}
                 title ="Option 3"
                 disabled
                />
                </Menu>
            )
            :null}
        </Appbar.Header>
    );
}
export default CustonNavigationBar;