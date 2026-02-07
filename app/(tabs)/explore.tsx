import Downloadbar from "@/components/Bottomsheet";
import { useState } from "react";
import { View ,Text, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Explorepage(){

    const [topbardownload,settopbardownload]=useState( false)

    return <SafeAreaView style={{flex:1}}>
                 
            <Button title="Open bar" onPress={()=>{settopbardownload(true)}}></Button>
           {topbardownload && <Downloadbar onClose={()=>{settopbardownload(false)}} />}
        </SafeAreaView>
}