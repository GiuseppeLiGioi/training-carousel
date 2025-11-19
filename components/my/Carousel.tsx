import styles from "@/styles/styles";
import { useEffect, useState } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";

type CarouselItem = {
  id: number;
  title: string;
  image: ImageSourcePropType /*serve per poter passare qualsiasi dato all'immagine, in modo da poter passare item.image */;
};

type CarouselProps = {
  items: CarouselItem[];
};
export default function Carousel({ items }: CarouselProps) {
  const [currentPage, setCurrentPage] =
    useState<number>(
      0
    ); /*stato che tiene conto della PAGINA, contenente due items, da mostrare */
  const [itemsToShow, setItemsToShow] = useState<CarouselItem[]>([]);
  const ItemsPerPage: number = 2; /*costante, due items alla volta per pagina visualizzata nel carosello */
  const handleChangePage = () => {
    const startIndex =
      currentPage *
      ItemsPerPage; /*il risultato ci darà l'indice del primo item della coppia di items da mostare */
    const endIndex =
      startIndex +
      ItemsPerPage; /*il risultato ci darà l'indice dell'ultimo e secondo item della coppia di items da mostare */
    const dataToShow = items.slice(
      startIndex,
      endIndex
    ); /*uso lo slice per estrarre dall'array solo la parte interessata volta per volta */
    setItemsToShow(dataToShow);
  };

  useEffect(() => {
    handleChangePage();
  }, [currentPage]);

  return (
    <View style={styles.containerCarousel}>
      <View style={styles.containerCarouselPages}>
        {itemsToShow.length > 0 &&
          itemsToShow.map((item) => (
            <View style={styles.containerCarouselPage} key={item.id}>
              <Text style={styles.titleItem}>Titolo: {item.title}</Text>
              <Image style={styles.imageItem} source={item.image} />
            </View>
          ))}
      </View>
    </View>
  );
}
