import AsyncStorage from "@react-native-async-storage/async-storage";

const CART_KEY = "CART_DATA";
export const saveCart = async (cart: any) => {
  await AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
};
export const getCart = async () => {
  const data = await AsyncStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : {};
};
export const clearCart = async () => {
  await AsyncStorage.removeItem(CART_KEY);
};