import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { stylesTheme } from '../theme/appTheme';

interface Props {
    actor: Cast
}

export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

    return (
        <View style={[styles.container, stylesTheme.shadow]}>
            {
                actor.profile_path && (
                    <Image
                        source={{ uri }}
                        style={styles.image}
                    />
                )
            }
            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        height: 55,
        borderRadius: 10,
        marginRight: 30,
        paddingRight: 20,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 3,
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 10
    }
});
