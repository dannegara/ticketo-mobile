import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { yellow } from '../../helpers/constants';
export default ( props: any ) => {
    const { onChange, ...rest } = props
    return(
        <TextInput 
            style={styles.input}
            onChangeText={onChange}
            {...rest}
        />
    )
}
const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 50,
        borderRadius: 5,
        padding: 8,
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
        borderColor: yellow,
        borderWidth: 1,
        margin: 10
    }
});