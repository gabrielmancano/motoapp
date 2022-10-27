import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { Card } from '../../components/Card';
import { data } from '../../data/data';

import {
    Container,
    Header,
    Title,
    Content,
    FilterButton,
    BackButton
} from './styles';

export function FilteredList({ route }) {
    const navigation = useNavigation();
    const theme = useTheme();

    const prop = route.params;


    const filterOption = prop.filterOption;
    const cilindradas = prop.cilindradas;
    const fabricante = prop.fabricante;
    const categoria = prop.categoria;

    return (
        <Container>
            <StatusBar
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />

            <Header>
                <BackButton
                    onPress={() => navigation.navigate('List')}
                >
                    <MaterialIcons
                        name='chevron-left'
                        size={24}
                        color={theme.colors.text}
                    />
                </BackButton>

                <Title>
                    {filterOption === 'cilindrada' && `${cilindradas.toUpperCase()} CILINDRADA`}
                    {filterOption === 'fabricante' && `${fabricante.toUpperCase()}`}
                    {filterOption === 'categoria' && `${categoria.toUpperCase()}`}
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
                {
                    filterOption === 'fabricante' && data
                        .filter(
                            (item) => item.marca.toLowerCase() === fabricante.toLowerCase())
                        .map(
                            (item) => (
                                <Card
                                    id={item.id}
                                    image={item.image}
                                    name={item.nome}
                                    key={item.id}
                                />
                            )
                        )
                }

                {
                    filterOption === 'categoria' && data
                        .filter(
                            (item) => item.categoria.toLowerCase()
                                .includes(categoria.toLowerCase()))
                        .map(
                            (item) => (
                                <Card
                                    id={item.id}
                                    image={item.image}
                                    name={item.nome}
                                    key={item.id}
                                />
                            ))
                }

                {
                    filterOption === 'cilindrada' && data
                        .filter(
                            (item) => item.cilindrada.toLowerCase() === cilindradas.toLowerCase())
                        .map(
                            (item) => (
                                <Card
                                    id={item.id}
                                    image={item.image}
                                    name={item.nome}
                                    key={item.id}
                                />
                            )
                        )
                }
            </Content>
        </Container>
    )
}