import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


import {
    Container,
    Content,
    ScrollViewContainer,
    Description,
    DescriptionTitle,
    DescriptionText,
    Specifications,
    SpecificationsTitle,
    SpecificationsText,
    Photo,
    PhotoContainer,
    Header,
    Text,
    BackButton,
    FilterButton
} from './styles';

export function Details({ route }) {
    const navigation = useNavigation();
    const theme = useTheme();

    const item = route.params.item;

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
                <Text>
                    {item.nome}
                </Text>

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

            <ScrollViewContainer>
                <PhotoContainer>
                    <Photo
                        source={item.image}
                        style={{ width: 350, height: 350 }}
                        resizeMode='center' />
                </PhotoContainer>

                <Content>
                    <Description>
                        <DescriptionTitle>
                            DESCRIÇÃO:
                        </DescriptionTitle>

                        <DescriptionText>
                            {item.descricao}
                        </DescriptionText>

                    </Description>

                    <Specifications>
                        <SpecificationsTitle>
                            ESPECIFICAÇÕES:
                        </SpecificationsTitle>

                        <SpecificationsText>
                            Fabricante: {item.marca}
                        </SpecificationsText>

                        <SpecificationsText>
                            Cilindradas: {item.cc}cc
                        </SpecificationsText>

                        <SpecificationsText>
                            Categoria: {item.categoria}
                        </SpecificationsText>

                    </Specifications>
                    {/* 
                    <Button
                        title="Comprar"
                        color='#169016'
                    />

                    <Button
                        color="#FF7F7F"
                        title="Voltar"
                        onPress={() => navigation.navigate('List')}
                    /> */}
                </Content>
            </ScrollViewContainer>

        </Container>
    )
}