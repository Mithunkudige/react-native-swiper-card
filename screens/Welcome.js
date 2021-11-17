import React, { useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';


const Welcome = () => {


    const [cardd, setCard] = useState([
        {text: 'Tomato', backgroundColor: 'red'},
        {text: 'Aubergine', backgroundColor: 'purple'},
        {text: 'Courgette', backgroundColor: 'green'},
        {text: 'Blueberry', backgroundColor: 'blue'},
        {text: 'Umm...', backgroundColor: 'cyan'},
        {text: 'orange', backgroundColor: 'orange'},
      ]);

      const handleYup = (card) => {
        console.log(`Yup for ${card.text}`)
      }
      const handleNope = (card) => {
        console.log(`Nope for ${card.text}`)
      }
      const handleMaybe = (card) => {
        console.log(`Maybe for ${card.text}`)
      }

    const Card = (data) => {
        console.log(data);
        return (
            <View style={[styles.card, { backgroundColor: data.backgroundColor }]}>
                <Text>{data.text}</Text>
            </View>
        );
    }

    const NoMoreCards = () => {   
        return (
            <View>
                <Text >No more cards</Text>
            </View>
        );
    }
    
    return <SwipeCards
        cards={cardd}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={handleYup}
        handleNope={handleNope}
        handleMaybe={handleMaybe}
        hasMaybeAction
      />
};


const styles = StyleSheet.create({
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: 300,
    }
  })

export default Welcome;