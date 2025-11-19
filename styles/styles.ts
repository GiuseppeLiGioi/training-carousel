import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerCarousel: {
    flex: 1,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  containerCarouselPages: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
    borderRadius: 16,
    width: "100%",
    maxHeight: 160,
  },

  containerCarouselPage: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
    gap: 10,
    borderRadius: 16,
    backgroundColor: "#f0f0f0",
    padding: 12,
  },
  containerSinglePage: {
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
