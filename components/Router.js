import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Main from '../pages/Main';
import FullInfo from '../pages/FullInfo';

const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{
                        title: 'Main page',
                        headerStyle: {
                            backgroundColor: '#0f030e',
                        },
                        headerTitleStyle: {
                            fontWeight: 'light',
                            color: '#d3bfda',
                        },
                    }}
                />
                <Stack.Screen
                    name="FullInfo"
                    component={FullInfo}
                    options={{
                        title: 'Contact page',
                        headerStyle: {
                            backgroundColor: '#0f030e',
                        },
                        headerTitleStyle: {
                            fontWeight: 'light',
                            color: '#d3bfda',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
