import styled from "styled-components/native";
import { FlatList, ScrollView, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';



export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.colors.background_primary};
`;


export const Header = styled.View`
    width: 100%;
    height: 100px;

    flex-direction: row;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.background_secondary};

    margin-top: ${getStatusBarHeight() + 18}px;
    padding-right: 20px;
    padding-left: 20px;
`

export const Title = styled.Text`
    font-size: 19px;
    font-family: ${({ theme }) => theme.fonts.archivo_600};
`

export const Content = styled.ScrollView` 
    flex: 1;

    width: 100%;
    height: 100%;    
`;


export const FilterButton = styled(TouchableOpacity)`
    position: absolute;
    right: 0;

    width: 60px;
    height: 100%;

    align-items: center;
    justify-content: center;
`;

export const BackButton = styled(TouchableOpacity)`
    position: absolute;
    left: 0;

    width: 60px;
    height: 100%;

    align-items: center;
    justify-content: center;
`;