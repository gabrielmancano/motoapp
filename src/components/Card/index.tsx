import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { data } from '../../data/data';

import { Container, Content, ImageContainer, Photo, Title } from './styles';

interface Props {
    name: string;
    image: string;
    id: number;
}

export function Card({ name, image, id }: Props) {

    const navigation = useNavigation();

    const selectItem = () => {
       const itemFound = data.find((item) => item.id === id);

       navigation.navigate('Details', {
        item: itemFound
       })
    }

    return (
        <Container>
            <Content
                onPress={selectItem}
            >
                <Title>
                    {name}
                </Title>
                
                <ImageContainer>
                    <Photo
                        source={image}
                        style={{ width: 300, height: 300 }}
                        resizeMode='center'
                    />
                </ImageContainer>
            </Content>
        </Container>
    )
}