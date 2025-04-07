import {FC} from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import {useTheme} from 'react-native-paper';
import styles from './styles';
import {chips, TagType} from '../../components/global/Chips';
import ProductThumbnailCard, {
  productThumbnailType,
} from '../../components/products/ProductThumbnailCard';

const ProductsListPage: FC = () => {
  const theme = useTheme();

  const products: productThumbnailType[] = [
    {
      title: 'Cobra',
      minPrice: 15,
      maxPrice: 15,
      origPrice: 25,
      imageUri: require('../../../assets/images/products/cobra2024.png'),
      purchaseCount: 10,
      reviewPoint: 4.9,
      tag: 'featured',
    },
    {
      title: 'Mamushi',
      minPrice: 15,
      maxPrice: 17,
      origPrice: 25,
      imageUri: require('../../../assets/images/products/mamushi2024.png'),
      purchaseCount: 10,
      reviewPoint: 4.3,
      tag: 'new',
    },
    {
      title: 'Miami Blue',
      minPrice: 15,
      maxPrice: 20,
      origPrice: 25,
      imageUri: require('../../../assets/images/products/miamiblue2024.png'),
      purchaseCount: 10,
      reviewPoint: 4,
      tag: 'discount',
    },
    {
      title: 'Moody Girl',
      minPrice: 15,
      maxPrice: 20,
      origPrice: 25,
      imageUri: require('../../../assets/images/products/moodygirl2024.png'),
      purchaseCount: 10,
      reviewPoint: 4.2,
      tag: 'featured',
    },
    {
      title: 'Rattle',
      minPrice: 15,
      maxPrice: 17,
      origPrice: 25,
      imageUri: require('../../../assets/images/products/rattle2024.png'),
      purchaseCount: 10,
      reviewPoint: 3.7,
      tag: 'new',
    },
    {
      title: 'Whats New',
      minPrice: 15,
      maxPrice: 15,
      origPrice: 25,
      imageUri: require('../../../assets/images/products/whatsnew2024.png'),
      purchaseCount: 10,
      reviewPoint: 4.4,
      tag: 'new',
    },
    {
      title: 'Work That',
      minPrice: 15,
      maxPrice: 20,
      origPrice: 25,
      imageUri: require('../../../assets/images/products/workthat2024.png'),
      purchaseCount: 10,
      reviewPoint: 4.6,
    },
  ];
  return (
    <ImageBackground
      source={require('../../../assets/images/interior.png')}
      style={styles.background}
      blurRadius={5}>
      <ScrollView
        horizontal
        style={styles.scroll}
        contentContainerStyle={{alignItems: 'flex-start'}}
        showsHorizontalScrollIndicator={false}>
        {products.map((product, i) => {
          return (
            <ProductThumbnailCard
              key={i}
              product={product}
              theme={theme}
              chips={chips}
            />
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
};

export default ProductsListPage;
