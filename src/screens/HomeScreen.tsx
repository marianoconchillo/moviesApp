import React from 'react';
import { Button, Text, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { };

export const HomeScreen = ({ navigation }: Props) => {

  return (
    <View>
      <Text>HomeScren</Text>

      <Button
        title="Ir detalle"
        onPress={() => navigation.navigate("DetailScreen")} />

    </View>
  )
}
