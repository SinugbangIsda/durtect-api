import React, { useContext, useRef } from 'react';
import ActionSheet, { ActionSheetRef,SheetProps } from 'react-native-actions-sheet';
import Text from '../Text';
import Card from '../Card';
import { View } from 'react-native';
import Button from '../Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from '../../types/types';
import { GlobalContext } from '../../context/Global';
import useDarkMode from '../../hooks/useDarkMode';


const DeleteResult = ({ sheetId, payload }: SheetProps) => {
  const actionSheetRef = useRef<ActionSheetRef>(null); 
  const navigation = useNavigation<StackNavigationType>(); 
  const { dispatch, data } = useContext(GlobalContext);
  const { theme } = useDarkMode();
  const { user_id } = data;

  const handleSubmit = () => {
    navigation.replace("Loading");
    const form = new FormData();
    form.append("user_id", user_id);

    if (payload !== null) {
      form.append("entry_id", payload[1]);
    }
    
    fetch(payload[0], {
      method: "POST",
      body: form,
      mode: "cors",
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(() => {
      setTimeout(() => {
        navigation.replace("Home")
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
      dispatch({
          type: "SET_ERROR",
          payload: err
      });
    });
  };

  return (
    <ActionSheet
      id = { sheetId }
      ref = { actionSheetRef }
      containerStyle={{
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: theme === "dark" ? "#131313" : "white"
      }}
      indicatorStyle={{
        width: 60,
        backgroundColor: theme === "dark" ? "white" : "black"
      }}
      gestureEnabled = { true }
    >
      <View style = {{ flexDirection: "column", height: 200, alignContent: "center", alignItems: "center" }}>
        <Card twStyles = "flex-1 justify-center items-center">
          <Card twStyles = "my-4">
            <Text twStyles = "text-black dark:text-white">
              Do you wish to delete this data?
            </Text>
          </Card>
          <Card twStyles = "flex-row justify-center items-center">
            <Button
              twStyles = "bg-white p-2 border-2 border-black rounded-xl"
              onPress = { () => actionSheetRef.current?.hide() }
            >
              <Text>
                Cancel
              </Text>
            </Button>
            <Button
              twStyles = "bg-red-600 p-2 border-2 border-transparent rounded-xl"
              onPress = { () =>{
                actionSheetRef.current?.hide() 
                setTimeout(() => {
                  handleSubmit()
                }, 100 )
              }}
            >
              <Text>
                Delete
              </Text>
            </Button>
          </Card>
        </Card>
      </View>
    </ActionSheet>
  )
}

export default DeleteResult;