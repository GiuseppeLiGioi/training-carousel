import Carousel from "@/components/my/Carousel";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <View>
        <Text style={{ color: "white" }}>Sono Home</Text>
        <Carousel />
      </View>
    </SafeAreaView>
  );
}
