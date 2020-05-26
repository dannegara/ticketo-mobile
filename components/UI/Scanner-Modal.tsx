import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Button from './Button';

interface Props {
    showModal: boolean,
    successfully: boolean,
    confirm: () => void,
    code: string
}

interface Icon {
    name: 'closecircle' | 'checkcircle',
    color: string
}

const ICON_SIZE: number = 64;

export default (props: Props) => {
    const { showModal, successfully, confirm, code } = props;

    let icon: Icon = {
        name: "closecircle",
        color: "#de4d33"
    }

    if(successfully)
        icon = {
            name: "checkcircle",
            color: "#49eb34"
        }
    
    return (
        <View style={styles.container}>
            <View style={[StyleSheet.absoluteFill, styles.background]}></View>
            <View style={styles.modal}>
                <AntDesign size={ICON_SIZE} style={styles.icon} {...icon} />
                <Text style={styles.text}>Code Scanned</Text>
                <Text style={styles.suplimentalText}>The code you scanned succesfully activated</Text>
                <Text style={styles.suplimentalText}>Code: {code}</Text>
                <Button title="Keep Scanning" onPress={confirm} style={styles.button} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 2
    },
    background: {
        backgroundColor: '#eee',
        opacity: 0.5
    },
    modal: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '60%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        marginTop: 16
    },
    text: {
        fontSize: 32,
        fontWeight: "800",
        marginTop: 8
    },
    suplimentalText: {
        fontSize: 16,
        fontWeight: "500",
        marginTop: 8
    },
    button: {
        width: '90%',
        position: 'absolute',
        bottom: 20
    }
});