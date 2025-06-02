import theme from "@/theme";
import styled from "styled-components/native";

interface ButtonProps {
  bgColor?: string;
  hasBorder?: boolean;
}

interface LoginIconWrapperProps {
  loginType?: "kakao" | "naver";
}

export const MyPageContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.gray50};
  padding: 0px 20px;
`;

export const ProfileContainer = styled.View`
  align-items: center;
  padding-top: 64px;
  margin-top: 146px;
  margin-bottom: 245px;
`;

export const ProfileImageWrapper = styled.View`
  position: relative;
  width: 81px;
  height: 81px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;
`;

export const LoginIconWrapper = styled.View<LoginIconWrapperProps>`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(3px, 3px);
  width: 26px;
  height: 26px;
  background-color: ${(props: LoginIconWrapperProps) =>
    props.loginType === "naver" ? "#00C73C" : "#FAE407"};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const EmailContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-top: 31px;
`;

export const EmailInput = styled.TextInput`
  flex: 1;
  color: ${theme.colors.gray400};
  height: 42px;
  padding: 10px;
  background-color: ${theme.colors.gray50};
  border-radius: 5px;
  border: 1px solid ${theme.colors.gray300};
`;

export const ButtonContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  background-color: ${(props: ButtonProps) => props.bgColor};
  border-radius: 5px;
  ${(props: ButtonProps) =>
    props.hasBorder && `border: 1px solid ${theme.colors.gray400};`}
`;
