import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

export default function PageFour(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff');
  const [box1Color, setBox1Color] = useState('red');
  const [box2Color, setBox2Color] = useState('red');
  const [box3Color, setBox3Color] = useState('red');
  const [box4Color, setBox4Color] = useState('red');

  const changeBgColor = () => {
    const hexRange = '0123456789ABCDEF';
    let bgColor = '#';
    for (let i = 0; i < 6; i++) {
        bgColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(bgColor);
    changeBox1();
    changeBox2();
    changeBox3();
    changeBox4();
  }

  const changeBox1 = () => {
    const hexRange = '0123456789ABCDEF';
    let bgColor = '#';
    for (let i = 0; i < 6; i++) {
        bgColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setBox1Color(bgColor);
  }

  const changeBox2 = () => {
    const hexRange = '0123456789ABCDEF';
    let bgColor = '#';
    for (let i = 0; i < 6; i++) {
        bgColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setBox2Color(bgColor);
  }

  const changeBox3 = () => {
    const hexRange = '0123456789ABCDEF';
    let bgColor = '#';
    for (let i = 0; i < 6; i++) {
        bgColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setBox3Color(bgColor);
  }

  const changeBox4 = () => {
    const hexRange = '0123456789ABCDEF';
    let bgColor = '#';
    for (let i = 0; i < 6; i++) {
        bgColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setBox4Color(bgColor);
  }

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <View style={[styles.box1, {backgroundColor: box1Color}]}></View>
        <View style={[styles.box2, {backgroundColor: box2Color}]}></View>
        <View style={[styles.box3, {backgroundColor: box3Color}]}></View>
        <View style={[styles.box4, {backgroundColor: box4Color}]}></View>
        <TouchableOpacity onPress={changeBgColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionBtn: {
        borderRadius: 12,
        backgroundColor: '#dddddd',
        paddingVertical: 10,
        paddingHorizontal: 40
    },
    actionBtnTxt: {
        fontSize: 24,
        color: '#000000',
        textTransform: 'uppercase',
        fontWeight: '600'
    },
    box1: {
      height: 50,
      width: 50, 
      backgroundColor: 'red',
      position: 'absolute',
      zIndex: 1,
      top: 100,
      left: 100
    },
    box2: {
      height: 50,
      width: 50, 
      backgroundColor: 'red',
      position: 'absolute',
      zIndex: 1,
      bottom: 100,
      left: 100
    },
    box3: {
      height: 50,
      width: 50, 
      backgroundColor: 'red',
      position: 'absolute',
      zIndex: 1,
      top: 100,
      right: 100
    },
    box4: {
      height: 50,
      width: 50, 
      backgroundColor: 'red',
      position: 'absolute',
      zIndex: 1,
      bottom: 100,
      right: 100
    },
});
