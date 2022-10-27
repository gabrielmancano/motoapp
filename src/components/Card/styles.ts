import styled from 'styled-components/native';
import { Image, TouchableOpacity } from 'react-native';

export const Container = styled.View`
    flex: 1;

    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_primary};



`;

export const Content = styled(TouchableOpacity)`
    width: 90%;
    background-color: white;

    justify-content: center;
    align-items: center;

    margin-top: 10px;
    margin-bottom: 5px;
    padding: 7px;

    border-radius: 14px;
`;

export const Title = styled.Text`
    color: #000;

    font-family: ${({theme}) => theme.fonts.archivo_600};

    font-size: 18px;
`;

export const ImageContainer = styled.View`
    width: 100%;

    justify-content: center;
    align-items: center;

    margin-bottom: 15px;
    height: 330px;

    background-color: #fff;
`;

export const Photo = styled(Image)`
`;