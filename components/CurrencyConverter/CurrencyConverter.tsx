import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

import US from '../../assets/flags/usa.png';
import AUS from '../../assets/flags/australia.png';
import BC from '../../assets/flags/bitcoin.png';
import CAN from '../../assets/flags/canada.png';
import ENG from '../../assets/flags/england.png';
import EU from '../../assets/flags/europe.png';
import JP from '../../assets/flags/japan.png';
import RS from '../../assets/flags/russia.png';
import KW from '../../assets/flags/kuwait.png';

// for validation
import * as Yup from 'yup';
import { Formik } from 'formik';

const DATA = [
  {
    id: 'a1',
    img: AUS,
    text: 'AUS Dollar'
  },
  {
    id: 'a2',
    img: BC,
    text: 'Bitcoin'
  },
  {
    id: 'a3',
    img: CAN,
    text: 'CAN Dollar'
  },
  {
    id: 'a4',
    img: ENG,
    text: 'Pound'
  },
  {
    id: 'a5',
    img: EU,
    text: 'Euro'
  },
  {
    id: 'a6',
    img: JP,
    text: 'Yen'
  },
  {
    id: 'a7',
    img: RS,
    text: 'Rubel'
  },
  {
    id: 'a8',
    img: US,
    text: 'Dollar'
  },
  {
    id: 'a9',
    img: KW,
    text: 'Dinar'
  },
];

const CurrencySchema = Yup.object().shape({
  taka: Yup.number().required()
});

export default function CurrencyConverter() {

  function convertAmount(inputValue, itemId) {

  }
  
  return (
    <View>
      <Text>CurrencyConverter</Text>
      {/* input form */}
      <Formik
       initialValues={{ taka: '' }}
       validationSchema={CurrencySchema}
       onSubmit={(values, { resetForm }) => {
         convertAmount(Number(values.taka), itemId);
         resetForm();
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         isValid,
         handleSubmit,
         /* and other goodies */
       }) => (
         <>
           <View>
            <Text>Add Taka</Text>
            <TextInput 
            value={values.taka}
            onChangeText={() => handleChange('taka')}
            keyboardType='numeric'
            placeholder='Ex. 200'
            style={{borderWidth: 2}}
            />
           </View>
         </>
       )}
     </Formik>
      {/* flat list */}
      <FlatList 
      style={{padding: 30}}
      numColumns={3}
      data={DATA}
      renderItem={({item}) => (
        <TouchableOpacity style={{borderWidth: 2, margin: 10, padding: 10}} onPress={() => convertAmount(values.taka, item.id)}>
          <Text>{item.text}</Text>
          <Image
          style={{height: 30, width: 30}} 
          source={item.img}
          />
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})