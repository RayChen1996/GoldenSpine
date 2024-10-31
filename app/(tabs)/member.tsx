import { TouchableOpacity } from "react-native";

import {
  Avatar,
  AvatarImage,
  Box,
  Button,
  ButtonText,
  FlatList,
  Text,
  View,
  VStack,
} from "@gluestack-ui/themed";
import useTokenStore from "@/zustand/useTokenStore";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from "expo-font";
import { HStack } from "@gluestack-ui/themed";
import { Image } from "react-native";
import { CustomHeader } from "@/components/CustomHeader";
export default function MemberCenterScreen({ navigation }) {
  const { cleanToken } = useTokenStore();

  const data = [
    {
      id: "1",
      title: "編輯個人資料",
      icon: "person-outline",
      screen: "EditProfile",
    },
    {
      id: "2",
      title: "第一代訂單紀錄",
      icon: "receipt-outline",
      screen: "OrderHistory",
    },
    {
      id: "3",
      title: "線上客服",
      icon: "chatbox-ellipses-outline",
      screen: "CustomerService",
    },
    { id: "4", title: "意見回饋", icon: "mail-outline", screen: "Feedback" },
    { id: "5", title: "登出", icon: "log-out-outline", screen: "Logout" },
  ];

  return (
    <View>
      <CustomHeader title="會員中心" />
      {/* User Profile Section */}
      <View px={20}>
        <View alignItems="center" py="$4">
          <Avatar size="lg">
            <AvatarImage alt="" source={{ uri: "profile_image_url" }} />
          </Avatar>
          <Text fontWeight="$bold" fontSize="$lg" color="$coolGray800">
            林依辰
          </Text>
          <Image alt="" source={require("@/assets/Union.png")} />
        </View>

        {/* Menu Options */}
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                if (item.id === "5") {
                  cleanToken();
                  return; // Ensure no further code is executed for logout
                }
                console.log(item.id);
              }}
            >
              <Box
                borderBottomWidth="$1"
                borderColor="$trueGray300"
                py="$2"
                px="$4"
                justifyContent="center"
                h={"$16"}
              >
                <HStack justifyContent="space-between" alignItems="center">
                  <HStack space="md" alignItems="center">
                    <Ionicons name={item.icon} size={20} color="#A6A6A6" />
                    <Text fontSize="$md" color="$coolGray800">
                      {item.title}
                    </Text>
                  </HStack>
                  <Ionicons name="chevron-forward" size={20} color="#A6A6A6" />
                </HStack>
              </Box>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

// function CustomHeader({ navigation }) {
//   const [loaded] = useFonts({
//     NotoSerifTC: require("../../assets/fonts/NotoSerifTC-Regular.ttf"),
//     NotoSerifTCBold: require("../../assets/fonts/NotoSerifTC-Bold.ttf"),
//   });
//   if (!loaded) {
//     return <Text>Loading...</Text>;
//   }
//   return (
//     <View
//       h={"$32"}
//       w={"$full"}
//       px={15}
//       alignItems="center"
//       flexDirection="row"
//       justifyContent="space-between"
//       shadowColor="#ccc"
//     >
//       <TouchableOpacity>
//         <Ionicons name="chevron-back" size={24} color="#A6A6A6" />
//       </TouchableOpacity>
//       <Text
//         style={{
//           fontFamily: "NotoSerifTCBold",
//         }}
//       >
//         會員中心
//       </Text>
//       <Text></Text>
//     </View>
//   );
// }
