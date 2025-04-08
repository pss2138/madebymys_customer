import {FC, useRef} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {Button, Icon} from 'react-native-paper';
import StatusNavBar from '../../components/productShopping/StatusNavBar';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const screens = ['Screen 1', 'Screen 2', 'Screen 3'];

const ProductShoppingPage: FC = () => {
  const carouselRef = useRef<ICarouselInstance>(null);
  return (
    <View style={styles.container}>
      <StatusNavBar />

      {/* Main Screen */}
      <ImageBackground
        source={require('../../../assets/images/interior.png')}
        style={styles.background}>
        {/* 4/7/25 codes below are just samples. */}
        <Carousel
          ref={carouselRef}
          width={screenWidth}
          height={screenHeight - 100}
          data={screens}
          enabled={false}
          renderItem={({index}) => (
            <View style={{flex: 1, paddingVertical: 40}}>
              <Text style={{textAlign: 'center', fontSize: 24}}>
                {screens[index]}
              </Text>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 16}}>
                {Array.from({length: 5}).map((_, i) => (
                  <View
                    key={i}
                    style={{
                      width: 120,
                      height: 100,
                      backgroundColor: '#ffccdd',
                      marginRight: 12,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 8,
                    }}>
                    <Text>Item {i + 1}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          )}
        />

        {/* Page Control Buttons */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 32,
            marginTop: 12,
          }}>
          <Button onPress={() => carouselRef.current?.prev()}>Prev</Button>
          <Button onPress={() => carouselRef.current?.next()}>Next</Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProductShoppingPage;
