import Logo from "@/assets/images/logo.svg";
import LogoText from "@/assets/images/logo_text.svg";
import React from "react";
import styled from "styled-components/native";

export default function HomeScreen() {
  return (
    <Container>
      <Logo width={195} height={195} />
      <LogoTextWrapper>
        <LogoText />
      </LogoTextWrapper>
      <Button>
        <ButtonText>로그인</ButtonText>
      </Button>
      <Button>
        <ButtonText>회원가입</ButtonText>
      </Button>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

const LogoTextWrapper = styled.View`
  margin-top: 16px;
  margin-bottom: 32px;
`;

const Button = styled.TouchableOpacity`
  background-color: #000000;
  padding: 12px 32px;
  border-radius: 8px;
  margin-bottom: 16px;
  width: 100%;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;
