import React, { memo, useCallback, useMemo } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Pressable,
  Linking,
} from "react-native";
import ReanimatedCarousel from "react-native-reanimated-carousel";
import type { CarouselRenderItem } from "react-native-reanimated-carousel/lib/typescript/types";
import { CachedImage } from "@georstat/react-native-image-cache";

import type { Carousel, CarouselItem } from "@/schema/content";

import useLayout from "@/hooks/useLayout";
// import useQueryCarousel from "@/apollo/hook/content/useQueryCarousel";

interface CarouselComponentProps extends Carousel {}

/** - 輪播圖 */
export default memo(function CarouselBlock() {
  // const { data } = useQueryCarousel({
  //   variables: { name: "home" },
  // });
  // const carousel = useMemo(() => data?.carousel, [data]);

  // if (carousel && carousel.enabled && carousel.items.length) {
  //   return <CarouselComponent {...carousel} />;
  // }
  return null;
  return (
    <View style={styles.placeholder}>
      <ActivityIndicator size="large" />
    </View>
  );
});

/** - 輪播圖組件 */
function CarouselComponent({ items, interval }: CarouselComponentProps) {
  const { onLayout, layout, effective } = useLayout();
  const PAGE_WIDTH = layout.width;
  return (
    <View onLayout={onLayout} style={styles.carousel_container}>
      {effective ? (
        <ReanimatedCarousel
          data={items}
          renderItem={_renderItem}
          width={PAGE_WIDTH}
          height={CAROUSEL_HEIGHT}
          style={styles.carousel}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
          autoPlay={typeof interval === "number"}
          autoPlayInterval={interval}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 48,
          }}
          loop
          vertical={false}
        />
      ) : null}
    </View>
  );
}

/** - 渲染物件 */
const _renderItem: CarouselRenderItem<CarouselItem> = ({ item }) => {
  const uri = item.image;
  const link = item.link;

  const _onLink = useCallback(async () => {
    if (link) {
      Linking.openURL(link);
    }
  }, [link]);

  return (
    <Pressable onPress={_onLink} disabled={!link} style={styles.item_container}>
      {uri ? (
        <CachedImage style={styles.image} source={uri} resizeMode="cover" />
      ) : null}
    </Pressable>
  );
};

/** - 輪播圖高度 */
const CAROUSEL_HEIGHT = 240;

/** - 樣式 */
const styles = StyleSheet.create({
  item_container: { flex: 1, overflow: "hidden", borderRadius: 8 },
  carousel_container: { width: "100%", height: CAROUSEL_HEIGHT },
  carousel: {
    width: "100%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  placeholder: {
    alignItems: "center",
    justifyContent: "center",
    height: CAROUSEL_HEIGHT,
  },
});
