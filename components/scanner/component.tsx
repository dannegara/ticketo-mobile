import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Audio } from 'expo-av';
import ScannerModal from '../UI/Scanner-Modal';

interface BarCodeResult{
    type: string,
    data: string
}

export default class extends Component {

    state = {
        hasPermission: null,
        scanned: false,
        showModal: false,
        successfully: false,
        code: ''
    }

    async componentDidMount() {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        this.setState({ hasPermission: status === 'granted' });
    }

    handleBarCodeScanner = async ({ type, data: code }: BarCodeResult) => {
        const sound = new Audio.Sound();
        try {
            await sound.loadAsync(require('../../assets/sounds/swiftly.mp3'));
            await sound.playAsync();
            this.setState({ scanned: true, showModal: true, code, successfully: true });
        } catch {
            console.log('error playing sound');
        }
    }

    closeModalHandler = () => this.setState({ showModal: false, scanned: false })

    render() {
        const {
            hasPermission,
            scanned,
            showModal,
            successfully,
            code
        } = this.state
        if(hasPermission === null)
            return <Text>Request for camera permission</Text>

        if(hasPermission === false)
            return <Text>No access to camera</Text>

        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}
            >
                <ScannerModal
                    showModal={showModal}
                    successfully={successfully}
                    confirm={this.closeModalHandler}
                    code={code}
                />
                <BarCodeScanner 
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanner}
                    style={StyleSheet.absoluteFillObject}
                />
            </View>
        )
    }
}