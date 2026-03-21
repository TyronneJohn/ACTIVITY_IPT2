import { View, Pressable, Text } from "react-native";
import { useRouter, usePathname } from "expo-router";

export default function TabBar() {
  const router = useRouter();
  const pathname = usePathname(); // current route

  const tabs = [
  ];

  return (
    <View className="flex-row justify-around bg-gray-100 p-3 shadow-md">
    </View>
  );
}