import {Stack} from "expo-router";

export default function Layout(){
    return (
        <Stack initialRouteName="splash">
            <Stack.Screen name="splash" options={{headerShown:false}} />
            <Stack.Screen name="login" options={{headerShown:false}}/>
            <Stack.Screen name="register" options={{headerShown:false}}/>
            <Stack.Screen name="forgot" options={{headerShown:false}}/>
        </Stack>
    )
}