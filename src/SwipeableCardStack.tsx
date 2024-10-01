import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import ProfileCard from './ProfileCard';
import { Think, Like, Nope } from '../helper/ImageAssets';

const SwipeableCardStack = () => {
    const profiles = [
        { id: '1', name: 'Alice', age: 24, bio: 'Adventurous spirit', image: 'https://placekitten.com/400/300' },
        { id: '2', name: 'Bob', age: 28, bio: 'Coffee enthusiast', image: 'https://placekitten.com/400/300' },
        { id: '3', name: 'Charlie', age: 22, bio: 'Love to travel', image: 'https://placekitten.com/400/300' },
        { id: '4', name: 'Diana', age: 26, bio: 'Foodie and blogger', image: 'https://placekitten.com/400/300' },
        { id: '5', name: 'Ethan', age: 30, bio: 'Tech enthusiast', image: 'https://placekitten.com/400/300' },
        { id: '6', name: 'Fiona', age: 27, bio: 'Yoga lover', image: 'https://placekitten.com/400/300' },
        { id: '7', name: 'George', age: 23, bio: 'Music aficionado', image: 'https://placekitten.com/400/300' },
        { id: '8', name: 'Hannah', age: 29, bio: 'Art and culture buff', image: 'https://placekitten.com/400/300' },
        { id: '9', name: 'Ian', age: 25, bio: 'Movie lover', image: 'https://placekitten.com/400/300' },
        { id: '10', name: 'Jasmine', age: 31, bio: 'Nature explorer', image: 'https://placekitten.com/400/300' },
    ];

    const onSwipedLeft = (index) => {
        console.log('Disliked:', profiles[index].name);
    };

    const onSwipedRight = (index) => {
        console.log('Liked:', profiles[index].name);
    };

    return (
        <>
            <View style={styles.container}>

                <Swiper
                    cards={profiles}
                    renderCard={(profile) => <ProfileCard profile={profile} />}
                    onSwipedLeft={onSwipedLeft}
                    onSwipedRight={onSwipedRight}
                    backgroundColor="transparent"
                    stackSize={3}
                    cardIndex={0}
                    verticalSwipe={false} 
                    overlayLabels={{
                        left: {
                            title: 'NO',
                            style: {
                                label: {
                                    textAlign: 'right',
                                    color: 'red',
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    marginTop:"25%"
                                },
                            },
                        },
                        right: {
                            title: 'YES',
                            style: {
                                label: {
                                    textAlign: 'left',
                                    color: 'green',
                                    fontSize: 30,
                                    fontWeight: 'bold',
                                    marginTop:"25%"
                                },
                            },
                        },
                    }}
                />

                <View style={styles.iconsContainer}>
                    <Image style={styles.image1} source={Like} />
                    <Image style={styles.image2} source={Think} />
                    <Image style={styles.image1} source={Nope} />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        paddingVertical: 20,
        position: 'absolute',
        bottom:0
    },
    image1: {
        height: 70,
        width: 70,
    },
    image2: {
        height: 50,
        width: 50,
    }
});

export default SwipeableCardStack;
