import React from 'react';
import {View, Text} from 'react-native';

import {gStyle} from '../styles/style';

export default function Main() {
    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>Main page</Text>
        </View>
    );
}
