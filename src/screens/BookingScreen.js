import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ratio from '../styles/consts/ratio';
import {Color, FontFamily} from '../styles/consts/GlobalStyles';
import categories from '../components/categories';

const BookingScreen = ({navigation}) => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [ratingHover, setRatingHover] = useState(false);
  const [overlayHover, setOverlayHover] = useState(false);
  const categoriesEdited = categories.slice(currentScreen, currentScreen + 1);

  const BookingHeader = () => {
    return (
      <View style={styles.headContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
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

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor={'transparent'}
        />
        {/* top */}
        <View>
          <ImageBackground
            style={styles.bgImage}
            source={require('../assets/images/bali.png')}>
            <BookingHeader />
            {/* text */}
            <View style={styles.baliContainer}>
              <View>
                <Text style={styles.baliText}>BALI</Text>
              </View>
              <View>
                <Text style={styles.indonesiaText}>Indonesia</Text>
              </View>
              <View style={styles.rating}>
                <Text style={styles.ratingText}>4.9</Text>
                <Image source={require('../assets/images/icon/star.png')} />
              </View>
            </View>
            {/* text */}
          </ImageBackground>
        </View>
        {/* top */}

        {/* bottom */}
        <View style={styles.categoryContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 20}}
            style={styles.TabsContainer}>
            <TouchableOpacity
              style={styles.Tab}
              onPress={() => {
                setCurrentScreen(0);
              }}>
              <Text style={styles.categoryTabText}>Hotel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Tab}
              onPress={() => {
                setCurrentScreen(1);
              }}>
              <Text style={styles.categoryTabText}>Foods</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Tab}
              onPress={() => {
                setCurrentScreen(2);
              }}>
              <Text style={styles.categoryTabText}>Activities</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Tab}>
              <Text style={styles.categoryTabText}>Community</Text>
            </TouchableOpacity>
          </ScrollView>
          <View>
            {categoriesEdited.map((item, i) => {
              return (
                <View key={i} style={styles.cardContainer}>
                  <View style={styles.imageContainer}>
                    <TouchableOpacity
                      onPressIn={() => setRatingHover(!ratingHover)}>
                      <ImageBackground
                        style={
                          ratingHover
                            ? [styles.image, {transform: 'scale(1.2)'}]
                            : styles.image
                        }
                        source={item.image}>
                        {ratingHover && (
                          <View style={styles.ratingContainer}>
                            <View>
                              <Text style={styles.rating_Text}>
                                Villa Kayu Lama
                              </Text>
                            </View>
                            <View style={styles.rating_Stars}>
                              <Image
                                style={styles.star}
                                source={require('../assets/images/icon/star.png')}
                              />
                              <Image
                                style={styles.star}
                                source={require('../assets/images/icon/star.png')}
                              />
                              <Image
                                style={styles.star}
                                source={require('../assets/images/icon/star.png')}
                              />
                              <Image
                                style={styles.star}
                                source={require('../assets/images/icon/star.png')}
                              />
                              <Image
                                style={styles.star}
                                source={require('../assets/images/icon/starHalf.png')}
                              />
                            </View>
                          </View>
                        )}
                      </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPressIn={() => setOverlayHover(!overlayHover)}>
                      <ImageBackground
                        style={
                          overlayHover
                            ? [styles.image, {transform: 'scale(1.2)'}]
                            : styles.image
                        }
                        source={item.image}>
                        <View style={styles.imageOverlay}>
                          <Text
                            style={{
                              fontFamily: FontFamily.poppinsSemiBold,
                              fontSize: ratio.fontPixel(17),
                              lineHeight: ratio.fontPixel(17.652),
                              color: Color.white,
                            }}>
                            10+
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                  <View style={{gap: 20, paddingVertical: 10}}>
                    <Text style={styles.details}>Details</Text>
                    <View>
                      <Text style={styles.infoText}>
                        {item.details}
                        <Text
                          style={{
                            color: Color.black,
                            fontFamily: FontFamily.poppinsMedium,
                          }}>
                          Read More
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>

          {/* btn */}
          <View style={styles.conBtnContainer}>
            <TouchableOpacity
              style={styles.conBtn}
              onPress={() => {
                navigation.navigate('Room');
              }}>
              <Text style={styles.conBtnText}>Continue</Text>
              <Image
                style={{width: ratio.widthPixel(15)}}
                source={require('../assets/images/icon/rightArrow.png')}
              />
            </TouchableOpacity>
          </View>
          {/* btn */}
        </View>
        {/* bottom */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 17,
    width: ratio.widthPixel(136),
    height: ratio.widthPixel(44),
    backgroundColor: Color.primary,
    borderRadius: 24,
    marginTop: 31,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  conBtnText: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: ratio.fontPixel(16),
    lineHeight: ratio.fontPixel(24),
    letterSpacing: ratio.fontPixel(0.1),
  },
  conBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    fontSize: ratio.fontPixel(14),
    // fontWeight: '500',
    lineHeight: ratio.fontPixel(20),
    letterSpacing: ratio.fontPixel(0.1),
    color: Color.black,
    fontFamily: FontFamily.poppinsMedium,
    textTransform: 'uppercase',
  },
  infoText: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.bGrey,
    fontSize: ratio.fontPixel(14),
    width: ratio.widthPixel(310),
  },
  image: {
    justifyContent: 'flex-end',
    width: ratio.widthPixel(136),
    height: ratio.widthPixel(187),
  },
  imageOverlay: {
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    width: '100%',
    backgroundColor: Color.white,
    height: ratio.widthPixel(44),
    borderRadius: 22.567,
    borderTopLeftRadius: 0,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
  },
  star: {
    width: ratio.widthPixel(18.053),
    height: ratio.widthPixel(18.053),
  },
  rating_Stars: {
    flexDirection: 'row',
  },
  rating_Text: {
    fontFamily: FontFamily.poppinsBold,
    color: Color.black,
  },
  cardContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },
  TabsContainer: {
    paddingVertical: 10,
    maxHeight: ratio.widthPixel(60),
  },
  categoryTabText: {
    color: Color.black,
    fontSize: ratio.fontPixel(14),
    fontFamily: FontFamily.poppinsSemiBold,
    lineHeight: ratio.fontPixel(20),
    letterSpacing: ratio.fontPixel(0.1),
  },
  Tab: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: Color.white,
    // width: ratio.widthPixel(99),
    height: ratio.heightPixel(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginHorizontal: 10,
  },
  categoryContainer: {
    fontFamily: FontFamily.poppinsRegular,
    borderRadius: 30,
    backgroundColor: Color.light,
    height: ratio.widthPixel(550),
    marginTop: -105,
    paddingTop: 16,
  },
  indonesiaText: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: ratio.fontPixel(12),
    color: Color.white,
  },
  baliText: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: ratio.fontPixel(34),
    color: Color.white,
  },
  ratingText: {
    color: Color.black,
    fontFamily: FontFamily.poppinsBold,
  },
  rating: {
    width: ratio.widthPixel(80),
    height: ratio.widthPixel(28),
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  baliContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  bgImage: {
    height: ratio.heightPixel(385),
    // paddingTop: 30,
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default BookingScreen;
