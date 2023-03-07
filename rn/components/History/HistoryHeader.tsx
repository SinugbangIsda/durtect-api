import Header from "../Header";
import Card from "../Card";
import Text from "../Text";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/Global";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationType } from "../../types/types";
import { Ionicons } from '@expo/vector-icons'; 
import tw from "../../utils/tw";
import { SheetManager } from "react-native-actions-sheet";
import { BASE_URL } from "../../constants";
import { HistoryComponentsProps } from "../../interfaces/Interfaces";

const HistoryHeader = ({ data }: HistoryComponentsProps) => {
    const { dispatch } = useContext(GlobalContext);
    const navigation = useNavigation<StackNavigationType>();

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
                        navigation.goBack();
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
                    History
                </Text>
            }
            right = {
                <Card
                    pressable
                    onPress = {() => {
                        SheetManager.show("delete-result", { payload: [ BASE_URL.delete_all ] })
                    }}
                >
                    <Ionicons 
                        name = "md-options-sharp" 
                        style = {[ tw `text-2xl ${data ? 'text-black dark:text-white' : 'text-gray-500'}`]}  
                    />
                </Card>
            }
        />
    )
}

export default HistoryHeader;