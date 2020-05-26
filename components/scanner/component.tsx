import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import ScannerModal from '../UI/Scanner-Modal';

interface BarCodeResult{
    type: string,
    data: string
}

export default class extends Component {

    state = {
        hasPermission: null,
        scanned: false
    }

    async componentDidMount() {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        this.setState({ hasPermission: status === 'granted' });
    }

    handleBarCodeScanner = ({ type, data }: BarCodeResult) => {
        this.setState({ scanned: true });
        Alert.alert("Scanner", `type: ${type}, data: ${data}`,[
            {
                text: 'OK',
                onPress: () => this.setState({ scanned: false }),
                style: 'cancel'
            }
        ], { cancelable: false });
    }

    closeModalHandler = () => {
        console.log('pressing');
    }

    render() {
        const { hasPermission, scanned } = this.state
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
                    showModal={true}
                    successfully={true}
                    confirm={this.closeModalHandler}
                    code={''}
                />
                <BarCodeScanner 
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanner}
                    style={StyleSheet.absoluteFillObject}
                />
            </View>
        )
    }
}