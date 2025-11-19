import styles from "@/styles/styles";
import { Image, Text, View } from "react-native";

export default function Carousel({ items }) {
  return (
    <View style={styles.containerCarousel}>
      <View style={styles.containerCarouselPages}>
        <View style={styles.containerCarouselPage}>
          <Text style={styles.titleItem}>Pagina 1</Text>
          <Image style={styles.titleImage}></Image>
        </View>
        <View style={styles.containerCarouselPage}>
          <Text style={styles.titleItem}>Pagina 2</Text>
          <Image style={styles.titleImage}></Image>
        </View>
      </View>

      <View style={styles.containerCarouselPages}>
        <View style={styles.containerCarouselPage}>
          <Text style={styles.titleItem}>Pagina 1</Text>
          <Image style={styles.titleImage}></Image>
        </View>
        <View style={styles.containerCarouselPage}>
          <Text style={styles.titleItem}>Pagina 2</Text>
          <Image style={styles.titleImage}></Image>
        </View>
      </View>
    </View>
  );
}
