import styled from 'styled-components/native';
import { Image, TouchableOpacity } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    
    background-color: ${({theme}) => theme.colors.background_primary};
`

export const ScrollViewContainer = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 0,
        alignItems: 'center',
    },
    showsVerticalScrollIndicator: false,
})`
`;

export const Content = styled.View`
    width: 100%;
    padding: 15px;
`;

export const Description = styled.View`
    width: 100%;
`;

export const DescriptionTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.inter_500};
    font-size: 16px;

    margin-bottom: 2px;
`;

export const DescriptionText = styled.Text`
    font-family: ${({theme}) => theme.fonts.inter_400};
    font-size: 14px;

    text-align: justify;

    margin-bottom: 5px;

    color: ${({ theme }) => theme.colors.text};

`;

export const Specifications = styled.View`
    width: 100%;

    margin-bottom: 50px;
`;


export const SpecificationsTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.inter_500};
    font-size: 16px;

    text-align: justify;

    margin-top: 16px;
    margin-bottom: 2px;
`;

export const SpecificationsText = styled.Text`
    font-family: ${({theme}) => theme.fonts.inter_400};
    font-size: 14px;

    color: ${({ theme }) => theme.colors.text};

    margin-bottom: 3px;
`;

export const Photo = styled(Image)`
`;

export const PhotoContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    
    background: white;
`



export const Header = styled.View`
    width: 100%;
    height: 100px;

    flex-direction: row;

    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.colors.background_secondary};

    margin-top: ${getStatusBarHeight() + 18}px;
    padding: 20px;
`

export const Text = styled.Text`
    font-size: 20px;
    font-family: ${({theme}) => theme.fonts.archivo_600};
`


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