//import liraries
import {
  Box,
  Button,
  ButtonText,
  Image,
  Input,
  InputField,
  InputSlot,
  SafeAreaView,
  Text,
  View,
} from "@gluestack-ui/themed";
import React, { Component } from "react";
import useTokenStore from "@/zustand/useTokenStore";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

export default function SignIn() {
  const { setToken } = useTokenStore();
  const { push } = useRouter();
  const [loaded] = useFonts({
    NotoSerifTC: require("../assets/fonts/NotoSerifTC-Bold.ttf"),
    NotoSerifTCBold: require("../assets/fonts/NotoSerifTC-Bold.ttf"),
  });
  if (!loaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <SafeAreaView>
      <View px={40} bgColor="$white" h={"$full"}>
        <Box h={"$1/3"} justifyContent="center">
          <Image alt="" source={require("@/assets/LOGO.png")} />
        </Box>

        <Text fontSize={24} mb={36} style={{ fontFamily: "NotoSerifTCBold" }}>
          登入
        </Text>

        <Box>
          <Text mb={10}>手機號碼</Text>
          <Input>
            <InputField />
            <InputSlot></InputSlot>
          </Input>

          <Text mb={10} mt={20}>
            密碼
          </Text>
          <Input mb={37}>
            <InputField />
            <InputSlot></InputSlot>
          </Input>

          <Button
            h={"$16"}
            size="md"
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => {
              setToken("test-token");
            }}
          >
            <ButtonText>登入 </ButtonText>
          </Button>

          <Button
            size="md"
            mt={16}
            variant="solid"
            h={"$16"}
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => {
              //setToken("test-token");
              push("/signUp");
            }}
          >
            <ButtonText>註冊會員 </ButtonText>
          </Button>

          <Box
            w={"$full"}
            mt={20}
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            <Button
              bgColor="$white"
              size="sm"
              w={"$32"}
              isDisabled={false}
              isFocusVisible={false}
            >
              <Image
                alt=""
                source={require("@/assets/lock.png")}
                style={{ width: 20, height: 20, marginRight: 8 }} // 控制圖像大小
              />
              <ButtonText color="#435D5C">忘記密碼</ButtonText>
            </Button>
          </Box>
        </Box>
      </View>
    </SafeAreaView>
  );
}
