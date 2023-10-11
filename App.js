import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import {gStyle} from './styles/style';

import Main from './pages/Main';
import Contacts from './pages/Contacts';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({
                    'mt-bold': require('./fonts/Montserrat-Bold.ttf'),
                    'mt-light': require('./fonts/Montserrat-Light.ttf'),
                });

                await new Promise((resolve) => setTimeout(resolve, 3000));
            } catch (error) {
                console.log('error: ', error);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <View style={gStyle.main} onLayout={onLayoutRootView}>
            <Main />
        </View>
    );
}
