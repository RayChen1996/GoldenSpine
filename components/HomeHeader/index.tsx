//import liraries
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "@gluestack-ui/themed";
import { useFonts } from "expo-font";
import React, { Component } from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
export interface HomeHeaderProps {
  title: string;
  onPress?: () => void;
}
export function HomeHeader({ title }: HomeHeaderProps) {
  const [loaded] = useFonts({
    NotoSerifTC: require("../../assets/fonts/NotoSerifTC-Regular.ttf"),
    NotoSerifTCBold: require("../../assets/fonts/NotoSerifTC-Bold.ttf"),
  });
  if (!loaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View
      h={"$32"}
      w={"$full"}
      px={15}
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      shadowColor="#ccc"
    >
      <Text></Text>

      <TouchableOpacity>
        <Image
          alt=""
          source={require("@/assets/LOGO.png")}
          style={{ width: 40, height: 40 }} // 控制圖像大小
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          alt=""
          source={require("@/assets/bell.png")}
          style={{ width: 40, height: 40 }} // 控制圖像大小
        />
      </TouchableOpacity>
    </View>
  );
}
