import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import moment from 'moment';

import {gStyle} from '../styles/style';

export default function BlogPage({route}) {
    const {title, content_text, url, updated_at} = route.params;

    return (
        <View style={gStyle.main}>
            <Image source={{uri: url}} style={gStyle.imgLg} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.textBody}>{content_text}</Text>
            <Text style={styles.date}>{moment(updated_at).format('LLL')}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 10,
        color: '#3f3c3c',
    },
    textBody: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        color: '#3f3c3c',
    },
    date: {
        fontFamily: 'mt-light',
        fontSize: 13,
        textAlign: 'end',
        marginTop: 10,
        color: '#3f3c3c',
    },
});
