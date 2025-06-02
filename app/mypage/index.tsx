import ProfileImage from "@/assets/images/default_profile.svg";
import KakaoIcon from "@/assets/images/kakao.svg";
import NaverIcon from "@/assets/images/naver.svg";
import TopBar from "@/components/topbar";
import { Body_1_1, Body_1_2, Headline_1 } from "@/components/ui/typography";
import theme from "@/theme";
import { useLocalSearchParams, useRouter } from "expo-router";
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

  const handleWithDrawButtonClick = () => {
    // 회원 탈퇴로 이동 -> 나중에 로그인 계정 알 필요 있을까?
    router.replace("/withdraw");
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
          <Button bgColor={theme.colors.gray900}>
            <Body_1_1 color="#FFFFFF">로그아웃</Body_1_1>
          </Button>
          <Button
            onPress={handleWithDrawButtonClick}
            bgColor={theme.colors.white}
            hasBorder={true}
          >
            <Body_1_2 color={theme.colors.gray600}>회원탈퇴</Body_1_2>
          </Button>
        </ButtonContainer>
      </MyPageContainer>
    </>
  );
};

export default MyPage;
