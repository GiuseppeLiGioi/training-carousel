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
    borderWidth: 2,
    borderColor: "red",
  },
  containerCarouselPage: {
    justifyContent: "space-around",
    alignItems: "center",
    gap: 10,
    borderWidth: 2,
    borderColor: "green",
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
