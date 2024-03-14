import { View, Text } from "react-native";
import React from "react";
import { MenuOption } from "react-native-popup-menu";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function CustomMenuItem({ text, action, value, icon }) {
  return (
    <MenuOption onSelect={() => action(value)}>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: 4,
        }}
        className="flex-row"
      >
        <Text
          style={{ fontSize: hp(1.7) }}
          className="font-semibold text-neutral-600"
        >
          {text}
        </Text>
        {icon}
      </View>
    </MenuOption>
  );
}
