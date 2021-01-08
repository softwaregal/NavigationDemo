import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { FunctionComponent } from "react";
import { Button, Modal, Text, View, TouchableOpacity, StyleSheet} from "react-native";

//Defining the nested stack
const Stack = createStackNavigator();
const Tab4Stack : FunctionComponent = (props) => {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Tab4HomeScreen}
                    options={{ title: 'Welcome' }}
                />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
    );
};

export default Tab4Stack;

//child Stack of tab4
const ProfileScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};

//child Stack of tab4
const Tab4HomeScreen: FunctionComponent = (props:any) =>{
    const [modalVisibility, setModalVisibility] = useState<boolean>(false)
    const onNavigate = ()=>{
        setModalVisibility(false);
        //TO avoid issues with interaction manager on android
        setTimeout(()=>{
            props.navigation.goBack();
        },5);
    }
    return (<>
        <Button title ='Show Modal' onPress = {()=>setModalVisibility(true)}/>
        <Modal visible = {modalVisibility}>
            <View style={styles.modal}>
                <View style={styles.cross}>
                    <TouchableOpacity onPress = {()=> {setModalVisibility(false)}}>
                        <Text style={styles.font}>X</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.font}>This is a modal!</Text>
                <Button title="Navigate to Tab1"
                onPress={onNavigate} />
                <Button title="Navigate to Profile"
                    onPress={()=>{
                        setModalVisibility(false);
                        setTimeout(() => {
                            props.navigation.navigate('Profile', {name:'anita'});
                        }, 5)
                    }} />
            </View>
        </Modal>
    </>
    );
}

const styles = StyleSheet.create({
    modal:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#ee98fb'
    },
    cross:{
        position: 'absolute', 
        backgroundColor: '#ba68c8', 
        top: 36, 
        right: 36
    },
    font:{
        fontSize:30
    }
});