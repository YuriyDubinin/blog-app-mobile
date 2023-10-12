import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, FlatList} from 'react-native';

import {gStyle} from '../styles/style';

export default function Main({navigation}) {
    const [news, setNews] = useState([
        {title: 'Title', description: 'Some text..', fullText: 'Some text in full'},
        {title: 'Title2', description: 'Some text2..', fullText: 'Some text in full 2'},
        {title: 'Title3', description: 'Some text3..', fullText: 'Some text in full 3'},
    ]);

    const loadScene = (item) => {
        navigation.navigate('FullInfo', item);
    };

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>Main page</Text>
            <FlatList
                data={news}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => loadScene(item)}>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
