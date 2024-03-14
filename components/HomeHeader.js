import { View, Text, Platform } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { blurhash } from "../utils/common";
import { useAuth } from "../context/authContext";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import CustomMenuItem from "./CustomMenuItems";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const android = Platform.OS == "android";
export default function HomeHeader() {
  const { user } = useAuth();
  const { top } = useSafeAreaInsets();
  const router = useRouter();

  const handleProfile = () => {};
  const handleLogout = async () => {
    router.push("signIn");
  };
  return (
    <View
      style={{
        paddingTop: android ? top : top + 10,
        justifyContent: "space-between",
        padding: 10,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
      }}
      className="flex-row bg-indigo-500"
    >
      <View>
        <Text style={{ fontSize: hp(3) }} className="font-medium text-white">
          Gymfit
        </Text>
      </View>

      <View>
        <Menu>
          <MenuTrigger customStyles={{ triggerWrapper: {} }}>
            <Image
              style={{ height: hp(4.3), aspectRatio: 1, borderRadius: 100 }}
              source={
                user ? user.profile : "https://picsum.photos/seed/696/3000/2000"
              }
              placeholder={blurhash}
              transition={500}
            />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionsContainer: {
                borderRadius: 10,
                marginTop: 40,
                marginLeft: -30,
                backgroundColor: "white",
                shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 0 },
                width: 100,
              },
            }}
          >
            <CustomMenuItem
              text="Profile"
              action={handleProfile}
              value={null}
              icon={<Feather name="user" size={hp(2.5)} color="#737373" />}
            />
            <Divider />
            <CustomMenuItem
              text="Sign Out"
              action={handleLogout}
              value={null}
              icon={<AntDesign name="logout" size={hp(2.5)} color="#737373" />}
            />
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
}

const Divider = () => {
  return <View style={{ backgroundColor: "#737373", padding: 0.4 }} />;
};
