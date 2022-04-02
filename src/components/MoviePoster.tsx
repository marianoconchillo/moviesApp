import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Movie } from '../interfaces/movieInterface';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface Props  {
    movie: Movie,
    height?: number,
    width?: number,
}

export const MoviePoster = ({ movie, width = 200, height = 300, }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigator = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigator.dispatch(
                CommonActions.navigate("DetailScreen", movie)
            )}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 8,
            }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
    },
    image: {
        flex: 1,
        borderRadius: 20,
    }
});
