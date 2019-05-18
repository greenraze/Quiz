import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '@components';
import { styles } from './styles';

class index extends React.Component {

  render() {
    const { onpress, totalScore, totalTimeTaken } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.score}>
          {"Score : " + totalScore + " Out Of 10"}
        </Text>
        <Text style={styles.score}>
          {"Time Taken : " + totalTimeTaken}
        </Text>
        <Button
          onPress={onpress}
          style={styles.button} text={"Start Again"}
          textStyle={styles.buttonTextStyle}
        />
      </View>
    );
  }
}

export default index