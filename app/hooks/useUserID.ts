import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { GlobalContext } from "../context/Global";
import { nanoid } from "nanoid";
import "react-native-get-random-values";

const useUserID = () => {
    const { dispatch, data } = useContext(GlobalContext);
    const { user_id } = data;

    const handleID = async (value: string)  => {
        await AsyncStorage.setItem("user_id", value);
        dispatch({
            type: "SET_DATA",
            payload: value
        });
    };
    const getID = async () => {
        try {
            const val: any = await AsyncStorage.getItem("user_id");
            if (val) {
                return handleID(val);
            }
            handleID(nanoid(7));
        } catch(e) {
            console.log(e);
        };
    };

    return { getID, user_id }
}

export default useUserID;
