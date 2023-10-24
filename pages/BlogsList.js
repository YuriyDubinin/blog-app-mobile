import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TouchableOpacity,
    FlatList,
    Image,
    Modal,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import {gStyle} from '../styles/style';

import {getBlogsList, getPhotosList} from '../api/newsApi';

export default function BlogsList({navigation}) {
    const [blogsList, setBlogslogsList] = useState([]);
    const [isModalOpen, setIsModalOPen] = useState(false);

    const loadScene = (item) => {
        navigation.navigate('BlogPage', item);
    };

    const reorganizeData = (blogsList, photosList) => {
        const totalBlogsList = [];

        for (let i = 0; i < 100; i++) {
            totalBlogsList.push({
                ...blogsList[i],
                ...photosList[i],
            });
        }

        setBlogslogsList(totalBlogsList);
    };

    // obtaining all necessary data
    useEffect(() => {
        Promise.all([getBlogsList(), getPhotosList()])
            .then(([blogsList, photosList]) => {
                reorganizeData(blogsList.data.blogs, photosList.data.photos);
            })
            .catch((err) => console.log('error: ', err));
    }, []);

    return (
        <View style={gStyle.main}>
            <Ionicons
                name="add-circle"
                size={44}
                style={styles.iconClose}
                onPress={() => setIsModalOPen(true)}
            />
            <FlatList
                data={blogsList}
                renderItem={({item}) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.item}
                        onPress={() => loadScene(item)}
                    >
                        <Image source={{uri: item.url}} style={gStyle.imgXs} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                        <Text style={styles.badge}>{item.category}</Text>
                    </TouchableOpacity>
                )}
            />
            <Modal visible={isModalOpen}>
                <Ionicons
                    name="close"
                    size={44}
                    style={styles.iconAdd}
                    onPress={() => setIsModalOPen(close)}
                />
                <View style={gStyle.main}>
                    <Text style={styles.title}>Add an article</Text>
                </View>
            </Modal>
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
        position: 'relative',
    },
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 10,
        color: '#3f3c3c',
    },
    description: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#3f3c3c',
    },
    badge: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: 'grey',
        padding: 5,
        backgroundColor: '#eeeeee',
        borderRadius: 8,
        backgroundColor: '#fff6f6',
    },
    iconAdd: {
        color: 'grey',
    },
    iconAdd: {
        color: 'grey',
    },
});
