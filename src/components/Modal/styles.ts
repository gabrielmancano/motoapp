import styled from "styled-components/native";
import { FlatList, ScrollView, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';

import { DataProps } from '../../data/data';

interface ButtonProps extends TouchableOpacityProps {
    isPressed?: boolean;
}


export const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_primary};

`;

export const ModalHeader = styled.View`
    width: 100%;

    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    margin-top: ${getStatusBarHeight() + 18}px;
    padding-left: 20px;
`;

export const ModalContent = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
`

export const ModalContentList = styled(ScrollView)` 

`;

export const ModalContentText = styled.Text`
    width: 90%;

    text-align: left;

    
    margin-left: 20px;

    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.archivo_500};

    padding: 15px;
`;

export const ModalContentButton = styled(TouchableOpacity)<ButtonProps>`
    height: 40px;
    width: 80%;

    background-color: ${({ theme, isPressed }) => isPressed ? '#ffc04c' : '#fff'};


    justify-content: center;
    align-items: center;

    margin-bottom: 6px;

    border-radius: 7px;
`;

export const ModalContentButtonText = styled.Text`
    font-family: ${({theme}) => theme.fonts.archivo_500};
`;

export const ModalFooter = styled.View`
    justify-content: center;
    align-items: center;

    height: 80px;
    width: 90%;
`

export const ModalButton = styled(TouchableOpacity)` 
justify-content: center;
    align-items: center;

    height: 60px;
    width: 100%;

    border-radius: 17px;

    background-color: #e8b048;
    margin-bottom: 9px;

    border: 2px solid #fff;

`;
export const ModalButtonText = styled.Text` 
    font-family: ${({theme}) => theme.fonts.archivo_600};
    font-size: 19px;

    color: white;
`


export const BackButton = styled(TouchableOpacity)`

`;


export const ModalFilterOptionButtonContainer = styled.View` 
    flex-direction: row;
    justify-content: space-around;

    width: 95%;
    height: 35px;

    border-radius: 10px;

    margin-bottom: 25px;
`;

export const ModalFilterOptionButton = styled(TouchableOpacity)<ButtonProps>` 
    background-color: #fff;

    opacity: ${({ theme, isPressed }) => isPressed ? '1' : '0.3'};;

    height: 100%;
    width: 31%;

    justify-content: center;
    align-items: center;

    border-radius: 8px;
    border-width: 2px;
    border-color: ${({ theme, isPressed }) => isPressed ? '#ffc04c' : 'transparent'};

`;


export const ModalFilterOptionButtonText = styled.Text`
    font-size: 15px;
    font-family: ${({theme}) => theme.fonts.inter_500};

`

export const FilterButton = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 100%;
`;
