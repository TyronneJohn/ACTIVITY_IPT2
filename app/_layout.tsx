import TabBar from "@/components/TabBar";
import { Tabs } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Tabs tabBar={() => <TabBar/>} screenOptions={{headerShown: false}}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="projects" />
      <Tabs.Screen name="skills" />
    </Tabs>
  );
}