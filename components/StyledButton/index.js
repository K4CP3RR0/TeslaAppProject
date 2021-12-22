import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';



const StyledButton = (props) => {
   

    const {type,content,onPress} = props;
    
    const backgroundColor = type ==="primary" ? '#2B2D42' : '#EDF2F4';
    const color = type ==="primary" ? '#EDF2F4' : '#2B2D42';
    return (
        <View style={styles.container}>
            <Pressable
            style={[styles.button,{backgroundColor:backgroundColor}]}
            onPress={() => onPress()}>
                 
                <Text styles={[styles.text,{color:color}]}>{content}</Text>
            </Pressable>
            
        </View>
    );
};
export default StyledButton;