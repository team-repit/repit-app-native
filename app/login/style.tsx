import styled from "styled-components/native";

interface ButtonProps {
  bgColor?: string;
}

export const LoginContainer = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  padding: 0 20px;
`;

export const TopSpace = styled.View`
  flex: 1.735;
`;

export const BottomSpace = styled.View`
  flex: 1;
`;

export const LogoWrapper = styled.View`
  align-items: center;
`;

export const LogoTextWrapper = styled.View`
  margin-top: 14px;
  margin-bottom: 91px;
`;

export const LoginButton = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props: ButtonProps) => props.bgColor || "#000000"};
  border-radius: 3px;
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  margin-bottom: 10px;
`;
