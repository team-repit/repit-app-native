import LogoText from "@/assets/images/logo_text_white.svg";
import Logo from "@/assets/images/logo_white.svg";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";

const SplashScreen = () => {
  const router = useRouter();

  // 로고 애니메이션
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.8)).current;

  // 텍스트 애니메이션
  const textOpacity = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(10)).current;

  // 배경 반짝 효과
  const backgroundAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // 로고 애니메이션 실행
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.spring(logoScale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // 로고 끝나면 텍스트 등장
      Animated.parallel([
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 800,
          delay: 200,
          useNativeDriver: true,
        }),
        Animated.timing(textTranslateY, {
          toValue: 0,
          duration: 800,
          delay: 200,
          useNativeDriver: true,
        }),
      ]).start();
    });

    // 배경 깜빡임 (무한 반복)
    Animated.loop(
      Animated.sequence([
        Animated.timing(backgroundAnim, {
          toValue: 0.85,
          duration: 1200,
          useNativeDriver: false,
        }),
        Animated.timing(backgroundAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: false,
        }),
      ])
    ).start();

    // 로그인 화면으로 전환
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [
    backgroundAnim,
    logoOpacity,
    logoScale,
    router,
    textOpacity,
    textTranslateY,
  ]);

  return (
    <AnimatedContainer style={{ opacity: backgroundAnim }}>
      <Gradient
        colors={[
          "rgba(75, 254, 69, 0.9)", // primary100
          "rgba(108, 187, 105, 0.94)", // primary200
          "rgb(62, 148, 92)", // primary300
          "rgba(4, 107, 81, 0.99)", // primary400
          "rgb(4, 97, 74)", // primary500
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <AnimatedLogoWrapper
          style={{ opacity: logoOpacity, transform: [{ scale: logoScale }] }}
        >
          <Logo width={200} height={200} />
        </AnimatedLogoWrapper>

        <AnimatedTextWrapper
          style={{
            opacity: textOpacity,
            transform: [{ translateY: textTranslateY }],
          }}
        >
          <LogoText width={160} height={40} />
        </AnimatedTextWrapper>
      </Gradient>
    </AnimatedContainer>
  );
};

export default SplashScreen;

const AnimatedContainer = styled(Animated.View)`
  flex: 1;
`;

const Gradient = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AnimatedLogoWrapper = styled(Animated.View)`
  align-items: center;
  justify-content: center;
  shadow-color: rgba(0, 0, 0, 0.3);
  shadow-offset: 0px 4px;
  shadow-opacity: 0.4;
  shadow-radius: 6px;
`;

const AnimatedTextWrapper = styled(Animated.View)`
  margin-top: 16px;
  align-items: center;
  shadow-color: rgba(0, 64, 0, 0.3);
  shadow-offset: 0px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 4px;
`;
