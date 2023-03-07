import database from '@react-native-firebase/database';

const useFirebase = () => {
    const signIn = () => {

    }
    
    const signOut = () => {

    }

    const signUp = () => {

    }

    const fetchDetections = () => {
        database()
        .ref('/detections')
        .on("value", snapshot => {
            console.log('User data: ', snapshot.val());
        });
    }

    return { signIn, signOut, signUp, fetchDetections  }
}

export default useFirebase;