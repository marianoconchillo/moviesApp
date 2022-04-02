import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={50} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        flex: 1,
        justifyContent: "center",
    }
});
