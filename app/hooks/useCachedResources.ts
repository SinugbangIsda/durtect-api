import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import useDarkMode from './useDarkMode';
import useUserID from './useUserID';


export const useCachedResources = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const { renderTheme } = useDarkMode();
    const { getID } = useUserID();
    
    renderTheme();
    useEffect(() => {
      const loadResourcesAndDataAsync = async () => {
        try {
          getID();
          SplashScreen.preventAutoHideAsync();

          await Font.loadAsync({
            ...FontAwesome.font,
            'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          });

          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (e) {
          console.warn(e);
        } finally {
          setIsLoading(false);
          SplashScreen.hideAsync();
        }
      }
  
      loadResourcesAndDataAsync();
    }, []);
  
    return isLoading;
}