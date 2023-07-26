import React from 'react'
import {StyleSheet, Button, Image, Linking, Text, TouchableOpacity, View } from 'react-native'

const news = (props) => {
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'grey',
      borderRadius: 25,
      width:150,
      height:50,
      marginBottom:10,
      marginLeft:90,
      marginTop:40
    },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    marginTop:10,
    fontWeight:'bold'
  },
  
  
  })
  return (
    <>
    <View style={{marginLeft:40,marginBottom:60,marginTop:50}}>
    <Text style={{fontSize:20,color:"white",fontWeight:"bold",marginRight:15,paddingRight:10}}>{props.title}</Text>
    <Image source={{uri:!props.image?'https://wallpaperaccess.com/full/2112542.jpg':props.image}} style={{width:"90%",height:250,marginTop:40,marginBottom:40}} ></Image>
    <Text style={{fontSize:15,color:"white",marginRight:15,paddingRight:10,marginTop:10}}>{props.desc}</Text>
    <TouchableOpacity style={styles.button} onPress={()=>{Linking.openURL(props.url)}}><Text style={styles.buttonText}>ReadMore...</Text></TouchableOpacity>   
    </View>
    
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 15, backgroundColor: 'orange'}} />
</View>
    </>
    
  )
}   

export default news
