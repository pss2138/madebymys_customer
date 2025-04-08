import {FC} from 'react';
import styles from './styles';
import {Icon, MD3Theme, Text} from 'react-native-paper';
import {Image, Pressable, View} from 'react-native';
import {ChipsType, TagType} from '../../global/Chips';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationType} from '../../../routes/navigation';

export type productThumbnailType = {
  id: string;
  title: string;
  minPrice: number;
  maxPrice: number;
  origPrice: number;
  imageUri: any;
  purchaseCount: number;
  reviewPoint: number;
  tag?: TagType;
};

type ProductThumpnailProps = {
  product: productThumbnailType;
  theme: MD3Theme;
  chips: ChipsType;
};

const ProductThumbnailCard: FC<ProductThumpnailProps> = ({
  product,
  theme,
  chips,
}) => {
  const navigation = useNavigation<MainStackNavigationType>();
  const goProductShopping = (productId: string) => {
    navigation.navigate('ProductShopping', {productId});
  };

  return (
    <Pressable
      onPress={() => {
        goProductShopping(product.id);
      }}
      style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.imageContainer}>
          <Image source={product.imageUri} style={styles.image} />
        </View>

        <Text style={styles.title}>{product.title}</Text>

        <View style={styles.infoBox}>
          <View style={styles.subInfoBox}>
            <View style={styles.priceBox}>
              <Text style={styles.price}>${product.minPrice}</Text>
              {product.origPrice > product.minPrice && (
                <Text style={styles.priceDiscount}>${product.origPrice}</Text>
              )}
            </View>
            <View style={styles.reviewBox}>
              <Text style={styles.reviewPoint}>{product.reviewPoint}</Text>
              <Icon source="star" size={theme.fonts.bodyLarge.fontSize} />
              <Text style={styles.purchaseCount}>
                ({product.purchaseCount})
              </Text>
            </View>
          </View>

          {product.tag && (
            <View style={styles.subInfoBox}>{chips[product.tag]}</View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default ProductThumbnailCard;
