import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { getCart, saveCart } from "../utils/storage";

export default function Cart() {
  const [cart, setCart] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    setCart(await getCart());
  };

  const update = async (data: any) => {
    setCart(data);
    await saveCart(data);
  };

  const inc = (id: string) => {
    const u = { ...cart };
    u[id].qty++;
    update(u);
  };

  const dec = (id: string) => {
    const u = { ...cart };

    if (u[id].qty > 1) u[id].qty--;
    else delete u[id];

    update(u);
  };

  const removeItem = (id: string) => {
    const u = { ...cart };
    delete u[id];
    update(u);
  };

  const total = Object.values(cart).reduce(
    (s: any, i: any) => s + i.qty * i.price,
    0
  );

  const count = Object.values(cart).reduce(
    (s: any, i: any) => s + i.qty,
    0
  );

  return (
    <View className="flex-1 bg-black">
      <View className="px-5 pt-14 pb-3 border-b border-[#1e1e1e]">
        <Text className="text-white text-xl font-bold">CART</Text>
        <Text className="text-gray-500 text-xs">{count} items</Text>
        <Pressable onPress={() => router.push("/")} className="mt-3 bg-[#111] px-4 py-2 rounded-xl self-start border border-[#1e1e1e]">
          <Text className="text-white"> ← Back </Text>
        </Pressable>
      </View>
      <FlatList data={Object.values(cart)} keyExtractor={(i: any) => i.id} contentContainerStyle={{ padding: 12, paddingBottom: 120 }} renderItem={({ item }: any) => (
          <View className="bg-[#111] flex-row p-3 mb-3 rounded-2xl border border-[#1e1e1e] items-center">
            <Image source={{ uri: item.image }} className="w-24 h-24 rounded-2xl" />
            <View className="flex-1 ml-3">
              <Text className="text-white font-semibold text-base">
                {item.name}
              </Text>
              <Text className="text-sky-400 mt-1">₱{item.price} x {item.qty}</Text>
              <Text className="text-gray-500 text-xs mt-1">₱{(item.price * item.qty).toFixed(2)} </Text>
              <View className="flex-row mt-3 gap-2">
                <Pressable onPress={() => dec(item.id)} className="bg-[#1a1a1a] px-3 py-2 rounded-xl">
                  <Text className="text-red-400 font-bold">−</Text>
                </Pressable>
                <Pressable onPress={() => inc(item.id)} className="bg-white px-3 py-2 rounded-xl">
                  <Text className="text-black font-bold">+</Text>
                </Pressable>
              </View>
            </View>
            <Pressable onPress={() => removeItem(item.id)}>
              <Text className="text-white text-lg">🗑</Text>
            </Pressable>
          </View>
        )}
      />
      <View className="absolute bottom-0 left-0 right-0 bg-black border-t border-[#1e1e1e] p-4">
        <Text className="text-sky-400 mb-2 font-semibold text-base">Total: ₱{total.toFixed(2)} </Text>
        <Pressable className="bg-white py-4 rounded-2xl active:opacity-70">
          <Text className="text-black text-center font-bold text-base">Checkout Now</Text>
        </Pressable>

      </View>

    </View>
  );
}