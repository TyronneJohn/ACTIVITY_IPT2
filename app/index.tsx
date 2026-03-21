import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import"../global.css";

export default function Index() {
  const router = useRouter();

  return (
    <View className="w-full flex-1 items-center justify-center">
      <View>
        <Image source={require("../assets/images/tjwe.jpg")} style={{ width: 160, height: 160, borderRadius: 80 }} />
      </View>
      <View className="">
        <Text className="font-bold items-justify text-x1 mt-10">Tyronne John M. Malto</Text>
        <Text className="font-gray text-sm text-center">Frontend Developer</Text>
      </View>

      <View>
        <Text className="font-semibold text-center mt-3"> Age: 21 Years Old</Text>
        <Text className="font=semibold text-sm text-center">Address: Purok 1, Brgy. San Vicente, Donsol Sorsogon</Text>
      </View>

      <View>
        <View className="w-full flex flex-row items-center justify-center">
          <Pressable className="bg-gray-900 px-6 py-3 m-5 rounded-full" onPress={() => router.push("/projects")}>
            <Text className="text-white">View Projects</Text>
          </Pressable>
          <Pressable className="bg-blue-900 px-6 py-3 m-5 rounded-full" onPress={() => router.push("/skills")}>
            <Text className="text-white">View My Skills</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}