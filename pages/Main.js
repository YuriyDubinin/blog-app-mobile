import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, FlatList, Image} from 'react-native';

import {gStyle} from '../styles/style';

export default function Main({navigation}) {
    const [news, setNews] = useState([
        {
            title: 'Title',
            description: 'Some text..',
            fullText: 'Some text in full',
            key: '1',
            img: 'https://images.wallpapershq.com/wallpapers/6416/thumbnail_600x337.webp',
        },
        {
            title: 'Title2',
            description: 'Some text2..',
            fullText: 'Some text in full 2',
            key: '2',
            img: 'https://images.wallpapershq.com/wallpapers/7132/thumbnail_600x337.webp',
        },
        {
            title: 'Title3',
            description: 'Some text3..',
            fullText: 'Some text in full 3',
            key: '3',
            img: 'https://images.wallpapershq.com/wallpapers/7172/thumbnail_600x337.webp',
        },
    ]);

    const loadScene = (item) => {
        navigation.navigate('FullInfo', item);
    };

    return (
        <View style={gStyle.main}>
            <Text style={[gStyle.title]}>News</Text>
            <FlatList
                data={news}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.item} onPress={() => loadScene(item)}>
                        <Image
                            source={{
                                uri: item.img,
                            }}
                            style={gStyle.imgXs}
                        />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 30,
    },
    item: {
        width: '100%',
        marginBottom: 30,
    },
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 10,
        color: '#d3bfda',
    },
    description: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#d3bfda',
    },
});
