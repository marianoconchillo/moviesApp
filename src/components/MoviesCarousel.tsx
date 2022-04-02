import React from 'react';
import { Dimensions, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

const { width: windowWidth } = Dimensions.get("window");


interface Props {
    nowPlaying: Movie[]
}

export const MovieSCarousel = ({ nowPlaying } : Props) => {
    return (
        <View style={{ height: 320 }}>
            <Carousel
                data={nowPlaying}
                renderItem={({ item }: any) => <MoviePoster movie={item} />}
                sliderWidth={windowWidth}
                itemWidth={200}
                inactiveSlideOpacity={0.9}
            />
        </View>
    )
}
