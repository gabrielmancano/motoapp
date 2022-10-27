import React, { useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Octicons } from '@expo/vector-icons';

import { Card } from '../../components/Card';
import { data } from '../../data/data';

import {
    Container,
    Header,
    Title,
    FilterButton,
    Content,
} from './styles';

export function List() {

    const navigation = useNavigation();

    return (
        <Container>
            <StatusBar
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <Title>
                    TODAS AS MOTOS
                </Title>

                <FilterButton
                    onPress={() => navigation.navigate('Modal')}
                >
                    <Octicons
                        name='filter'
                        size={20}
                        color='black'
                    />
                </FilterButton>
            </Header>
            <Content>
                <ScrollView >
                    {
                        data
                            .sort((a, b) => a.cc - b.cc)
                            .map((item) =>
                                <Card
                                    name={item.nome}
                                    image={item.image}
                                    id={item.id}
                                    key={item.id}
                                />
                            )
                    }
                </ScrollView>
            </Content>
        </Container>

    )
}