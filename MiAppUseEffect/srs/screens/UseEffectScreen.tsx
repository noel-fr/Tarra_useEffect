
import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import { useState, useEffect } from "react";

const UseEffectScreen = () => {
    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState("El contador todavía no ha cambiado");

    /*
        *useEffect sin arreglo de dependencias
        *
        * Este useEffect se ejecuta después de cada renderizado del componente
        * porque no tiene un arreglo de dependencias
        * 
        * Se puede utilizar cuando necesitamos ejecutar una acción cada vez
        * que el componente se actualiza.
        * 
    */

    useEffect (() =>{
        console.log("El componente se renderizó");
    });

    /*
        *useEffect con arreglo de dependencias
        *
        * Este useEffect se ejecuta cuando cambia el valor de contador
        * porque contador está dentro del arreglo de dependencias
        * 
        * Se recomienda utilizar cuando queremos ejecutar una acción
        * solamente al cambiar una variable específica
    */

     useEffect (() =>{
        console.log("El contador cambió a:", contador);
        setMensaje(`El contador cambió a: ${contador}`);
    },[contador]);


    return(
        <View style={styles.container}>
            <Text style={styles.title}>Práctica UseEffect</Text>
            <Text style={styles.contador}>Contador: {contador}</Text>
            <TouchableOpacity style={styles.boton} onPress={() => setContador(contador + 1)}>
                <Text style={styles.texBoton}>Aumentar</Text>
            </TouchableOpacity>
            <Text style={styles.mensaje}>{mensaje}</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },

    title:{
        fontSize: 22,
        marginBottom: 10,
    },

    contador: {
        fontSize: 22,
        marginBottom: 10,
    },

    mensaje:{
        fontSize: 16,
        marginBottom: 20,
    },

    boton:{
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 20,
    },

    texBoton:{
        fontSize: 18,
        fontWeight: "bold",
    }


});

export default UseEffectScreen;
