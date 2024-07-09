import {FlatList, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import Snackbar from 'react-native-snackbar';
import Icons from './components/Icons';

export default function TicTacToeMe(): JSX.Element {
  const [isCross, setIsCross] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>('');
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9));

  const reloadGame = () => {
    setIsCross(false);
    setWinner('');
    setGameState(new Array(9).fill('empty', 0, 9));
  };

  const winningLogic = () => {
    if (gameState[0] === gameState[1] &&
        gameState[0] === gameState[2] &&
        gameState[0] !== 'empty'
    ) {
        setWinner(`${gameState[0]} won the game.`);
    } else if (gameState[3] === gameState[4] &&
               gameState[3] === gameState[5] &&
               gameState[3] !== 'empty'
    ) {
        setWinner(`${gameState[3]} won the game.`);
    } else if (gameState[6] === gameState[7] &&
               gameState[6] === gameState[8] &&
               gameState[6] !== 'empty'
    ) {
        setWinner(`${gameState[6]} won the game.`);
    } else if (gameState[0] === gameState[3] &&
               gameState[0] === gameState[6] &&
               gameState[0] !== 'empty'
    ) {
        setWinner(`${gameState[0]} won the game.`);
    } else if (gameState[1] === gameState[4] &&
               gameState[1] === gameState[7] &&
               gameState[1] !== 'empty'
    ) {
        setWinner(`${gameState[1]} won the game.`);
    } else if (gameState[2] === gameState[5] &&
               gameState[2] === gameState[8] &&
               gameState[2] !== 'empty'
    ) {
        setWinner(`${gameState[2]} won the game.`);
    } else if (gameState[0] === gameState[4] &&
               gameState[0] === gameState[8] &&
               gameState[0] !== 'empty'
    ) {
        setWinner(`${gameState[0]} won the game.`);
    } else if (gameState[2] === gameState[4] &&
               gameState[2] === gameState[6] &&
               gameState[2] !== 'empty'
    ) {
        setWinner(`${gameState[2]} won the game.`);
    } else if (!gameState.includes('empty', 0)) {
        setWinner('Game is drawn');
    }
  };

  const onPressImg = (imgNumber: number) => {
    if (winner) {
        return Snackbar.show({
            text: `${winner} won the game`,
            backgroundColor: '#000000',
            textColor: '#FFFFFF'
        })
    }
    if (gameState[imgNumber] === 'empty') {
        gameState[imgNumber] = isCross ? 'cross' : 'circle';
        setIsCross(!isCross);
    } else {
        return Snackbar.show({
            text: 'Already occupied',
            backgroundColor: '#000000',
            textColor: '#FFFFFF'
        });
    }
    winningLogic();
  };

  return (
    <SafeAreaView>
        {winner ? (
            <View style={[styles.winnerInfo, styles.playerInfo]}>
                <Text style={styles.winnerTxt}>{winner}</Text>
            </View>
        ) : (
            <View style={[styles.playerInfo, isCross ? styles.playerX : styles.playerO]}>
                <Text style={styles.gameTurnTxt}>{isCross ? "X's Turn" : "O's Turn"}</Text>
            </View>
        )}
        <FlatList 
        numColumns={3}
        data={gameState}
        style={styles.grid}
        renderItem={({item, index}) => (
            <Pressable
              key={index}
              style={styles.card}
              onPress={() => onPressImg(index)}  
            >
                <Icons name={item} />
            </Pressable>
        )}
        />
        <Pressable style={styles.gameBtn} onPress={reloadGame}>
            <Text style={styles.gameBtnText}>{winner ? 'Start a new game' : 'Reload the game'}</Text>
        </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

