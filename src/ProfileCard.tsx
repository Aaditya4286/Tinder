import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { AppText, BOLD, FOURTEEN, SEMI_BOLD, SIXTEEN, TWELVE } from '../common';
import { colors } from '../theme/colors';

const ProfileCard = ({ profile }) => {
    return (
        <View style={styles.card}>
            <View style={styles.locationBox}>
                <AppText type={TWELVE} weight={BOLD} style={styles.locationText}>2 km</AppText>
            </View>
            <Image source={{ uri: profile.image }} style={styles.image} />
            <View style={styles.details}>
            <AppText type={SIXTEEN} weight={BOLD}>{profile.name}, {profile.age}</AppText>
            <AppText type={FOURTEEN} weight={SEMI_BOLD} style={styles.bio}>{profile.bio}</AppText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 400,
        width: '100%',
        borderRadius: 10,
        backgroundColor: colors.white,
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
        backgroundColor: colors.white,
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

        color: colors.gray,
    },
});

export default ProfileCard;
