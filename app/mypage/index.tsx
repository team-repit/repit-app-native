import ProfileImage from "@/assets/images/default_profile.svg";
import KakaoIcon from "@/assets/images/kakao.svg";
import NaverIcon from "@/assets/images/naver.svg";
import CustomModal from "@/components/modal";
import TopBar from "@/components/topbar";
import { Body_1_1, Body_1_2, Headline_1 } from "@/components/ui/typography";
import theme from "@/theme";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import {
  Button,
  ButtonContainer,
  EmailContainer,
  EmailInput,
  LoginIconWrapper,
  MyPageContainer,
  ProfileContainer,
  ProfileImageWrapper,
} from "./style";

const MyPage = () => {
  const router = useRouter();
  const { type } = useLocalSearchParams();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleWithDrawButtonPress = () => {
    // 회원 탈퇴로 이동 -> 나중에 로그인 계정 알 필요 있을까?
    router.replace("/withdraw");
  };

  const handleLogoutPress = () => {
    setIsModalVisible(true); // ✅ 모달 표시
  };

  const confirmLogout = () => {
    setIsModalVisible(false);
    Alert.alert("로그아웃 완료", "정상적으로 로그아웃되었습니다.", [
      {
        text: "확인",
        onPress: () => {
          // 추후 실제 로그아웃 처리 로직 삽입
          router.replace("/login");
        },
      },
    ]);
  };

  return (
    <>
      <TopBar text="마이페이지" />
      <MyPageContainer>
        <ProfileContainer>
          <ProfileImageWrapper>
            <ProfileImage width={81} height={81} />
            <LoginIconWrapper loginType={type}>
              {type === "kakao" && <KakaoIcon width={18} height={18} />}
              {type === "naver" && <NaverIcon width={18} height={18} />}
            </LoginIconWrapper>
          </ProfileImageWrapper>
          <Headline_1>김태현</Headline_1>
          <EmailContainer>
            <Body_1_1>이메일</Body_1_1>
            <EmailInput editable={false} value="user@example.com" />
          </EmailContainer>
        </ProfileContainer>
        <ButtonContainer>
          <Button onPress={handleLogoutPress} bgColor={theme.colors.gray900}>
            <Body_1_1 color="#FFFFFF">로그아웃</Body_1_1>
          </Button>
          <Button
            onPress={handleWithDrawButtonPress}
            bgColor={theme.colors.white}
            hasBorder={true}
          >
            <Body_1_2 color={theme.colors.gray600}>회원탈퇴</Body_1_2>
          </Button>
        </ButtonContainer>
      </MyPageContainer>
      <CustomModal
        modalText="로그아웃 하시겠습니까?"
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={confirmLogout}
        cancelText="취소"
        confirmText="로그아웃"
      />
    </>
  );
};

export default MyPage;
