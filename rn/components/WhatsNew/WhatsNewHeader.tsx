import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { GlobalContext } from "../../context/Global";
import { WhatsNewComponentsProps } from "../../interfaces/Interfaces";
import { StackNavigationType } from "../../types/types";
import { Ionicons } from '@expo/vector-icons'; 
import Card from "../Card";
import Header from "../Header";
import tw from "../../utils/tw";
import Text from "../Text";

const WhatsNewHeader = ({ data }: WhatsNewComponentsProps) => {
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
                    Whats New
                </Text>
            }
        />
    )
}

export default WhatsNewHeader;