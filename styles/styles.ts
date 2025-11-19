import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerCarousel: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  containerCarouselPages: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 24,
    borderRadius: 16,
    gap: 10,
  },
  containerCarouselPage: {
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10,
    borderRadius: 16,
    backgroundColor: "white",
    padding: 8,
  },
  titleItem: {
    fontSize: 16,
    textAlign: "center",
    color: "black",
  },
  imageItem: {
    width: 120,
    height: 80,
  },
});

export default styles;
