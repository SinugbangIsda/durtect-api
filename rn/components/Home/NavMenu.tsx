import React, { useContext } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import Button from '../Button';
import { GlobalContext } from '../../context/Global';
import useDiseaseDetection from '../../hooks/useDiseaseDetection';
import Card from '../Card';
import Text from '../Text';
import tw from '../../utils/tw';

const NavMenu = () => {
  const { dispatch } = useContext(GlobalContext);
  const { uploadImage, captureImage  } = useDiseaseDetection();

  const handleSubmit = ({ action }: any) => {
    dispatch({
      type: "SET_ACTION",
      payload: action === "upload" ? "upload" : "capture"
    });
  }

  return (
    <Card twStyles = "flex-col items-center rounded-2xl p-10  bg-gray-200 dark:bg-[#262628]">
      <Card twStyles = "flex justify-center items-center">
        <SimpleLineIcons 
          name = "frame" 
          size = { 62 } 
          style = {[ tw `text-red-500`]}
        />
        <Card twStyles = "absolute">
          <MaterialCommunityIcons 
            name = "virus" 
            size = { 32 }
            style = {[ tw `text-red-500 my-2`]}
          /> 
        </Card>
      </Card>
      <Text twStyles = "text-black text-justify my-2 dark:text-white">
        Clean your camera lens and focus on the infected area for better results.
      </Text>
      <Button
        twStyles = "rounded-full p-4 flex justify-center items-center w-full my-1 bg-black dark:bg-white"
        onPress = {() => {
          captureImage()
          handleSubmit("capture");
        }}
      >
        <Text twStyles = "text-sm text-white font-bold dark:text-[#262628]">
          CAPTURE IMAGE
        </Text>
      </Button>
      <Button
        twStyles = "border-2 border-[#727272] rounded-full p-4 flex justify-center items-center w-full"
        onPress = {() => {
          uploadImage();
          handleSubmit("upload");
        }}
      >
        <Text twStyles = "text-sm text-black font-bold dark:text-white">
          UPLOAD IMAGE
        </Text>
      </Button>
    </Card>
  )
}

export default NavMenu;