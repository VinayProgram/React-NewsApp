import React from 'react'
import { useEffect, useState } from "react"
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import Newscomp from "./Newscomp"
import {NavigationContainer} from '@react-navigation/native';
import { Container, Navbar } from 'navbar-native';


const App = () => {
  var newsinf=[{title:"apple"},{title:"ball"}]
  const[news,setnews]=useState("Hello")
  const [api,newapi]=useState('a0e710c4fcda4f189c0abe9a56322f01')
  const [Cat,NewCat]=useState('General')
  useEffect(()=>{
  newsfetch('general')
},[])

const newsfetch=async(category)=>{
console.log('pir')
  let data=await fetch("https://newsapi.org/v2/top-headlines?country=in&category="+category+"&apiKey="+api)
newsinf=await data.json()
setnews(newsinf.articles)
}

const updateapi=(apikey)=>{
  newapi(apikey)
  console.log(apikey)
  newsfetch()
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 25,
    width:80,
    height:30,
    marginBottom:10,
    marginLeft:10
  },
  buttonText: {
    color: 'white',
    fontSize: 11,
    textAlign: 'center',
    marginTop:5
  },
  button1: {
    backgroundColor: 'orange',
    borderRadius: 25,
    width:80,
    height:30,
    marginBottom:20,
    marginLeft:10
  },
  buttonText1: {
    color: 'black',
    fontSize: 11,
    textAlign: 'center',
    marginTop:5
  },
  Container:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  input:{
    backgroundColor: 'black',
    borderRadius: 25,
    width:200,
    height:35,
    paddingBottom:10,
    marginBottom:10,
    marginLeft:60
  }
});


return ( 
 <>
 <Text style={{backgroundColor:'orange',color:"black",fontWeight:'bold',marginBottom:10,fontSize:20,paddingLeft:160,paddingBottom:2,fontFamily:"Times New Roman"}}>Daily News</Text>
  <View style={styles.Container}> 
 <TextInput  style={styles.input} placeholder='Enter API' onChangeText={updateapi}></TextInput>
 <TouchableOpacity style={styles.button1} onPress={()=>{updateapi}}><Text style={styles.buttonText1}>SetApi</Text></TouchableOpacity> 
  </View>
  <View style={styles.Container}> 
  <TouchableOpacity style={styles.button} onPress={()=>{newsfetch('General')}}><Text style={styles.buttonText}>Daily News</Text></TouchableOpacity> 
  <TouchableOpacity style={styles.button} onPress={()=>{newsfetch('Science')}}><Text style={styles.buttonText}>Science</Text></TouchableOpacity> 
  <TouchableOpacity style={styles.button} onPress={()=>{newsfetch('Technology')}}><Text style={styles.buttonText}>Technology</Text></TouchableOpacity> 
  <TouchableOpacity style={styles.button} onPress={()=>{newsfetch('sports')}}><Text style={styles.buttonText}>Sports</Text></TouchableOpacity> 
  <TouchableOpacity style={styles.button} onPress={()=>{newsfetch('health')}}><Text style={styles.buttonText}>Health</Text></TouchableOpacity> 
  <TouchableOpacity style={styles.button} onPress={()=>{newsfetch('Entertainment')}}><Text style={styles.buttonText}>Entertainment</Text></TouchableOpacity> 
  <TouchableOpacity style={styles.button} onPress={()=>{newsfetch('Business')}}><Text style={styles.buttonText}>Business</Text></TouchableOpacity> 
  </View>
  <FlatList data={news} renderItem={({item})=><Newscomp title={item.title} image={item.urlToImage} url={item.url} desc={item.description}></Newscomp>}/>
  
  </>
  )
}

export default App
