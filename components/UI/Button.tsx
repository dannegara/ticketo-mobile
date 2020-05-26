import React from 'react';
import { TouchableOpacity, StyleSheet, Text, ProgressBarAndroid } from 'react-native';
import { yellow } from '../../helpers/constants';

interface Props {
    title: string,
    style?: object,
    textStyle?: object,
    onPress: () => void,
    isLoading?: boolean
}

export default (props: Props) => {
    const { 
        title = 'Enter', 
        style = {}, 
        textStyle = {}, 
        onPress, 
        isLoading = false 
    } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            {
                isLoading ? 
                <ProgressBarAndroid color="#fff" /> : 
                <Text style={[styles.text, textStyle]}>{title}</Text>   
            }
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: yellow,
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20
    },
    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
});