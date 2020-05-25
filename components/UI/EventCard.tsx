import React from 'react'
import { Image, StyleSheet, TouchableOpacity, Text, Share } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element';

interface EventCardProps {
    onClick: () => void,
    id: number,
    photoUrl: string,
    title: string
}

export default (props: EventCardProps) => {
    const { onClick, id, photoUrl, title } = props
    return (
        <TouchableOpacity onPress={onClick} key={id} style={styles.cardContainer}>
            <SharedElement id={`item.${id}.photo`}>
                <Image style={styles.cardContainerImage} resizeMode="cover" source={{
                    uri: photoUrl
                }} />
            </SharedElement>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        padding: 10,
        height: 500,
        borderColor: 'black',
        borderWidth: 3
    },
    cardContainerImage: {
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    title: {
        fontWeight: '500',
        fontSize: 30
    }
})