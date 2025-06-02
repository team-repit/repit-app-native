import TopBar from "@/components/topbar";
import {
  Body_1_1,
  Body_1_2,
  Caption_1_2,
  Headline_1,
} from "@/components/ui/typography";
import theme from "@/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  AlertMesseageWrapper,
  AlertTitle,
  Input,
  InputGroup,
  WithdrawButton,
  WithdrawContainer,
} from "./style";

const Withdraw = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isValid = password && confirmPassword && password === confirmPassword;

  const handleWithdraw = () => {
    if (!isValid) return;
    Alert.alert("탈퇴 완료", "정상적으로 회원 탈퇴되었습니다.", [
      {
        text: "확인",
        onPress: () => {
          router.replace("/login");
        },
      },
    ]);
  };

  return (
    <>
      <TopBar text="회원탈퇴" />
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
      >
        <WithdrawContainer>
          <AlertMesseageWrapper>
            <AlertTitle>
              <Headline_1 style={{ textAlign: "center" }}>
                잠깐! 재가입 시 이용내역은
              </Headline_1>
              <Headline_1
                color={theme.colors.alert_primary}
                style={{ textAlign: "center" }}
              >
                복구되지 않아요
              </Headline_1>
            </AlertTitle>
            <Body_1_2 style={{ textAlign: "center" }}>
              {
                "회원 탈퇴 즉시 회원 정보, 운동 기록 등의 \n 모든 데이터가 삭제됩니다."
              }
            </Body_1_2>
          </AlertMesseageWrapper>
          <InputGroup>
            <Body_1_1>비밀번호</Body_1_1>
            <Input
              placeholder="비밀번호 입력"
              placeholderTextColor={theme.colors.gray400}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </InputGroup>
          <InputGroup>
            <Body_1_1>비밀번호 확인</Body_1_1>
            <Input
              placeholder="비밀번호 확인"
              placeholderTextColor={theme.colors.gray400}
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </InputGroup>
          {password && confirmPassword && password !== confirmPassword && (
            <Caption_1_2 color={theme.colors.alert_primary}>
              비밀번호가 일치하지 않습니다.
            </Caption_1_2>
          )}

          <WithdrawButton
            disabled={!isValid}
            onPress={handleWithdraw}
            isValid={isValid}
          >
            <Body_1_1 color="#fff">탈퇴하기</Body_1_1>
          </WithdrawButton>
        </WithdrawContainer>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Withdraw;
