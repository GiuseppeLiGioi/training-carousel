import Carousel from "@/components/my/Carousel";
import { LinearGradient } from "expo-linear-gradient";
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
      <LinearGradient
        colors={["#567dfcff", "#f0f87fff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1, padding: 16 }}
      >
        <Carousel items={mockItems} direction="horizontal" delay={3000} />
      </LinearGradient>
    </SafeAreaView>
  );
}
