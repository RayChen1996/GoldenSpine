import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text, View } from "@gluestack-ui/themed";
import { HomeHeader } from "@/components/HomeHeader";

export default function HomeScreen() {
  return (
    <View>
      <HomeHeader title="" />
    </View>
  );
}
