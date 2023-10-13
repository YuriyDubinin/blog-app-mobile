import React from 'react';
import {StyleSheet} from 'react-native';

export const gStyle = StyleSheet.create({
    mainWrapper: {
        flex: 1,
    },
    main: {
        flex: 1,
        padding: 20,
        backgroundColor: '#0f030e',
    },
    title: {
        fontSize: 25,
        color: '#d3bfda',
        fontFamily: 'mt-bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    imgXs: {
        borderRadius: 24,
        width: '100%',
        height: 200,
    },
    imgLg: {
        borderRadius: 24,
        width: '100%',
        height: 300,
    },
});
