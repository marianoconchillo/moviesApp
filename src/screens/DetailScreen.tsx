import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { stylesTheme } from '../theme/appTheme';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { Loading } from '../components/Loading';
import { MovieDetails } from '../components/MovieDetails';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get("screen").height;

interface Props extends StackScreenProps<RootStackParams, "DetailScreen"> { }

export const DetailScreen = ({ route, navigation }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={[styles.imageBorder, stylesTheme.shadow]}>
          <Image
            source={{ uri }}
            style={styles.posterImage}
          />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>

      {
        isLoading
          ? <Loading />
          : <MovieDetails movieFull={movieFull!} cast={cast} />
      }

      {/* Botón para volver */}
      <View style={styles.backButton}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
        >
          <Icon
            color="white"
            name="arrow-back-outline"
            size={45}
          />
        </TouchableOpacity>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: screenHeight * 0.7,
  },
  imageBorder: {
    overflow: "hidden",
    flex: 1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  backButton: {
    position: "absolute",
    zIndex: 999,
    elevation: 9,
    top: 20,
    left: 5,
  }
});
