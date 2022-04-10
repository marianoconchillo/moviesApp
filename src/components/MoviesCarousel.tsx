import React, { useContext, useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';
import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';

const { width: windowWidth } = Dimensions.get("window");


interface Props {
    nowPlaying: Movie[]
}

export const MoviesCarousel = ({ nowPlaying }: Props) => {

    const { setMainColors } = useContext(GradientContext);

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const [primary = "green", secondary = "organge"] = await getImageColors(uri);
        setMainColors({ primary, secondary });
    }

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(0);
        }
    }, [nowPlaying])

    return (
        <View style={{ height: 320 }}>
            <Carousel
                data={nowPlaying}
                renderItem={({ item }: any) => <MoviePoster movie={item} />}
                sliderWidth={windowWidth}
                itemWidth={200}
                inactiveSlideOpacity={0.9}
                onSnapToItem={index => getPosterColors(index)}
            />
        </View>
    )
}
