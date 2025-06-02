import BackIcon from "@/assets/images/arrow_back.svg";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { SubHeadline_3_1 } from "./ui/typography";

interface TopBarProps {
  text: string;
}
const TopBar = ({ text }: TopBarProps) => {
  const router = useRouter();
  const handleBackButtonClick = () => {
    router.replace("/login");
  };

  return (
    <SafeAreaWrapper edges={["top"]}>
      <TopBarContainer>
        <BackIconWrapper onPress={handleBackButtonClick}>
          <BackIcon width={24} height={24} />
        </BackIconWrapper>
        <SubHeadline_3_1>{text}</SubHeadline_3_1>
      </TopBarContainer>
    </SafeAreaWrapper>
  );
};

export default TopBar;

const SafeAreaWrapper = styled(SafeAreaView)`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100; /* 다른 요소보다 위에 */
  background-color: #ffffff;
`;

const TopBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 121px;
  padding: 20px 10px;
`;

const BackIconWrapper = styled.TouchableOpacity``;
