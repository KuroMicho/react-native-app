import { View, Text, FlatList } from "react-native";
import React from "react";
import Item from "./Item";

export default function List({ items }) {
  return (
    <View className="flex-1">
      <FlatList
        data={items}
        contentContainerStyle={{ flex: 1, paddingVertical: 25 }}
        keyExtractor={(item) => Math.random()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => <Item item={item} index={index} />}
      />
    </View>
  );
}
