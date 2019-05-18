import React from 'react'
import {TouchableOpacity, Text } from 'react-native'

const Button = ({ style, text, onPress, textStyle }) => {

  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button;
