import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

class QuestionView extends React.Component {

  radioButton = (question, answer) => {
    return (
      <View style={styles.button}>
      <TouchableOpacity
        onPress={() => this.props.setUserAnswerHandler(question.id, answer)}
        style={styles.radioButton}>
        {answer == "True" && question.user_selected === "True" &&
          <View style={styles.checked}/>
        }
        {answer == "False" && question.user_selected === "False" &&
          <View style={styles.checked}/>
        }
      </TouchableOpacity>
      <Text style={styles.answers}>
          {answer}
        </Text>
      </View>
    )
  }
  render() {
    const { navigation, question } = this.props;
    return (
      <View style={styles.cellContainer}>
        <Text style={styles.question}>
          {question.question}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          {this.radioButton(question, "True")}
          {this.radioButton(question, "False")}
        </View>
      </View>
    );
  }
}

 
export default QuestionView