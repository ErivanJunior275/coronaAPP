import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import List from './pages/List';
import Country from './pages/Country';
import TopFive from './pages/TopFive';
import Tips from './pages/Tips';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator >
                <AppStack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <AppStack.Screen name="COVID-19" component={List} />
                <AppStack.Screen name="TopFive" component={TopFive} />
                <AppStack.Screen name="Dicas" component={Tips} />
                <AppStack.Screen name="Detalhes" component={Country} /> 
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

// screenOptions={{ headerShown: false }}