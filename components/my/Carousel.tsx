import styles from "@/styles/styles";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  View,
} from "react-native";
const screenWidth =
  Dimensions.get(
    "window"
  ).width; /*Grazie al Dimensions, native di native, ottengo la larghezaza dello schermo */

type CarouselItem = {
  id: number;
  title: string;
  image: ImageSourcePropType /*serve per poter passare qualsiasi dato all'immagine, in modo da poter passare item.image */;
};

type CarouselProps = {
  items: CarouselItem[];
  direction: "horizontal" | "vertical";
  delay?: number;
};
export default function Carousel({ items, direction, delay }: CarouselProps) {
  const [currentPage, setCurrentPage] =
    useState<number>(
      0
    ); /*stato che tiene conto della PAGINA, contenente due items, da mostrare */
  const ItemsPerPage: number = 2; /*costante, due items alla volta per pagina visualizzata nel carosello */
  const totalPages = Math.ceil(items.length / ItemsPerPage);

  const pages: CarouselItem[][] =
    []; /*ogni mia page, diventerà a sua volta un sottoArray con tipo CarouselItem[] di 2 item alla volta */
  for (let i = 0; i < items.length; i += ItemsPerPage) {
    pages.push(
      items.slice(i, i + ItemsPerPage)
    ); /*start = i, end = l'indice del secondo item nella coppia */
  }

  useEffect(() => {
    if (!delay) return;

    const timer = setTimeout(() => {
      let nextPage = currentPage + 1;
      if (nextPage >= totalPages) {
        nextPage = 0;

        /*qui metterò la logica di scroll automatico */
      }
      setCurrentPage(nextPage);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentPage, delay]);

  const scrollDirection = direction === "horizontal" ? true : false;

  return (
    <View style={styles.containerCarousel}>
      <LinearGradient
        colors={["#6486f8ff", "#c5d8fcff", "#fcfcfcff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.containerCarouselPages}
      >
        <ScrollView
          horizontal={scrollDirection}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {pages.length > 0 &&
            pages.map(
              (
                pageItems,
                pageIndex /*pages è un array di array quindi serviranno due map, uno esterno per selezionare tutti e 4 i sub-array */
              ) => (
                <View
                  style={[
                    styles.containerCarouselPage,
                    direction === "horizontal"
                      ? {
                          width: screenWidth - 90,
                        } /*evito che si veda la pagina successiva dalla precedente. */
                      : {
                          height: 150,
                        } /*altezza limitata per consentire lo scroll verticalmente, altrimenti avrei scrollView normale */,
                  ]}
                  key={pageIndex}
                >
                  {pageItems.map(
                    (
                      item /*ed uno interno per iterare sulle coppie di item per ogni sub-array */
                    ) => (
                      <View style={styles.containerSinglePage} key={item.id}>
                        <Image style={styles.imageItem} source={item.image} />
                        <Text style={styles.titleItem}>
                          Titolo: {item.title}
                        </Text>
                      </View>
                    )
                  )}
                </View>
              )
            )}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
