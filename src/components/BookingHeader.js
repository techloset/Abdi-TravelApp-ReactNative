import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import ratio from '../styles/consts/ratio';

const BookingHeader = () => {
  return (
    <View style={styles.headContainer}>
      <TouchableOpacity>
        <Image
          style={styles.headerIcon}
          source={require('../assets/images/icon/backBtn.png')}
        />
      </TouchableOpacity>
      <View style={styles.leftHeader}>
        <Image
          style={styles.headerIcon}
          source={require('../assets/images/icon/share.png')}
        />
        <Image
          style={styles.headerIcon}
          source={require('../assets/images/icon/heart.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    width: ratio.widthPixel(24),
  },
  leftHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 24,
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    position: 'absolute',
    top: 20,
    width: '100%',
  },
});

export default BookingHeader;
