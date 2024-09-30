import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = ({ profile }) => {
    return (
        <View style={styles.card}>
            <View style={styles.locationBox}>
                <Text style={styles.locationText}>2 km</Text>
            </View>
            <Image source={{ uri: profile.image }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.name}>{profile.name}, {profile.age}</Text>
                <Text style={styles.bio}>{profile.bio}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 400,
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        position: 'relative',
        marginBottom: "15%"
    },
    image: {
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    details: {
        padding: 10,
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    bio: {
        fontSize: 16,
        color: '#666',
    },
    locationBox: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 5,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    locationText: {
        fontWeight: 'bold',
        fontSize: 19,
        color: '#333',
    },
});

export default ProfileCard;
