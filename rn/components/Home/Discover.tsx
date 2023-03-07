import React from 'react';
import { FlatList, Image } from "react-native";
import Text from '../Text';
import Card from '../Card';
import diseases from "../../assets/data/diseases.json";
import { StackNavigationType } from '../../types/types';
import { useNavigation } from '@react-navigation/native';
import tw from '../../utils/tw';
import { Styles } from '../../constants';
import { AntDesign } from '@expo/vector-icons'; 
import HorizontalRule from '../HorizontalRule';
import Pill from '../Pill';

const Discover = () => {
  const navigation = useNavigation<StackNavigationType>();

  const noData = () => {
      return (
        <Text twStyles = "text-black dark:text-white">
          No data avaiable.
        </Text>
      )
  }

  return (
    <Card twStyles = "mt-2">
      <Text twStyles = "text-xl font-bold text-black dark:text-white">
        Discover
      </Text>
      <Card twStyles = 'mt-2 rounded-2xl p-4 bg-white dark:bg-[#262628]'>
        <FlatList 
          data = { diseases }
          showsHorizontalScrollIndicator = { false }
          horizontal
          renderItem = {({ item, index  }: any) => {
          return (
            <Card
              pressable
              twStyles = "flex-row justify-between items-center"
              onPress = {() => {
                navigation.navigate("Diseases", {
                  selectedDisease: item
                });
              }}
            >
              <Card twStyles = "flex-row justify-center items-center">
                <Image 
                  style = {[ tw `rounded-lg`, Styles.flatListImagesDiscover ]}
                  resizeMode = "stretch"
                  source = { require("../../assets/images/pythopalmi.jpg") }
                />
                <Card twStyles = 'flex justify-center items-start mx-2'>
                  <Text twStyles = "font-bold text-black dark:text-white">
                    { item.disease }
                  </Text>
                  <Pill
                    twBackgroundColor = "gray-300"
                    twDarkBackgroundColor = "gray-500"
                  >
                    <Text twStyles = "text-sm font-bold text-black dark:text-white">
                      gege
                    </Text>
                  </Pill>
                </Card>
              </Card>
              <AntDesign 
                name = "right" 
                size = { 24 } 
                style = {[ tw `text-black dark:text-white`]}
              />
            </Card>
            )
          }}
          ListEmptyComponent = { noData }
        />
      </Card>
    </Card>
  )
}

export default Discover;