import React, { useCallback, useContext, useState } from "react";
import  { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationType } from "../types/types";
import { GlobalContext } from "../context/Global";
import moment from "moment";
import { BASE_URL } from "../constants";
import { sortResultsData } from "../utils/sortResultsData";

const useDiseaseDetection = () => {
    const navigation = useNavigation<StackNavigationType>();
    const { dispatch, data } = useContext(GlobalContext);
    const { user_id } = data;
    const imageOptions = {
        allowsEditing: false,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: false,
        quality: 1,
        base64: true
    }

    const uploadImage = useCallback(async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted")
            return Alert.alert("Permission denied!");
        
        const photo =  await ImagePicker.launchImageLibraryAsync(imageOptions);
        handleSubmit(photo);
    }, []);

    const captureImage = useCallback(async() => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted")
            return Alert.alert("Permission denied!");
        
        const photo =  await ImagePicker.launchCameraAsync(imageOptions);
        handleSubmit(photo);
    }, [])

    const handleSubmit = async (value:ImagePicker.ImagePickerResult ) => {
        if (!value.canceled) {
            const formData = new FormData();
            const fileUri = value.assets[0].uri;
            const fileName = value.assets[0].uri.substring(value.assets[0].uri.lastIndexOf('/') + 1, value.assets[0].uri.length);
            const fileType = value.assets[0].type + "/" + fileName.substring(fileName.lastIndexOf('.') + 1);
            
            formData.append("image", JSON.parse(JSON.stringify({
              uri: fileUri,
              type: fileType,
              name: fileName
            })));
            formData.append("timestamp", moment().unix().toString());
            formData.append("user_id", user_id);
            navigation.replace("Loading");
            fetchData(formData);
        }
    }

    const fetchData = async ( value: FormData) => {
        fetch(BASE_URL.detect, {
            method: "POST",
            body: value as any,
            mode: "cors",
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((res) => res.json())
        .then(async (value) => {
            const data = sortResultsData(Object.values(value));
            const id = Object.keys(value);
            navigation.replace("Results", { 
                data: data,
                id: id[0]
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: "SET_ERROR",
                payload: err
            });
        });
    }

    return { uploadImage, captureImage }
}

export default useDiseaseDetection;
