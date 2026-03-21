import { useRouter } from "expo-router";
import { Pressable, Text, View, ScrollView } from "react-native";

export default function Projects() {
  const router = useRouter();

  const projectList = [
    { title: "Portfolio Website", description: "My personal portfolio built with React/JS." },
    { title: "Todo App", description: "A todo list app built with React Native." },
    { title: "E-commerce App", description: "A mobile shopping app with payments integration." },
    { title: "Weather App", description: "A weather forecasting app with real-time updates." },
  ];

  return (
    <ScrollView className="flex-1 bg-white p-5">
      <View className="flex-1">
        <View className="items-center mt-10 mb-5">
          <Text className="font-bold text-xl">My Projects</Text>
        </View>
        {projectList.map((project, index) => (
          <View key={index} className="bg-gray-100 p-4 m-2 rounded-xl shadow-md">
            <Text className="font-bold text-lg">{project.title}</Text>
            <Text className="text-gray-600 mt-1">{project.description}</Text>
          </View>
        ))}
        <View className="items-center mt-5">
          <Pressable className="bg-gray-900 px-6 py-3 rounded-full" onPress={() => router.back()}>
            <Text className="text-white">Go Back</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}