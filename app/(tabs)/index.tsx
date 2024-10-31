import { Image, StyleSheet, Platform, ScrollView } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text, View } from "@gluestack-ui/themed";
import { HomeHeader } from "@/components/HomeHeader";
import Cascal from "@/components/Home/Cascal";
import Feature from "@/components/Home/feature";
import News from "@/components/Home/News";
import Products from "@/components/Home/Products";
import Videos from "@/components/Home/Videos";
import Posts from "@/components/Home/Posts";
import Teacher from "@/components/Home/Teacher";
export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader title="" />
      <ScrollView style={{ flex: 1 }}>
        <Cascal />
        <Feature />
        <News />
        <Products />
        <Videos />
        <Posts />
        <Teacher />
      </ScrollView>
    </View>
  );
}
