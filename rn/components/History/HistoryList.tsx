import { useNavigation } from "@react-navigation/native";
import { FlatList, Image } from "react-native";
import { Styles } from "../../constants";
import { HistoryComponentsProps } from "../../interfaces/Interfaces";
import { StackNavigationType } from "../../types/types";
import { getDateFromTimestamp } from "../../utils/getDateFromTimestamp";
import { sortResultsData } from "../../utils/sortResultsData";
import tw from "../../utils/tw";
import Card from "../Card";
import Text from "../Text";

const HistoryList = ({ data }: HistoryComponentsProps) => {
    const navigation = useNavigation<StackNavigationType>();

    const noData = () => {
        return (
          <Text twStyles = "text-black dark:text-white">
            No data avaiable.
          </Text>
        )
    }

    return (
        <FlatList 
            style={[ tw `h-full`]}
            data = { data }
            showsVerticalScrollIndicator = { false }
            renderItem = {({ item, index  }: any) => {
                const timestamp = getDateFromTimestamp(data[index]["timestamp"])
            return (
                <Card twStyles = "mt-2">
                    <>
                        { index === 0 ? 
                            <Card twStyles = "my-2">
                            <Text twStyles = "font-bold text-xl defaultText">
                                Today
                            </Text>
                        </Card>
                        :
                            null
                        }
                    </>
                    <Card 
                        pressable
                        onPress = {() => {
                            const val = sortResultsData([data[index]])
                            navigation.replace("Loading");
                            setTimeout(() => {
                              navigation.replace("Results", { 
                                data: val,
                                id: data[index]
                              });
                            }, 1000)
                          }}
                        twStyles = "flex-row items-center"
                    >
                        <Image 
                            style = {[ tw `rounded-lg`, Styles.historyLogImages ]}
                            resizeMode = "stretch"
                            source = {{
                            uri: data[index]["image_uri"],
                            cache: "force-cache"
                            }}

                        />
                        <Text twStyles = "text-black dark:text-white text-center ml-4 mt-2">
                            something
                        </Text>
                    </Card>
                </Card>
            )
            }}
            ListEmptyComponent = { noData }
        />
    )
}

export default HistoryList;


// ** todo **
// add a function that gets all the dates
// filter all the data with respect to the dates