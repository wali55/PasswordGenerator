import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type { PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{
  name: string;
}>

export default function Icons({name}: IconProps) {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color="#50B498" />
    case 'cross':
      return <Icon name="times" size={38} color="#B60071" />
    default:
      return <Icon name="pencil" size={38} color="#405D72" />
  }
}

const styles = StyleSheet.create({});
