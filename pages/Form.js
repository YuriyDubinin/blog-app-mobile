import React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';
import {Formik} from 'formik';

import {gStyle} from '../styles/style';

export default function Form({addArticle}) {
    return (
        <View style={gStyle.main}>
            <Formik
                initialValues={{
                    category: '',
                    title: '',
                    description: '',
                    fullText: '',
                    img: '',
                }}
                onSubmit={(values) => addArticle(values)}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            value={props.values.category}
                            placeholder="Add category"
                            onChangeText={props.handleChange('category')}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.title}
                            placeholder="Add title"
                            onChangeText={props.handleChange('title')}
                        />
                        <TextInput
                            style={styles.input}
                            multiline
                            value={props.values.description}
                            placeholder="Add description"
                            onChangeText={props.handleChange('description')}
                        />
                        <TextInput
                            style={styles.input}
                            multiline
                            value={props.values.fullText}
                            placeholder="Add full text"
                            onChangeText={props.handleChange('fullText')}
                        />
                        <TextInput
                            style={styles.input}
                            value={props.values.img}
                            placeholder="Add img path"
                            onChangeText={props.handleChange('img')}
                        />
                        <Button title="Submit" onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderColor: 'silver',
        borderRadius: 8,
    },
});
