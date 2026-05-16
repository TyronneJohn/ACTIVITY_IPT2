import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, Modal, Pressable, Text, View } from "react-native";
import { getCart, saveCart } from "../utils/storage";

const PRODUCTS = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 1299,
    image: "https://i.pinimg.com/736x/e2/c0/c5/e2c0c5dacd5e51a1af2f9a67a2f32047.jpg",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 1999,
    image: "https://i.pinimg.com/736x/98/e1/81/98e1811070693e518a9654fdcae4ad6d.jpg",
  },
  {
    id: "3",
    name: "Gaming Mouse",
    price: 799,
    image: "https://i.pinimg.com/1200x/e3/a3/69/e3a3695da2ebf0faf54faabb0e85fb29.jpg",
  },
  {
    id: "4",
    name: "Mechanical Keyboard",
    price: 2499,
    image: "https://i.pinimg.com/736x/eb/b9/30/ebb9304f1b5d24081cebed1f0b5be2a6.jpg",
  },
];

export default function Home() {
  const [cart, setCart] = useState<any>({});
  const [selected, setSelected] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    setCart(await getCart());
  };

  const addToCart = async (item: any) => {
    const updated = { ...cart };

    if (updated[item.id]) updated[item.id].qty += 1;
    else updated[item.id] = { ...item, qty: 1 };

    setCart(updated);
    await saveCart(updated);
  };

  const totalItems = Object.values(cart).reduce(
    (s: any, i: any) => s + i.qty,
    0
  );

  return (
    <View className="flex-1 bg-black">
      <View className="flex-row justify-between items-center px-5 pt-14 pb-3 border-b border-[#1e1e1e]">
        <Text className="text-white text-xl font-bold">SHOP</Text>
        <Pressable onPress={() => router.push("/cart")} className="bg-[#111] px-3 py-2 rounded-xl">
          <Text className="text-white">🛒 {totalItems}</Text>
        </Pressable>
      </View>
      <FlatList
        key={"grid"}
        data={PRODUCTS}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between", padding: 10 }}
        renderItem={({ item }) => (
          <View className="bg-[#111] w-[48%] mb-3 rounded-2xl overflow-hidden border border-[#1e1e1e]">
            <Pressable onPress={() => setSelected(item)}>
              <Image source={{ uri: item.image }} className="w-full h-40" />
            </Pressable>
            <View className="p-3">
              <Text className="text-white">{item.name}</Text>
              <Text className="text-sky-400">₱{item.price}</Text>
              <Pressable onPress={() => addToCart(item)} className="bg-white mt-2 py-2 rounded-xl">
                <Text className="text-black text-center font-bold text-xs">Add to Cart</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
      <Modal visible={!!selected} transparent animationType="fade">
        <View className="flex-1 bg-black/80 justify-center items-center px-6">
          {selected && (
            <View className="bg-[#111] w-full p-5 rounded-2xl">
              <Image source={{ uri: selected.image }} className="w-full h-52 rounded-xl"/>
              <Text className="text-white text-lg mt-3">
                {selected.name}
              </Text>
              <Text className="text-sky-400">₱{selected.price} </Text>
              <Pressable onPress={() => addToCart(selected)} className="bg-white mt-4 py-3 rounded-xl">
                <Text className="text-black text-center font-bold">Add to Cart</Text>
              </Pressable>
              <Pressable onPress={() => console.log("Checkout disabled")} className="mt-2 border border-white py-3 rounded-xl">
                <Text className="text-white text-center">Checkout</Text>
              </Pressable>
              <Pressable onPress={() => setSelected(null)}>
                <Text className="text-gray-400 text-center mt-3">Close</Text>
              </Pressable>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
}