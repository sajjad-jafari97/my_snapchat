import { StyleSheet,Text, View, SafeAreaView, Image, Button } from 'react-native';
import { Camera } from 'expo-camera';
import {shareAsync} from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import React,{ useEffect, useRef, useState } from 'react';

export function ScreenCamera () {
    let cameraRef = useRef();
    const[hasCameraPermission, setHasCameraPersmission]=useState();
    const[hasMediaLibraryPermission, setHasMediaLibraryPersmission] = useState();
    const[photo, setPhoto]= useState();

    useEffect(()=>{
        (async ()=>{
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPersmission(cameraPermission.status == "granted");
            setHasMediaLibraryPersmission(mediaLibraryPermission.status == "granted");
        })();
    }, []);

if(hasCameraPermission == undefined){
    return <Text> Requesting permissions...</Text>
}else if(!hasCameraPermission) {
    return <Text> Permissions for camera has not granted</Text>
}
    let takePic = async () => {
        let options = {
            quality:1,
            base64:true,
            exif:false,
        };
        let newPhoto = await cameraRef.current.takePictureAsync(options);

        setPhoto(newPhoto);
    
    };
    if(photo){
        let sharePic = () =>{
            shareAsync(photo.uri).then(()=>{
                setPhoto(undefined); 
            });
        };
        let savePhoto = () =>{
            MediaLibrary.saveToLibraryAsync(photo.uri).then(()=>{
                setPhoto(undefined);
            });
        };  
        return(
            <SafeAreaView style={styles.container}>
                <Image style={styles.preview} source={{uri:"data:image/jpg;base64," + photo.base64}}/>
                <Button title="Share" onPress={sharePic}/>
                {hasMediaLibraryPermission ?  <Button title="Save" onPress={savePhoto}/> : undefined};
                <Button title="Discard" onPress={()=> setPhoto(undefined)}/>
            </SafeAreaView>
        );
    }
    return (
        <Camera style={styles.container} ref={cameraRef}>
            <View style={styles.buttonContainer}>
                <Button title='Take Pic' onPress={takePic}/>

            </View>
        </Camera>
    )
}
const styles = StyleSheet.create ({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    buttonContainer:{
        backgroundColor:"#fff",
        alignSelf:'flex-end',
        
    },
    preview:{
        alignSelf: 'stretch',
        flex:1,
    }
 
});