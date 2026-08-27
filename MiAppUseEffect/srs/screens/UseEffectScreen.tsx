
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import { useState, useEffect } from "react";

const UseEffectScreen = () => {
    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState("El contador todabia no ha cambiado");

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

    /*
        *useEffect con arreglo de dependencias
        *
        * Este se ejecuta cuando cambia el valor de contador
        * porque contador esta dentro del arreglo de dependecias
        * 
        * Se recomienda utilizar cuando queremos ejecutar una accion
        * solamente al cambiar una variable especifica
    */

     useEffect (() =>{
        console.log("El contador cambió a:", contador);
        setMensaje(`El contador cambio a: ${contador}`);
    },[contador]);


    return(
        <View>
            <Text>Práctica UseEffect</Text>
            <Text>Contador: {contador}</Text>
            <TouchableOpacity onPress={() => setContador(contador + 1)}>
                <Text>Aumentar</Text>
            </TouchableOpacity>
            <Text>{mensaje}</Text>
            
        </View>
    );
};

export default UseEffectScreen;
