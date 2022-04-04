import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Movie } from '../interfaces/movieInterface';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { stylesTheme } from '../theme/appTheme';

interface Props {
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
                ...styles.touchableCard,
                width,
                height,
            }}>
            <View style={[styles.imageContainer, stylesTheme.shadow]}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableCard: {
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 20,
    },
    image: {
        flex: 1,
        borderRadius: 20,
    }
});
