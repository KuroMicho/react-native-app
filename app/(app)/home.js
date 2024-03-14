import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import HomeHeader from "../../components/HomeHeader";
import { useAuth } from "../../context/authContext";
import { StatusBar } from "expo-status-bar";
import List from "../../components/List";

const data = [1, 2, 3];

export default function home() {
  const { logout, user } = useAuth();
  const [items, setItems] = useState(data);

  const handleLogout = async () => {
    // await logout();
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      <List items={items} />
    </View>
  );
}
