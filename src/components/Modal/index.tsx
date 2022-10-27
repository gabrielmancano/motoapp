import React, { useState } from 'react';
import { Alert, StatusBar, View } from 'react-native';
import { useTheme } from 'styled-components';

import { MaterialIcons } from '@expo/vector-icons';

import {
    ModalContainer,
    ModalHeader,
    ModalContent,
    ModalContentList,
    ModalContentText,
    ModalFilterOptionButtonContainer,
    ModalFilterOptionButton,
    ModalFilterOptionButtonText,
    ModalContentButton,
    ModalContentButtonText,
    ModalFooter,
    ModalButton,
    ModalButtonText,
    BackButton
} from './styles';

import { useNavigation } from '@react-navigation/native';


interface Props {
    isModalActive: boolean;
    closeModal: () => void;
}

export function Modal({ isModalActive, closeModal }: Props) {
    const theme = useTheme();

    const navigation = useNavigation();

    const [filterOption, setFilterOption] = useState('fabricante');

    const [cilindradas, setCilindradas] = useState('');
    const [fabricante, setFabricante] = useState('');
    const [categoria, setCategoria] = useState('');

    const [modalActive, setModalActive] = useState(true);


    const filter = () => {
        if (
            !cilindradas && filterOption === 'cilindrada' ||
            !fabricante && filterOption === 'fabricante' ||
            !categoria && filterOption === 'categoria'
        ) {
            Alert.alert("ERRO", "SELECIONE UMA OPÇÃO")
            return;
        }

        navigation.navigate('FilteredList', {
            filterOption: filterOption,
            cilindradas: cilindradas,
            fabricante: fabricante,
            categoria: categoria,
        })
    }

    return (
        <ModalContainer>
            <StatusBar
                barStyle='dark-content'
                backgroundColor='transparent'
                translucent
            />
            <ModalHeader>
                <BackButton
                    onPress={() => navigation.goBack()}
                >
                    <MaterialIcons
                        name='chevron-left'
                        size={24}
                        color={theme.colors.text}
                    />
                </BackButton>
            </ModalHeader>


            <ModalContent>
                <ModalContentList>
                    <ModalContentText>
                        FILTRAR POR:
                    </ModalContentText>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <ModalFilterOptionButtonContainer>
                            <ModalFilterOptionButton
                                onPress={() => setFilterOption('cilindrada')}
                                isPressed={filterOption === 'cilindrada'}
                            >
                                <ModalFilterOptionButtonText>
                                    CILINDRADA
                                </ModalFilterOptionButtonText>
                            </ModalFilterOptionButton>

                            <ModalFilterOptionButton
                                onPress={() => setFilterOption('fabricante')}
                                isPressed={filterOption === 'fabricante'}
                            >
                                <ModalFilterOptionButtonText>
                                    FABRICANTE
                                </ModalFilterOptionButtonText>
                            </ModalFilterOptionButton>

                            <ModalFilterOptionButton
                                onPress={() => setFilterOption('categoria')}
                                isPressed={filterOption === 'categoria'}
                            >
                                <ModalFilterOptionButtonText>
                                    CATEGORIA
                                </ModalFilterOptionButtonText>
                            </ModalFilterOptionButton>
                        </ModalFilterOptionButtonContainer>

                        {filterOption === 'cilindrada' && (
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <ModalContentButton
                                    onPress={() => setCilindradas('alta')}
                                    isPressed={cilindradas === 'alta'}
                                >
                                    <ModalContentButtonText>
                                        ALTA
                                    </ModalContentButtonText>
                                </ModalContentButton>

                                <ModalContentButton
                                    onPress={() => setCilindradas('baixa')}
                                    isPressed={cilindradas === 'baixa'}
                                >
                                    <ModalContentButtonText>
                                        BAIXA
                                    </ModalContentButtonText>
                                </ModalContentButton>
                            </View>
                        )}

                        {filterOption === 'fabricante' && (
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <ModalContentButton
                                    onPress={() => setFabricante('bmw')}
                                    isPressed={fabricante === 'bmw'}
                                >
                                    <ModalContentButtonText>
                                        BMW
                                    </ModalContentButtonText>
                                </ModalContentButton>

                                <ModalContentButton
                                    onPress={() => setFabricante('honda')}
                                    isPressed={fabricante === 'honda'}
                                >
                                    <ModalContentButtonText>
                                        HONDA
                                    </ModalContentButtonText>
                                </ModalContentButton>

                                <ModalContentButton
                                    onPress={() => setFabricante('suzuki')}
                                    isPressed={fabricante === 'suzuki'}
                                >
                                    <ModalContentButtonText>
                                        SUZUKI
                                    </ModalContentButtonText>
                                </ModalContentButton>

                                <ModalContentButton
                                    onPress={() => setFabricante('yamaha')}
                                    isPressed={fabricante === 'yamaha'}
                                >
                                    <ModalContentButtonText>
                                        YAMAHA
                                    </ModalContentButtonText>
                                </ModalContentButton>
                            </View>
                        )}

                        {filterOption === 'categoria' && (
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <ModalContentButton
                                    onPress={() => setCategoria('city')}
                                    isPressed={categoria === 'city'}
                                >
                                    <ModalContentButtonText>
                                        CITY
                                    </ModalContentButtonText>
                                </ModalContentButton>

                                <ModalContentButton
                                    onPress={() => setCategoria('naked')}
                                    isPressed={categoria === 'naked'}
                                >
                                    <ModalContentButtonText>
                                        NAKED
                                    </ModalContentButtonText>
                                </ModalContentButton>

                                <ModalContentButton
                                    onPress={() => setCategoria('trail')}
                                    isPressed={categoria === 'trail'}
                                >
                                    <ModalContentButtonText>
                                        TRAIL
                                    </ModalContentButtonText>
                                </ModalContentButton>

                                <ModalContentButton
                                    onPress={() => setCategoria('esportiva')}
                                    isPressed={categoria === 'esportiva'}
                                >
                                    <ModalContentButtonText>
                                        ESPORTIVA
                                    </ModalContentButtonText>
                                </ModalContentButton>

                            </View>
                        )}


                    </View>

                </ModalContentList>
            </ModalContent>

            <ModalFooter>
                <ModalButton
                    onPress={filter}
                >
                    <ModalButtonText>Filtrar</ModalButtonText>
                </ModalButton>
            </ModalFooter>
        </ModalContainer>
    )
}