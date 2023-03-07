import React from 'react';
import { ScrollView } from 'react-native';
import Layout from "../../components/Layout";
import Text from '../../components/Text';
import tw from '../../utils/tw';
import updates from "../../assets/data/updates.json";
import WhatsNewHeader from '../../components/WhatsNew/WhatsNewHeader';
import Card from '../../components/Card';
import { Entypo } from '@expo/vector-icons'; 

const WhatsNew = () => {
  return (
    <Layout twStyles = "flex-1 justify-center items-center defaultBg">
      <ScrollView 
        style = {[ tw `flex-1`]}
        contentContainerStyle = {{ flexGrow: 1 }}
      >
        <WhatsNewHeader />
        <Card twStyles = "flex-1 justify-center items-center">
          <Entypo 
            name = "emoji-sad" 
            size = { 60 } 
            style = {[ tw `defaultText my-2`]} 
          />
          <Text twStyles = "text-2xl font-bold text-center my-2 defaultText">
            We don't have any updates for you yet!
          </Text>
          <Text twStyles = "text-lg text-center text-gray-700 dark:text-gray-500 my-2">
            When there's news, we'll post it here.
          </Text>
        </Card>
      </ScrollView>
    </Layout>
  )
}

export default WhatsNew;