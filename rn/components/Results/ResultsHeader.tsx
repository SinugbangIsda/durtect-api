import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/Global';
import Card from '../Card';
import Header from '../Header';
import Text from "../Text";
import { StackNavigationType } from "../../types/types";
import { Ionicons } from '@expo/vector-icons'; 
import tw from '../../utils/tw';
import { SheetManager } from 'react-native-actions-sheet';
import { ResultsComponentsProps } from '../../interfaces/Interfaces';
import { BASE_URL } from '../../constants';

const ResultsHeader = ({ data, id }: ResultsComponentsProps) => {
    const navigation = useNavigation<StackNavigationType>();
    const { dispatch } = useContext(GlobalContext);

    const handleContext = () => {
        dispatch({
            type: "RESET",
        });
    };

  return (
    <Header
        left = {
            <Card
                pressable
                onPress = {() => {
                    handleContext();
                    navigation.replace("Home");
                }}
            >
                <Ionicons 
                    name = "arrow-back-sharp" 
                    style = {[ tw `text-2xl text-black dark:text-white`]} 
                />
            </Card>
        }
        center = {
            <Text twStyles = "text-xl font-bold text-black dark:text-white">
                Results
            </Text>
        }
        right = {
            <Card
                pressable
                onPress = {() => {
                    data[0]["status"] === "OK" ? SheetManager.show("delete-result", { payload: [ BASE_URL.delete_entry, id ] } ) : null
                }}
            >
                <Ionicons 
                    name = "md-options-sharp" 
                    style = {[ tw `text-2xl ${data[0]["status"] === "OK" ? 'text-black dark:text-white' : 'text-gray-500'}`]} 
                />
            </Card>
        }
    />
  )
}

export default ResultsHeader