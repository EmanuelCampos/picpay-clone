import React from 'react';


import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import Suggestions from '../../components/Suggestions'
import Activities from '../../components/Activities'
import Tips from '../../components/Tips'
import Banner from '../../components/Banner'

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './styles'

export default function Home() {
    return (
        <Wrapper>
            <Container>
            <Header>
            <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c68e"/>

            <BalanceContainer>
                <BalanceTitle>Meu Saldo</BalanceTitle>
                <Balance>R$ 5000,00</Balance>
            </BalanceContainer>

            <AntDesign name="gift" size={30} color="#10c68e"/>

            </Header>

            <Suggestions/>
            <Activities/>
            <Tips/>
            <Banner />
            </Container>
        </Wrapper>
    )
}