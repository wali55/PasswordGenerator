import {Image, ImageSourcePropType, Pressable, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

export default function PageFive(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const [diceImage2, setDiceImage2] = useState<ImageSourcePropType>(DiceTwo);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }

    ReactNativeHapticFeedback.trigger("impactHeavy", options);
    rollDiceOnTap2();
  };

  const rollDiceOnTap2 = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage2(DiceOne);
        break;
      case 2:
        setDiceImage2(DiceTwo);
        break;
      case 3:
        setDiceImage2(DiceThree);
        break;
      case 4:
        setDiceImage2(DiceFour);
        break;
      case 5:
        setDiceImage2(DiceFive);
        break;
      case 6:
        setDiceImage2(DiceSix);
        break;
      default:
        setDiceImage2(DiceOne);
        break;
    }

    ReactNativeHapticFeedback.trigger("impactHeavy", options);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <Dice imageUrl={diceImage} />
      <Dice imageUrl={diceImage2} />
      <Pressable
      onPress={rollDiceOnTap}
      >
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  box1: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 1,
    top: 30,
    display: 'none'
  }
});
