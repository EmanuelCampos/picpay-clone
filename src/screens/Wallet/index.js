import React, { useState } from 'react';

import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { 
    Wrapper, 
    Header, 
    HeaderContainer, 
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    CardBody,
    CardFooter,
    CardFooterText,
    UseTicketButton,
    UseTicketText
} from './styles'

import creditCard from '../../images/credit-card.png'

export default function Wallet() {
    const [ isVisible, setIsVisible ] = useState(true);
    const [ useBalance, setUseBalance ] = useState(true);

    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState)
    }

    function handleToggleUseBalance() {
        setUseBalance((prevState) => !prevState)
    }

    return (
    <Wrapper>
        <Header 
        colors={
            useBalance ? ['#52e78c', '#1AB563'] : ['#d3d3d3', '#868686']
        }
        >
            <HeaderContainer>
                <Title>Saldo PicPay</Title>

                <BalanceContainer>
                    <Value>
                        R$ <Bold>{isVisible ? '5000,00' : '----'}</Bold>
                    </Value>

                    <EyeButton onPress={handleToggleVisibility}>
                        <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
                    </EyeButton>

                </BalanceContainer>

                <Info>Seu saldo esta rendendo 100% do CDI</Info>

                <Actions>
                    <Action>
                        <MaterialCommunityIcons name="cash" size={28} color="#FFF" />
                        <ActionLabel>Adicionar</ActionLabel>
                    </Action>

                    <Action>
                        <FontAwesome name="bank" size={20} color="#FFF" />
                        <ActionLabel>Adicionar</ActionLabel>
                    </Action>

                </Actions>
            </HeaderContainer>
        </Header>

        <UseBalance>
            <UseBalanceTitle>
                Usar saldo ao pagar
            </UseBalanceTitle>

                <Switch
                value={useBalance}
                onValueChange={handleToggleUseBalance}
                />
        </UseBalance>

        <PaymentMethods>
            <PaymentMethodsTitle>
                Formas de pagamento
            </PaymentMethodsTitle>

            <Card>
                <CardBody>
                    <CardDetails>
                        <CardTitle>
                            Cadastre seu cartão de crédito
                        </CardTitle>
                        <CardInfo>
                            Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay
                        </CardInfo>
                    </CardDetails>

                <Img source={creditCard} resizeMode="contain" />

                </CardBody>

                <CardFooter>
                    <AntDesign name="pluscircleo" size={30} color="#0DB060" />
                    <CardFooterText>Adicionar cartão de crédito</CardFooterText>
                </CardFooter>
            </Card>

            <UseTicketButton>
                <MaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060"/>
                <UseTicketText>Usar código promocional</UseTicketText>
            </UseTicketButton>
        </PaymentMethods>

    </Wrapper>
    )
}