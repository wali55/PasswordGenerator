import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type { PropsWithChildren } from 'react';

type CurrencyBtnProps = PropsWithChildren<{
    flag: string;
    name: string;
}>

export default function CurrencyBtnMe(props: CurrencyBtnProps) {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonContainer : {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    
    }
})
