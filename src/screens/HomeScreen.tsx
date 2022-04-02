import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useMovies } from '../hooks/useMovies';
import { Loading } from '../components/Loading';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MovieSCarousel } from '../components/MoviesCarousel';

export const HomeScreen = () => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return <Loading />
  }

  return (
    <ScrollView>
      
      <View style={{ marginTop: top + 20 }}>

        <MovieSCarousel nowPlaying={nowPlaying} />

        <HorizontalSlider title="Popular" movies={popular} />

        <HorizontalSlider title="Top Rated" movies={topRated} />

        <HorizontalSlider title="Upcoming" movies={upcoming} />

      </View>
    </ScrollView>
  )
}
