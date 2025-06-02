import theme from "@/theme";
import styled from "styled-components/native";

interface isPasswordValid {
  isValid: boolean;
}

export const WithdrawContainer = styled.View`
  flex: 1;
  padding: 0px 20px;
  background-color: ${theme.colors.gray50};
`;

export const AlertMesseageWrapper = styled.View`
  padding-top: 112px;
  margin-top: 92px;
  margin-bottom: 54px;
  flex-direction: column;
  gap: 18px;
  align-items: center;
`;

export const AlertTitle = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const InputGroup = styled.View`
  gap: 9px;
  margin-bottom: 12px;
`;

export const Input = styled.TextInput`
  height: 42px;
  background-color: #ffffff;
  border: 1px solid ${theme.colors.gray200};
  border-radius: 5px;
  padding: 0 10px;
`;

export const WithdrawButton = styled.TouchableOpacity<isPasswordValid>`
  background-color: ${({ isValid }: isPasswordValid) =>
    isValid ? theme.colors.alert_primary : theme.colors.gray300};
  border-radius: 5px;
  height: 48px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 40px;
`;
