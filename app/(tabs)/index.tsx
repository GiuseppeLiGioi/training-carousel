import Carousel from "@/components/my/Carousel";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen() {
  const mockItems = [
    { id: 1, title: "Gatto", image: require("../../assets/images/cat.jpg") },
    { id: 2, title: "Cane", image: require("../../assets/images/dog.jpg") },
    {
      id: 3,
      title: "Tigre",
      image: require("../../assets/images/tiger.jpg"),
    },
    {
      id: 4,
      title: "Elefante",
      image: require("../../assets/images/elephant.jpg"),
    },
    { id: 5, title: "Leone", image: require("../../assets/images/leon.jpg") },
    { id: 6, title: "Orso", image: require("../../assets/images/orso.jpg") },
    {
      id: 7,
      title: "Panda",
      image: require("../../assets/images/panda.jpg"),
    },
    {
      id: 8,
      title: "Canguro",
      image: require("../../assets/images/canguro.jpg"),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <View>
        <Text style={{ color: "white" }}>Sono Home</Text>
        <Carousel items={mockItems} />
      </View>
    </SafeAreaView>
  );
}
