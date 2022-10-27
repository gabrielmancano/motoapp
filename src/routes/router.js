import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Details } from '../pages/Details';
import { List } from '../pages/List';
import { FilteredList } from '../pages/FilteredList';
import { Modal } from '../components/Modal';

const Stack = createStackNavigator();

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='List'
            >

                <Stack.Screen
                    name='Details'
                    component={Details}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='List'
                    component={List}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='FilteredList'
                    component={FilteredList}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Modal'
                    component={Modal}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}