import { Image } from 'react-native';
import React from 'react';
import tw from '../../utils/tw';
import { Styles } from '../../constants';
import { ResultsComponentsProps } from '../../interfaces/Interfaces';


const ResultsImage = ({ data }: ResultsComponentsProps) => {
  const { image_uri } = data[0];
  return (
    <Image
      source = {{
        uri: image_uri,
        cache: "force-cache"
      }}
      style = {[ tw `rounded-xl`, Styles.resultsImage ]}
    />
  )
}

export default ResultsImage;