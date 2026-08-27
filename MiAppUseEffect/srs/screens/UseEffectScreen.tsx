
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import { useState } from "react";

const UseEffectScreen = () => {
    const [contador, setContador] = useState(0);
    return(
        <View>
            <Text>Práctica UseEffect</Text>
            <Text>Contador: {contador}</Text>
            <TouchableOpacity onPress={() => setContador(contador + 1)}>
                <Text>Aumentar</Text>
            </TouchableOpacity>
            
        </View>
    );
};

export default UseEffectScreen;
