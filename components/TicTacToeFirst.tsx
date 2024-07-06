import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';

export default function TicTacToeFirst() {
  const [xTurn, setXTurn] = useState(null);
  const [targetId, setTargetId] = useState('');

  interface Tik {
    id: string;
    name: string;
  }

  const btnPressed = (targetValue: Tik) => {
    setTargetId(targetValue.name);
    if (targetValue.name === targetId) {
        setXTurn(true);
    }
  }

  const DATA = [
    {
      id: '1',
      name: 'one',
    },
    {
      id: '2',
      name: 'two',
    },
    {
      id: '3',
      name: 'three',
    },
    {
      id: '4',
      name: 'four',
    },
    {
      id: '5',
      name: 'five',
    },
    {
      id: '6',
      name: 'six',
    },
    {
      id: '7',
      name: 'seven',
    },
    {
      id: '8',
      name: 'eight',
    },
    {
      id: '9',
      name: 'nine',
    },
  ];
  return (
    <>
      <View>
        <View style={styles.playerContainer}>
          <Text style={styles.playerTxt}>X's tern</Text>
        </View>
      </View>
      <FlatList
        numColumns={3}
        data={DATA}
        renderItem={({item}) => (
          <Pressable style={styles.box} onPress={() => btnPressed(item)}>
            <Text>{item.id}</Text>
            {xTurn ? <Text>x</Text> : <Text>o</Text>}
          </Pressable>
        )}
        keyExtractor={item => item.name}
      />
      <View>
        <Pressable style={styles.reloadContainer}>
          <Text style={styles.reloadTxt}>Reload</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  playerContainer: {
    height: 50,
    margin: 12,
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  playerTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  reloadContainer: {
    height: 50,
    margin: 12,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  reloadTxt: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  boxContainer: {},
  box: {
    backgroundColor: 'gray',
    height: 100,
    width: 100,
    borderWidth: 2,
  },
});
