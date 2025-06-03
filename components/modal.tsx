import theme from "@/theme";
import React from "react";
import { Modal, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import { Body_1_1, Body_1_2, SubHeadline_3_1 } from "./ui/typography";

interface CustomModalProps {
  modalText: string;
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  cancelText?: string;
  confirmText?: string;
}

const CustomModal = ({
  modalText,
  visible,
  onClose,
  onConfirm,
  cancelText = "취소",
  confirmText = "확인",
}: CustomModalProps) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <Overlay>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <ModalContainer>
              <ModalTextWrapper>
                <SubHeadline_3_1>{modalText}</SubHeadline_3_1>
              </ModalTextWrapper>
              <Divider />
              <ButtonRow>
                <ButtonWrapper onPress={onClose}>
                  <Body_1_2 color={theme.colors.black}>{cancelText}</Body_1_2>
                </ButtonWrapper>
                <VerticalDivider />
                <ButtonWrapper onPress={onConfirm}>
                  <Body_1_1 color={theme.colors.alert_primary}>
                    {confirmText}
                  </Body_1_1>
                </ButtonWrapper>
              </ButtonRow>
            </ModalContainer>
          </TouchableWithoutFeedback>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomModal;

// ----------- 스타일 정의 -----------

const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  width: 267px;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
`;

const ModalTextWrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 60px 10px 40px 10px;
`;

const Divider = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${theme.colors.gray300};
`;

const ButtonRow = styled.View`
  flex-direction: row;
`;

const ButtonWrapper = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

const VerticalDivider = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${theme.colors.gray300};
`;
