import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import useTokenStore from "@/zustand/useTokenStore";
import SignIn from "../signIn";
export default function TabLayout() {
  const { token } = useTokenStore();
  const colorScheme = useColorScheme();

  if (!token) return <SignIn />;
  if (token)
    return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#95B342",
          headerShown: false,
          tabBarItemStyle: {
            paddingTop: 8,
            paddingBottom: 8,
          },
          tabBarStyle: {
            height: 80,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "首頁",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="products"
          options={{
            title: "商品專區",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "pricetag-outline" : "pricetag-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="recommand"
          options={{
            title: "推薦專區",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "gift-outline" : "gift-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "購物車",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "cart-outline" : "cart"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="member"
          options={{
            title: "會員中心",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "person-circle-outline" : "person"}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    );
}
