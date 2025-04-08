import {FC} from 'react';
import styles from './styles';
import {ScrollView, View} from 'react-native';
import ZoomableImage from '../../../../components/global/ZoomableImage';

export const productDetailInfo = {
  id: '1',
  title: 'Cobra',
  minPrice: 15,
  maxPrice: 20,
  origPrice: 25,
  imageUri: require('../../../../../assets/images/products/cobra2024.png'),
  purchaseCount: 10,
  reviewPoint: 4.9,
  tag: 'featured',
  name: 'cobra',

  // additional product detail attrbs
  description: `
    🖤 Cobra – Glossy Black &amp; White Press-On Nails 🖤

    Get ready to unleash your bold and elegant side with&nbsp;Cobra&nbsp;– a stunning black and white press-on nail set designed for trendsetters who love a mix of edgy and chic! Featuring a high-shine glossy finish, these nails come in three stylish variations:

    Classic Glossy – A sleek black &amp; white design for a timeless, sophisticated look.
    Polka Dot Chic – Playful white polka dots on a jet-black base for a retro, eye-catching style.
    3D Charms Edition – Elevate your nail game with adorable bow &amp; kitty charms, adding a cute yet fierce vibe.

    💖 Key Features:
    ✔ Glossy Black &amp; White Base – A bold, modern aesthetic that pairs with any outfit.
    ✔ Polka Dot Add-On – A fun, vintage-inspired touch for just $2 for ALL NAILS.
    ✔ 3D Charms Available – Elevate your nails with cute bows &amp; hello kitty charms for just $1, designed with smooth edges to prevent snagging or tangling.
    ✔ Reusable &amp; Durable – High-quality material for long-lasting wear.
    ✔ Easy to Apply &amp; Remove – Includes nail glue &amp; adhesive tabs for hassle-free application.
    ✔ All-in-One Package Bundle – Perfect for yourself or as a stylish gift! Includes nails, a long-lasting nail glue, a precise cuticle remover, and a handy nail file for a complete salon experience at home.

    💅 How to Order:

    Select your preferred nail style (Classic, Polka Dot, or 3D Charms).
    Choose your nail shape &amp; size from the options.
    Add to cart and check out – we’ll handcraft your custom set just for you!

    ✨ Whether you're feeling bold, playful, or chic, Cobra has the perfect style to match your vibe. Order now and slay the aesthetic! 💕
  `,
  images: [
    {
      id: '11',
      uri: require('../../../../../assets/images/products/detail/cobra_plain.png'),
    },
    {
      id: '12',
      uri: require('../../../../../assets/images/products/detail/cobra_polka.png'),
    },
    {
      id: '13',
      uri: require('../../../../../assets/images/products/detail/cobra_charms_polka.png'),
    },
    {
      id: '14',
      uri: require('../../../../../assets/images/products/detail/package_bundle.png'),
    },
    {
      id: '15',
      uri: require('../../../../../assets/images/products/detail/size_guide.png'),
    },
  ],
  options: [
    {
      category: 'size',
      selections: [
        {title: 'XS', addPrice: 0},
        {title: 'S', addPrice: 0},
        {title: 'M', addPrice: 0},
        {title: 'L', addPrice: 0},
      ],
    },
    {
      category: 'shape',
      selections: [
        {
          title: 'almond',
          addPrice: 0,
          conditions: [
            {
              excludeOptions: [{category: 'length', selections: ['short']}],
            },
          ],
        },
        {
          title: 'square',
          addPrice: 0,
          conditions: [
            {
              excludeOptions: [
                {category: 'length', selections: ['large', 'middle']},
              ],
            },
          ],
        },
      ],
    },
    {
      category: 'length',
      selections: [
        {title: 'large', addPrice: 0},
        {title: 'middle', addPrice: 0},
        {title: 'short', addPrice: 0},
      ],
    },
    {
      title: 'polkadots',
      selections: [
        {title: 'polkadots', addPrice: 2},
        {title: 'none', addPrice: 0},
      ],
    },
    {
      category: 'charms',
      selections: [
        {title: 'charms', addPrice: 2},
        {title: 'none', addPrice: 0},
      ],
    },
  ],
};

const WelcomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 16}}>
        {productDetailInfo.images.map((image, index) => {
          return <ZoomableImage key={index} uri={image.uri} />;
        })}
        <View style={{width: 120}} />
      </ScrollView>
    </View>
  );
};

export default WelcomeScreen;
