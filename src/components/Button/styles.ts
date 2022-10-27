import styled from "styled-components/native";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    color: string;
}


export const Container = styled(TouchableOpacity)<ButtonProps>`
    justify-content: center;
    align-items: center;

    height: 60px;
    width: 100%;

    border-radius: 17px;

    background-color: ${({theme, color}) => color ? color : theme.colors.success};
    margin-bottom: 9px;
`

export const Text = styled.Text`
    font-family: ${({theme}) => theme.fonts.archivo_600};
    font-size: 19px;

    color: white;
`;