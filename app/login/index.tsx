import KakaoIcon from "@/assets/images/kakao.svg";
import Logo from "@/assets/images/logo.svg";
import LogoText from "@/assets/images/logo_text.svg";
import NaverIcon from "@/assets/images/naver.svg";
import { Body_1_1 } from "@/components/ui/typography";
import { useRouter } from "expo-router";
import React from "react";
import {
  BottomSpace,
  LoginButton,
  LoginContainer,
  LogoTextWrapper,
  LogoWrapper,
  TopSpace,
} from "./style";

export default function HomeScreen() {
  const router = useRouter();

  const handleLoginButtonClick = () => {
    // 로그인 성공 로직 처리 후 홈으로 이동 -> 추후 api 연결
    router.replace("/home");
  };
  return (
    <LoginContainer>
      <TopSpace />
      <LogoWrapper>
        <Logo width={195} height={195} />
        <LogoTextWrapper>
          <LogoText />
        </LogoTextWrapper>
      </LogoWrapper>

      <LoginButton bgColor="#00C73C" onPress={handleLoginButtonClick}>
        <NaverIcon />
        <Body_1_1 color="#FFFFFF">네이버 계정으로 로그인 하기</Body_1_1>
      </LoginButton>
      <LoginButton bgColor="#FAE407" onPress={handleLoginButtonClick}>
        <KakaoIcon />
        <Body_1_1 color="#000000">카카오 계정으로 로그인 하기</Body_1_1>
      </LoginButton>
      <BottomSpace />
    </LoginContainer>
  );
}
