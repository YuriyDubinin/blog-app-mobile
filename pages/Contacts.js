import React from 'react';
import {View, Text} from 'react-native';

import '../styles/style';

export default function Contacts() {
    const [appIsReady, setAppIsReady] = useState(false);
    return (
        <View style={gStyle.main} onLayout={onLayoutRootView}>
            <Text style={gStyle.title}>Contact page</Text>
        </View>
    );
}
