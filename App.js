import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App(){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    var alt = altura / 100;
    var imc = peso / (alt * alt);
    if(imc < 18.6){
      alert(`O seu imc é ${imc.toFixed(2)}.\nVocê está abaixo do peso!`);
    }
    else if(imc >= 18.6 && imc < 24.9){
      alert(`O seu imc é ${imc.toFixed(2)}.\nPeso ideal!`);
    }
    else if(imc >= 24.9 && imc < 34.9){
      alert(`O seu imc é ${imc.toFixed(2)}.\nLevemente acima do peso!`);
    }
    else{
      alert(`O seu imc é ${imc.toFixed(2)}.\nVocê está acima do peso!`);
    }
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC</Text>
      
      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={(peso) => setPeso(peso)}
      placeholder='Peso (Kg)'
      placeholderTextColor='#7F7F7F'
      keyboardType='numeric'
      />

      <TextInput
      style={styles.input}
      value={altura}
      onChangeText={(altura) => setAltura(altura)}
      placeholder="Altura (cm)"
      placeholderTextColor='#7F7F7F'
      keyboardType='numeric'
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  title:{
    textAlign:'center',
    marginTop: 25,
    fontSize: 30,
  },
  input:{
    backgroundColor:'#121212',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#FFF',
    fontSize:24,
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    margin: 15,
    backgroundColor: '#41AEF4',
    padding: 10,
  },
  buttonText:{
    color:'#FFF',
    fontSize: 25,
  }
});