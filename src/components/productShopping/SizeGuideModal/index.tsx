import {FC} from 'react';
import BasicModal from '../../global/BasicModal';
import ZoomableImage from '../../global/ZoomableImage';

interface SizeGuideModalProps {
  isVisible: boolean;
  closeModal: () => void;
}
const SizeGuideModal: FC<SizeGuideModalProps> = ({isVisible, closeModal}) => {
  const modalContent = (
    <ZoomableImage
      uri={require('../../../../assets/images/products/detail/size_guide.png')}
    />
  );
  return (
    <BasicModal
      content={modalContent}
      isVisible={isVisible}
      closeModal={closeModal}
    />
  );
};

export default SizeGuideModal;
