import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {gStyle} from '../styles/style';

export default function FullInfo({route}) {
    // const loadScene = () => {
    //     navigation.goBack();
    // }

    const {title, description, fullText} = route.params;

    return (
        <View style={gStyle.main}>
            <Image
                source={{
                    uri: route.params.img,
                }}
                style={gStyle.imgLg}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.fullText}>{fullText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 10,
        color: '#d3bfda',
    },
    fullText: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        color: '#d3bfda',
    },
});
