import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator, SharedElement } from 'react-navigation-shared-element';
import EventCard from './components/EventCard'


const width: number = Dimensions.get('window').width

const Stack = createSharedElementStackNavigator();

interface Item {
  id: number,
  photoUrl: string,
  title: string
}

class ListScreen extends React.Component<any> {


  render() {
    const { navigation } = this.props
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

const DetailScreen = (props: any) => {
  const { item } = props.route.params;
  return (
    <View>
      <SharedElement id={`item.${item.id}.photo`}>
        <Image resizeMode="cover" source={{
          uri: item.photoUrl
        }} style={styles.image} />
      </SharedElement>
      <SharedElement id={`item.${item.id}.title`}>
        <Text style={styles.detailTitle}>{item.title}</Text>
      </SharedElement>
    </View>
  );
};

export default function App() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={ListScreen} options={{headerShown: false}} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          sharedElementsConfig={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [`item.${item.id}.photo`, `item.${item.id}.title`];
          }}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
