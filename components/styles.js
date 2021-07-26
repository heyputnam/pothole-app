import styled from 'styled-components'
import {View, Image, Text} from  'react-native'
import Constants from 'expo-constants'





export const Colors = {
    text: "#182326",
    backGround: "#e8eced",
    highlight:"#ffffff",
    red: "#ff4336",
    pastelRed: "#ff6b6b",
    blue: "#bdeeff",
    steel: "#a5a7a8",
    darkGrey: "#424242",

}; 

// destructoring so I can use jus the name throughout project

const {text, backGround, highlight, red, pastelRed, blue, steel, darkGrey} = Colors; 

export const StyledContainer = styled.View`
flex: 1;
padding: 25px;
background-color: ${backGround};





`

export const InnerContainer = styled.View`
flex: 1;
width: 100%;
align-items: center;
`;

export const PageLogo = styled.Image`
width: 250px;
height:  250px;

`

export const Words = styled.Text`
color: ${text};


`