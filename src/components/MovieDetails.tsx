import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import currencyFormatter from "currency-formatter";
import Icon from 'react-native-vector-icons/Ionicons';

import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

export const MovieDetails = ({ cast, movieFull }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>

                <View style={{ flexDirection: "row" }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={16}
                    />
                    <Text> {movieFull.vote_average} </Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(g => g.name).join(", ")}
                    </Text>
                </View>

                {/* Historia */}
                <Text style={styles.title}>
                    Historia
                </Text>

                <Text style={{ fontSize: 16 }}>
                    {movieFull.overview}
                </Text>

                {/* Presupuesto */}
                <Text style={styles.title}>
                    Presupuesto
                </Text>

                <Text style={{ fontSize: 18 }}>
                    {currencyFormatter.format(movieFull.budget, { code: "USD" })}
                </Text>

                {/* Casting */}
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.title}>
                        Actores
                    </Text>

                    <FlatList
                        data={cast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <CastItem actor={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10, height: 70 }}
                    />

                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: "bold"
    }
});
