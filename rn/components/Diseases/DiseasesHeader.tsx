import Header from "../Header";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/Global";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationType } from "../../types/types";
import Card from "../Card";
import { Ionicons } from '@expo/vector-icons'; 
import Text from "../Text";
import tw from "../../utils/tw";
import { DiseaseComponentsProps } from "../../interfaces/Interfaces";

 
const DiseaseHeader = ({ data }: DiseaseComponentsProps ) => {
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
            { data }
          </Text>
        }
      />
    )
}

export default DiseaseHeader;