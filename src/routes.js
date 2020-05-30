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
                <AppStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <AppStack.Screen name="COVID-19" component={List}
                    options={{
                        headerTintColor: '#FFF',
                        headerStyle: { backgroundColor: '#4e79a7'}
                    } } />
                <AppStack.Screen name="Top 5" component={TopFive} 
                    options={{
                        headerTintColor: '#FFF',
                        headerStyle: { backgroundColor: '#4e79a7'}
                    } } />
                <AppStack.Screen name="Dicas" component={Tips} 
                    options={{
                        headerTintColor: '#FFF',
                        headerStyle: { backgroundColor: '#4e79a7'}
                    } } />
                <AppStack.Screen name="Detalhes" component={Country} 
                    options={{
                        headerTintColor: '#FFF',
                        headerStyle: { backgroundColor: '#4e79a7'}
                    } } />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
