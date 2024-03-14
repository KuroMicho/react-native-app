import "../global.css";
import { View } from "react-native";
import { Slot, useRouter, useSegments } from "expo-router";
import { AuthContextProvider, useAuth } from "../context/authContext";
import { useEffect } from "react";
import { MenuProvider } from "react-native-popup-menu";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // check if user is authenticated or not
    if (typeof isAuthenticated == "undefined") return;
    const isApp = segments[0] == "(app)";
    if (isAuthenticated && !isApp) {
      // redirect user to home
      router.replace("home");
    } else if (isAuthenticated == false) {
      // redirect to signIn
      router.replace("signIn");
    }
  }, [isAuthenticated]);

  return <Slot />;
};
export default function _layout() {
  return (
    <MenuProvider>
      <AuthContextProvider>
        <MainLayout />
      </AuthContextProvider>
    </MenuProvider>
  );
}
