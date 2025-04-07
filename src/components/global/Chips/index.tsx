import {FC, JSX} from 'react';
import styles from './styles';
import {Chip, Icon, Text} from 'react-native-paper';
import {View} from 'react-native';

export type TagType = 'featured' | 'new' | 'discount';
type CustomChipProps = {
  tag: TagType;
};
export type ChipsType = {
  featured: JSX.Element;
  new: JSX.Element;
  discount: JSX.Element;
};

const CustomChip: FC<CustomChipProps> = ({tag}) => {
  const tagStyles = {
    featured: {bgColor: 'yellow', icon: 'fire'},
    new: {bgColor: 'orange', icon: 'star'},
    discount: {bgColor: '#80808080', icon: 'tag'},
  };
  return (
    <View style={[styles.container, {backgroundColor: tagStyles[tag].bgColor}]}>
      <Icon source={tagStyles[tag].icon} size={16} />
      <Text style={styles.text}>{tag}</Text>
    </View>
  );
};

export const chips = {
  featured: <CustomChip tag="featured" />,
  new: <CustomChip tag="new" />,
  discount: <CustomChip tag="discount" />,
};
