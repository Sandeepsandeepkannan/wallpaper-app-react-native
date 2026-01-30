
import { Link ,Slot } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  

  return (
    <SafeAreaView style={{}}>
        <View>
           <Slot/>
       </View>
       <View style={{position:"absolute",top:575, backgroundColor:"red",width:"100%",flexDirection:"row",justifyContent:"space-evenly"}}>
            <Link  href={"./forpage"} style={{height:30,width:70,backgroundColor:"green",paddingLeft:5,fontSize:15}} >For you</Link>
            <Link href={"./explore"} style={{height:30,width:70,backgroundColor:"green",paddingLeft:5,fontSize:15}}>Explore</Link>
            <Link href={"./account"} style={{height:30,width:70,backgroundColor:"green",paddingLeft:5,fontSize:15}}>Account</Link>
          </View>
    </SafeAreaView>
  );
}
