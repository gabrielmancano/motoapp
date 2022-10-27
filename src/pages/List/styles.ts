import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { DataProps } from '../../data/data';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    height: 100px;

    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.background_secondary};

    margin-top: ${getStatusBarHeight() + 18}px;
    padding: 20px;
`

export const BackButton = styled(TouchableOpacity)`
    flex-direction: row;
    position: absolute;
    left: 15px;
`;

export const FilterButton = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 100%;
`;


export const Title = styled.Text`
    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.archivo_600};
`


export const Content = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;

`;


export const ItemsList = styled(FlatList as new () => FlatList<DataProps>).attrs({
    contentContainerStyle: {
        width: '100%',
        marginTop: 5,
        paddingBottom: 5,
    }
})`
`;
