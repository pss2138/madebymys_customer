import {FC} from 'react';
import styles from './styles';
import {Image, ImageSourcePropType, View} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';

type NailType = {
  fingerIndex: number;
  imageUri: undefined | ImageSourcePropType;
  // imageUri: string;
  color: string;
  width: number;
  height: number;
  translateY?: number;
};
type NailsProtoHorizontalProps = {
  nails: NailType[];
  shape: string;
  length: string;
};
type NailProps = {
  nail: NailType;
};
const NailsProtoHorizontal: FC<NailsProtoHorizontalProps> = ({
  nails,
  shape,
  length,
}) => {
  const Nail: FC<NailProps> = ({nail}) => {
    return (
      <View style={styles.nailWrapper}>
        <MaskedView
          style={{
            width: nail.width,
            height: nail.height,
          }}
          maskElement={
            <Image
              source={nail.imageUri}
              style={[
                styles.nailMask,
                {transform: [{translateY: nail.translateY ?? 0}]},
              ]}
              resizeMode="contain"
            />
          }>
          <View
            style={[styles.nailColoredFill, {backgroundColor: nail.color}]}
          />
          <View style={styles.nailGlow} />
        </MaskedView>
      </View>
    );
  };

  return (
    <View style={styles.nailsContainer}>
      {nails.map(nail => (
        <Nail nail={nail} />
      ))}
    </View>
  );
};

export default NailsProtoHorizontal;
