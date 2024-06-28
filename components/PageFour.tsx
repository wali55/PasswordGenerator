import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function PageFour(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor="#ddd" />
      <View>
        <TouchableOpacity>
          <View>
            <Text>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
