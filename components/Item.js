import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Item({ item }) {
  return (
    <TouchableOpacity>
      <Text>{item}</Text>
    </TouchableOpacity>
  );
}
