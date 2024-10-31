//import liraries
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "@gluestack-ui/themed";
import { useFonts } from "expo-font";
import React, { Component } from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
export interface CustomHeaderProps {
  title: string;
  onPress?: () => void;
}
export function CustomHeader({ title }: CustomHeaderProps) {
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
      <TouchableOpacity>
        <Ionicons name="chevron-back" size={24} color="#A6A6A6" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "NotoSerifTCBold",
        }}
      >
        {title}
      </Text>
      <Text></Text>
    </View>
  );
}
