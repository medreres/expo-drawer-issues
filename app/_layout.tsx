import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
      // backBehavior="history"
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />
        <Drawer.Screen
          name="[id]/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Dynamic route",
            title: "Dynamic route",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
