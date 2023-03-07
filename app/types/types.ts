import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DataResultsProps } from '../interfaces/Interfaces';

export type RootStackParamList = {
    "Home": undefined;
    "About": undefined;
    "Results": undefined | any;
    "Loading": undefined;
    "History": undefined | Object;
    "Diseases": undefined | Object;
    "WhatsNew": undefined;
};

export type StackNavigationType = NativeStackNavigationProp<RootStackParamList>;

export type Actions = 
    | { type: "SET_ACTION", payload: "delete_entry" }
    | { type: "SET_THEME", payload: "light" | "dark" }
    | { type: "SET_ERROR", payload: string }
    | { type: "SET_DATA", payload:  string }
    | { type: "SET_IMAGE", payload: FormData }
    | { type: "RESET" }