import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

export default class extends Component<any> {
    render() {
        const { item } = this.props.route.params;
        return (
            <View>
                <SharedElement id={`item.${item.id}.photo`}>
                    <Image resizeMode="cover" source={{
                        uri: item.photoUrl
                    }} style={styles.image} />
                </SharedElement>
                <Text style={styles.detailTitle}>{item.title}</Text>
                <Button title="Login" onPress={() => this.props.navigation.navigate('Login')} />
                <Button title="Back" onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
      detailScreenImage: {
        flex: 1
      },
      image: {
        width: '100%',
        height: 208
      },
      detailTitle: {
        fontWeight: '500',
        fontSize: 20
      }
});