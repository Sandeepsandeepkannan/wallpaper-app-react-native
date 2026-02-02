import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from 'react-native';
import { View } from 'react-native';
const Tab = createMaterialTopTabNavigator();
export default function ForYou() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Liked" component={Liked} />
            <Tab.Screen name="Featured" component={Featured} />
            <Tab.Screen name="Top" component={Top} />
        </Tab.Navigator>
    );
}
function Liked() {
    return <View>
        <Text>Hi there from the home screen</Text>
    </View>
}
function Featured() {
    return <View>
        <Text>Hi there from the home screen</Text>
    </View>
}

function Top() {
    return <View>
        <Text>Hi there from the home screen</Text>
    </View>
}