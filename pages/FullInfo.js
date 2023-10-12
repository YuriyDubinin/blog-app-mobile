import React from 'react';
import {View, Text} from 'react-native';

import {gStyle} from '../styles/style';

export default function FullInfo({route}) {
    // const loadScene = () => {
    //     navigation.goBack();
    // }

    const {title, description, fullText} = route.params;

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>{title}</Text>
            <Text>{fullText}</Text>
        </View>
    );
}
