import React from 'react'
import styled from 'styled-components'
import {View, Text, TouchableOpacity} from 'react-native'
import { StyledContainer,
InnerContainer,
PageLogo,
Words,
 } from './../components/styles'


 const LoginButton = styled.View`
 
 
 `
  const Login = () =>{
     return(

         <StyledContainer>
             <InnerContainer>
        <PageLogo resizeMode="stretch"  source={require('./../assets/img/pothole.png')}/>
        <Words>
           Wecome to no-go where we hit the potholes so you dont have to
        </Words>
             </InnerContainer>
        <LoginButton>
        <Text>To share a photo from your phone with a friend, just press the button below!</Text>
        <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity>
        </LoginButton>
         </StyledContainer>
         
     )
 }

 export default Login;