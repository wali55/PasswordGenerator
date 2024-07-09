import {StyleSheet} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name: string;
}>;

export default function Icons({name}: IconsProps) {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color="#E90074" />;
      break;
    case 'cross':
      return <Icon name="times" size={38} color="#36BA98" />;
      break;

    default:
      return <Icon name="pencil" size={38} color="#758694" />;
  }
}

const styles = StyleSheet.create({});
