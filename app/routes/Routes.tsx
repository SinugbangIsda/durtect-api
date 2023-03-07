import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Results from '../screens/Results/Results';
import { RootStackParamList } from '../types/types';
import Loading from '../screens/Loading/Loading';
import History from '../screens/History/History';
import Diseases from '../screens/Diseases/Diseases';
import WhatsNew from '../screens/WhatsNew/WhatsNew';
import { useCachedResources } from '../hooks/useCachedResources';

const Routes = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    const loading = useCachedResources();
    
    if (!loading) {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions = {{
                        gestureEnabled: false,
                    }}
                    
                >
                    <Stack.Screen
                        name = "Home"
                        component = { Home }
                        options = {{
                            headerShown: false,
                            gestureEnabled: false,
                            animationTypeForReplace: "pop",
                        }} 

                    />
                    <Stack.Screen
                        name = "History"
                        component = { History }
                        options = {{
                            headerShown: false,
                            gestureEnabled: true,
                            animation: "slide_from_right",
                        }}
                    />
                    <Stack.Screen
                        name = "Diseases"
                        component = { Diseases }
                        options = {{
                            headerShown: false,
                            gestureEnabled: true,
                            animation: "slide_from_right",
                        }} 
                    />
                    <Stack.Screen
                        name = "WhatsNew"
                        component = { WhatsNew }
                        options = {{
                            headerShown: false,
                            gestureEnabled: true,
                            animation: "slide_from_right",
                        }} 
                    />
                    <Stack.Screen
                        name = "Loading"
                        component = { Loading }
                        options = {{
                            headerShown: false,
                            gestureEnabled: false,
                            animation: "slide_from_right",
                        }} 
                    />
                    <Stack.Screen
                        name = "Results"
                        component = { Results }
                        options = {{
                            headerShown: false,
                            gestureEnabled: false,
                            animation: "slide_from_right"
                        }} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        return (
            <Loading />
        )
    }
}

export default Routes;