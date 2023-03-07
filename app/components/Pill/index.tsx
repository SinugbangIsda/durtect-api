import { View } from 'react-native';
import React from 'react';
import { PillProps } from '../../interfaces/Interfaces';
import tw from '../../utils/tw';

const Pill = ({ children, twBackgroundColor, twDarkBackgroundColor }: PillProps) => { 
  return (
    <View style = {[ tw `p-2 rounded-xl flex justify-center items-center bg-${twBackgroundColor} dark:bg-${twDarkBackgroundColor}`]}>
      { children }
    </View>
  )
}

export default Pill;