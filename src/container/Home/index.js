import React from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { actions as homeActions } from '@redux/home';
import { connect } from 'react-redux';
import { Questions, Button, ScoreCard } from '@components';
import { styles } from './styles';


class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.timer = 0;
    this.totalAnswered = 0;
    this.state = {
      questions: [],
      quizStart: "loadquiz",
      totalScore: 0,
      totalTimeTaken: 0

    }
  }

  componentDidMount() {
    this.props.getQuestions()
  }

  static getDerivedStateFromProps(next, pre) {
    let questionsArray = next.questions.map((question, index) => {
      return {
        ...question,
        user_selected: typeof question.user_selected !== "undefined" ? question.user_selected : "",
        id: index
      }
    });
    return { questions: questionsArray }
  }

  render() {
    const { navigation } = this.props;
    const { quizStart, totalScore, totalTimeTaken, questions } = this.state
    return (
      <View style={styles.container}>
        {quizStart == "loadquiz" &&
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>
              Click To Start Quiz
        </Text>
            <Button
              onPress={this.startQuiz}
              style={styles.button} text={"Start Quiz"}
              textStyle={styles.buttonTextStyle}
            />
          </View>
        }

        {quizStart == "continuequiz" &&
          <Questions
            questions={questions}
            setUserAnswerHandler={this.setUserAnswerHandler}
          />
        }

        {quizStart == "stopquiz" &&
          <ScoreCard
            totalTimeTaken={totalTimeTaken}
            totalScore={totalScore}
            onpress={this.startAgainQuizHandler}
          />
        }
      </View>
    );
  }

  startQuiz = () => {
    if (this.state.questions.length == 0) {
      alert("Please try later")
      return
    }
    this.setState({ quizStart: "continuequiz" });
    this.startTimer()
  }

  startTimer = () => {
    this.interval = setInterval(
      () => {
        this.timer = ++this.timer
      },
      1000
    );
  }

  calculateScoreAndTimeTaken = () => {
    var score = 0
    this.state.questions.forEach((question) => {
      if (question.user_selected == question.correct_answer) {
        score++

      }
    })
    var minutes = Math.floor(this.timer / 60);
    var seconds = this.timer - minutes * 60;
    let time = minutes + "." + seconds + " Mns"
    this.setState({ totalScore: score, totalTimeTaken: time }, () => {
      clearInterval(this.interval);
    });
    this.timer = 0;
  }

  startAgainQuizHandler = () => {
    this.setState({ quizStart: "continuequiz", totalScore: 0 }, () => {
      let questionsArray = this.props.questions.map((question, index) => {
        return {
          ...question,
          user_selected: "",
        }
      });
      this.totalAnswered = 0
      this.startTimer()
      this.props.updateAnswer(questionsArray)
    });
  }

  setUserAnswerHandler = (id, answer) => {
    var questions = this.state.questions
    let questionslenght = questions.length;
    let questionsArray = questions.map((question) => {
      if (question.id == id) {

        if (question.user_selected == "") {
          this.totalAnswered = ++this.totalAnswered
        }
        return {
          ...question,
          user_selected: answer
        }
      }
      else {
        return {
          ...question
        }
      }
    });
    this.props.updateAnswer(questionsArray)
    if (questionslenght == this.totalAnswered) {
      this.setState({ quizStart: "stopquiz" }, () => {
        this.calculateScoreAndTimeTaken()
      });
    }
  }
}


const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      ...homeActions
    },
    dispatch
  )
});


const mapStateToProps = ({ home }) => {
  return home;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);