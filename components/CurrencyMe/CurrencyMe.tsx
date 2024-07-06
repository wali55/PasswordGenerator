import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

// constant
import {currencyByRupee} from './constants';
// component
import CurrencyBtnMe from './components/CurrencyBtnMe';

import Snackbar from 'react-native-snackbar';

export default function CurrencyMe() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const btnPressed = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: 'red',
        textColor: 'white',
      });
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedAmount = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedAmount.toFixed(2)}`;
      setOutputValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Invalid value, cannot be converted!',
        backgroundColor: 'red',
        textColor: 'white',
      });
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              value={inputValue}
              onChangeText={setInputValue}
              placeholder="Enter a value"
              keyboardType="number-pad"
              maxLength={14}
            />
          </View>
          {outputValue && <Text style={styles.resultTxt}>{outputValue}</Text>}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            data={currencyByRupee}
            keyExtractor={item => item.name}
            numColumns={3}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected,
                ]}
                onPress={() => btnPressed(item)}>
                <CurrencyBtnMe {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});
