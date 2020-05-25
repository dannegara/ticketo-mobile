import React, { Component } from 'react';
import { View } from 'react-native';
import EventCard from '../UI/EventCard';

interface Item {
    id: number,
    photoUrl: string,
    title: string
  }

const items: Item[] = [
    {
      id: 1,
      photoUrl: 'https://www.thomann.de/blog/wp-content/uploads/2019/08/Quiz_slipknot_header_770x425.jpg',
      title: 'Slipknot'
    },
    {
      id: 2,
      photoUrl: 'https://www.thomann.de/blog/wp-content/uploads/2019/08/Quiz_slipknot_header_770x425.jpg',
      title: 'Slipknot event'
    }
  ]

export default class extends Component<any> {
    render() {
        const { navigation } = this.props

        return (
            <View>
                {items.map((item: Item) => (
                    <EventCard
                        key={item.id}
                        onClick={() => navigation.push('Detail', { item })}
                        id={item.id}
                        photoUrl={item.photoUrl}
                        title={item.title}
                    />
                ))}
            </View>
        )
    }
}