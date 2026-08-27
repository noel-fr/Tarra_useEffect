
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import { useState, useEffect } from "react";

const UseEffectScreen = () => {
    const [contador, setContador] = useState(0);

    /*
        *useEffect sin arreglo de dependencias
        *
        * Este useEffect se ejecuta despues de cada renderizado del componente
        * porque no tiene un arreglo de dependecias
        * 
        * Se puede puede utilizar cuando necesitamos ejecutar una acción cada vez
        * que el componente se actualiza.
        * 
        * (Espero estar en lo correcto ingeniera) 
    */

    useEffect (() =>{
        console.log("El componente se renderizó");
    });

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
