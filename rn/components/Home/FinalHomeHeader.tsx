import React from 'react';
import Button from '../Button';
import { Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import useDarkMode from '../../hooks/useDarkMode';
import tw from '../../utils/tw';
import Greetings from './Greetings';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationType } from "../../types/types";
import Card from '../Card';

const HomeHeader = () => {
    const { setTheme, theme } = useDarkMode();
    const navigation = useNavigation<StackNavigationType>()

  return (
    // <Header
    //     left = {
    //         <Greetings />
    //     }
    //     right = { 
    //         <>
    //             <Button
    //                 twStyles = 'aspect-square rounded-xl'
    //                 onPress = {() => {
    //                     navigation.navigate("WhatsNew");
    //                 }}
    //             >
    //                 <MaterialIcons 
    //                     name = "notifications-none" 
    //                     size = { 28 } 
    //                     style = {[ tw `text-black dark:text-white`]} 
    //                 />
    //             </Button>
    //             <Button 
    //                 onPress = {() => {
    //                     navigation.navigate("Loading");
    //                     setTimeout(() => {
    //                         setTheme(theme === "dark" ? "light": "dark");
    //                         navigation.goBack();
    //                     }, 2000);
    //                 }}
    //                 twStyles = 'aspect-square rounded-xl'
    //             >
    //                 { theme === "light" ?
    //                     <Feather 
    //                         name = "moon" 
    //                         size = { 28 } 
    //                         style = {[ tw `text-black dark:text-white`]} 
    //                     />
    //                  :
    //                     <MaterialCommunityIcons 
    //                         name = "white-balance-sunny" 
    //                         size = { 28 } 
    //                         style = {[ tw `text-black dark:text-white`]} 
    //                     />
    //                 }
    //             </Button>
    //         </>
    //     }
    // />
    <Card twStyles = "">
        <Card twStyles = "">
            <Greetings />
        </Card>
        <Card twStyles = "">
            <Button
                twStyles = 'aspect-square rounded-xl'
                onPress = {() => {
                    navigation.navigate("WhatsNew");
                }}
            >
                <MaterialIcons 
                    name = "notifications-none" 
                    size = { 28 } 
                    style = {[ tw `text-black dark:text-white`]} 
                />
            </Button>
            <Button 
                onPress = {() => {
                    navigation.navigate("Loading");
                    setTimeout(() => {
                        setTheme(theme === "dark" ? "light": "dark");
                        navigation.goBack();
                    }, 2000);
                }}
                twStyles = 'aspect-square rounded-xl'
            >
                { theme === "light" ?
                    <Feather 
                        name = "moon" 
                        size = { 28 } 
                        style = {[ tw `text-black dark:text-white`]} 
                    />
                    :
                    <MaterialCommunityIcons 
                        name = "white-balance-sunny" 
                        size = { 28 } 
                        style = {[ tw `text-black dark:text-white`]} 
                    />
                }
            </Button>
        </Card>
    </Card>
  )
}

export default HomeHeader