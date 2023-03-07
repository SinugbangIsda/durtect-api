import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import tw from '../../utils/tw';
import { HeaderProps } from '../../interfaces/Interfaces';
import Card from '../Card';

const Header = ({ left, center, right }: HeaderProps) => {
  return (
    <>
      <Card  twStyles = "w-full flex-row my-3 justify-between items-center">
        <>
          { left ? 
            left 
          :
            <Card twStyles = "mx-4" />
          }
          { center ? 
            center 
          :
            <View style = {[ tw `mx-4` ]}/>
          }
          { right ? 
            right
          :
            <View style = {[ tw `mx-4` ]}/>
          }
        </>
      </Card>
    </>  
  )
}

export default Header;