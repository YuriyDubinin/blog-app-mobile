import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import BlogsList from '../pages/BlogsList';
import BlogPage from '../pages/BlogPage';

const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="BlogsList"
                    component={BlogsList}
                    options={{
                        title: 'Fresh blogs',
                        headerStyle: {
                            backgroundColor: '#fff6f6',
                            borderBottomWidth: 0.7
                        },
                        headerTitleStyle: {
                            fontWeight: 'light',
                            color: '#3f3c3c',
                        },
                    }}
                />
                <Stack.Screen
                    name="BlogPage"
                    component={BlogPage}
                    options={{
                        title: 'Blog page',
                        headerStyle: {
                            backgroundColor: '#fff6f6',
                            borderBottomWidth: 0.7
                        },
                        headerTitleStyle: {
                            fontWeight: 'light',
                            color: '#3f3c3c',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
