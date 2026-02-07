
import { router } from "expo-router";
import { navigate } from "expo-router/build/global-state/routing";
import { Button, Text, View } from "react-native";


export default function Layout(){
    return <View>

        <Text>account details</Text>
        <Button title="go back" onPress={()=>{ router.push("/(tabs)");}}/>
    </View>
}