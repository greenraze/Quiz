import React from 'react';
import { FlatList } from 'react-native';
import QuestionView from './QuestionView';


class index extends React.Component {

  render() {
    const { questions, setUserAnswerHandler } = this.props;
    return (
      <FlatList
        data={questions || []}
        renderItem={({ item }) => (
          <QuestionView question={item}
            setUserAnswerHandler={setUserAnswerHandler}
          />
        )}
        keyExtractor={(item, index) => index}
        numColumns={1}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default index