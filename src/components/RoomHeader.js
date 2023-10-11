import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import ratio from '../styles/consts/ratio';
import {Color, FontFamily} from '../styles/consts/GlobalStyles';

const RoomHeader = () => {
  return (
    <View style={styles.headContainer}>
      <View style={styles.rightHeader}>
        <TouchableOpacity>
          <Image
            style={styles.headerIcon}
            source={require('../assets/images/icon/backBtn.png')}
          />
        </TouchableOpacity>
        <Text style={styles.bookingText}>Booking</Text>
      </View>
      <View style={styles.leftHeader}>
        <Image
          style={styles.headerIcon}
          source={require('../assets/images/icon/iconToday.png')}
        />
        <Image
          style={styles.headerIcon}
          source={require('../assets/images/icon/menu.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    width: ratio.widthPixel(24),
  },
  bookingText: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: ratio.fontPixel(20),
    color: Color.white,
  },
  leftHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 24,
  },
  rightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    height: ratio.widthPixel(28),
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    width: '100%',
    backgroundColor: Color.grey,
    position: 'absolute',
    zIndex: 100,
  },
});

export default RoomHeader;
