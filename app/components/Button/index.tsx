import { Pressable, TouchableHighlight } from 'react-native';
import React, { useEffect } from 'react';
import tw from '../../utils/tw';
import { ButtonProps } from '../../interfaces/Interfaces';
import useDarkMode from '../../hooks/useDarkMode';

const Button = ({ twStyles, onPress, children, touchableOpacity }: ButtonProps ) => {

  if (touchableOpacity) {
    return (
      <TouchableHighlight
        activeOpacity = { 0.6 }
        underlayColor = "#DDDDDD"
        style = {[ twStyles ?  tw `${twStyles}` : null ]}
        onPress = { onPress }
      >
        { children }
      </TouchableHighlight>
    )
  } else {
    return (
      <Pressable
        style = {[ twStyles ?  tw `${twStyles}` : null ]}
        onPress = { onPress }
      >
        { children }
      </Pressable>
    )
  }

}

export default Button;
