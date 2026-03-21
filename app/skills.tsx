import { useRouter } from "expo-router";
import { Pressable, Text, View, ScrollView } from "react-native";

export default function Skills() {
  const router = useRouter();

  const skills = [
    "React",
    "React Native",
    "JavaScript",
    "HTML & CSS",
    "Tailwind CSS",
    "Expo",
  ];

  return (
    <ScrollView className="flex-1 bg-white p-5">
      <View className="flex-1">
        <View className="mb-5 items-center">
          <Text className="font-bold text-xl mt-10">My Skills</Text>
        </View>

        {skills.map((skill, index) => (
          <View key={index} className="bg-blue-100 p-3 m-2 rounded-xl shadow-sm">
            <Text className="text-blue-900 font-semibold">{skill}</Text>
          </View>
        ))}

        <View className="items-center mt-5">
          <Pressable
            className="bg-gray-900 px-6 py-3 rounded-full"onPress={() => router.back()}>
            <Text className="text-white">Go Back</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}