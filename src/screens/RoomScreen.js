import {
  View,
  Text,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {Color, FontFamily} from '../styles/consts/GlobalStyles';
import ratio from '../styles/consts/ratio';
import imagesData from '../library/consts/imagesData';
import facilities from '../library/consts/facilities';
import RoomHeader from '../components/RoomHeader';

const RoomScreen = ({navigation}) => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [readMore, setReadMore] = useState(false);
  const now = currentScreen + 1;
  const imagesDataEdited = imagesData.slice(currentScreen, now);

  const handleChange = () => {
    if (now < 5) {
      setCurrentScreen(currentScreen + 1);
    } else {
      return;
    }
  };
  const handleChangePrev = () => {
    if (now > 1) {
      setCurrentScreen(currentScreen - 1);
    } else {
      return;
    }
  };

  return (
    <View>
      <ScrollView>
        <StatusBar translucent={false} backgroundColor={Color.grey} />
        <View>
          {/* header */}
          <RoomHeader />
          {/* header */}
        </View>
        {/* top carousel */}
        <View style={styles.carouselContainer}>
          {imagesDataEdited.map((item, index) => {
            return (
              <View key={index} style={styles.mainImageContainer}>
                <ImageBackground style={styles.mainImage} source={item.image}>
                  <View style={styles.carouselBtnContainer}>
                    <TouchableOpacity
                      style={
                        now == 1
                          ? [styles.carouselBtn, {opacity: 0}]
                          : styles.carouselBtn
                      }
                      onPress={handleChangePrev}>
                      <Image
                        source={require('../assets/images/icon/chevron_left.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        now == 5
                          ? [styles.carouselBtn, {opacity: 0}]
                          : styles.carouselBtn
                      }
                      onPress={handleChange}>
                      <Image
                        source={require('../assets/images/icon/chevron_right.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
          <View style={styles.smallImageContainer}>
            {imagesData.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setCurrentScreen(item.id - 1)}>
                  <ImageBackground
                    style={[styles.smallImage]}
                    source={item.image}>
                    {item.id == now ? (
                      ''
                    ) : (
                      <View
                        style={[
                          item.id == now ? '' : styles.smallImageOverlay,
                        ]}>
                        {item.id == 5 ? (
                          <Text style={styles.overlayText}>10+</Text>
                        ) : (
                          ''
                        )}
                      </View>
                    )}
                  </ImageBackground>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.villaContainer}>
          <View style={styles.villa}>
            <Text style={styles.villaText}>Villa Kayu Lama</Text>
            <View style={styles.starContainer}>
              <Image
                style={styles.star}
                source={require('../assets/images/icon/star.png')}
              />
              <Text style={styles.villaTextStar}>4.5</Text>
            </View>
          </View>
          <View style={styles.mapPinContainer}>
            <Image
              style={styles.mapPin}
              source={require('../assets/images/icon/mapPin.png')}
            />
            <Text style={styles.mapPinText}>Ubud, Indonesia</Text>
          </View>
        </View>
        <View style={styles.line}></View>
        {/* top carousel */}
        <View style={{height: ratio.widthPixel(400)}}>
          <ScrollView>
            <View style={styles.bottom}>
              <View style={{flexDirection: 'row', gap: 10}}>
                <TouchableOpacity style={styles.detBtn}>
                  <Text style={styles.detBtnText}>Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rewBtn}>
                  <Text style={[styles.detBtnText, {color: Color.black}]}>
                    Reviews
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => setReadMore(!readMore)}>
                {!readMore ? (
                  <Text style={styles.bottomText}>
                    Surrounded by rice fields, Villa Kayu Lama offers a peaceful
                    retreat in Ubud. Guests can take a leisurely swim in the
                    privat...{' '}
                    {!readMore && (
                      <Text style={{color: Color.black}}>Read More</Text>
                    )}
                  </Text>
                ) : (
                  <Text style={styles.bottomText}>
                    Surrounded by rice fields, Villa Kayu Lama offers a peaceful
                    retreat in Ubud. Guests can take a leisurely swim in the
                    private
                    <Text>
                      pools or enjoy relaxing in-villa massages. Free shuttles
                      to Ubud centre is available thrice a day based on
                      schedule.
                    </Text>
                  </Text>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.facilitiesContainer}>
              <View>
                <Text style={styles.facilitiesText}>FACILITIES</Text>
              </View>
              <ScrollView
                contentContainerStyle={styles.facilitiesImageContainer}
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                {facilities.map((item, index) => {
                  return (
                    <View style={{width: ratio.widthPixel(64)}} key={index}>
                      <Image
                        style={styles.facilitiesImage}
                        source={item.image}
                      />
                      <Text style={styles.facilities_Text}>{item.text}</Text>
                    </View>
                  );
                })}
              </ScrollView>
              <View style={styles.mapImageContainer}>
                <Image
                  style={styles.mapImage}
                  source={require('../assets/images/map.png')}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      {!readMore && (
        <View style={styles.dockContainer}>
          <View style={styles.dock}>
            <View>
              <Text style={styles.nightText}>
                $60<Text style={{fontSize: ratio.fontPixel(16)}}>/Night</Text>
              </Text>
            </View>
            <TouchableOpacity
              style={styles.conBtn}
              onPress={() => {
                navigation.navigate('Room');
              }}>
              <Text style={styles.conBtnText}>Book Now</Text>
              <Image
                style={{width: ratio.widthPixel(15)}}
                source={require('../assets/images/icon/rightArrow.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default RoomScreen;

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
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  conBtnText: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: ratio.fontPixel(16),
    lineHeight: ratio.fontPixel(24),
    letterSpacing: ratio.fontPixel(0.1),
    color: Color.white,
  },
  nightText: {
    color: Color.white,
    fontSize: ratio.fontPixel(35),
    fontFamily: FontFamily.poppinsRegular,
  },
  dock: {
    width: '100%',
    backgroundColor: Color.grey,
    height: ratio.widthPixel(76),
    borderRadius: 30,
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 30,
  },
  dockContainer: {
    height: ratio.widthPixel(100),
    width: '100%',
    position: 'absolute',
    borderRadius: ratio.widthPixel(40),
    elevation: ratio.widthPixel(15),
    bottom: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mapImage: {
    width: ratio.widthPixel(320),
    height: ratio.widthPixel(171),
    borderRadius: 8,
  },
  mapImageContainer: {
    Bottom: 200,
    elevation: 25,
    borderRadius: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  facilities_Text: {
    color: Color.black,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: ratio.fontPixel(12),
    lineHeight: ratio.fontPixel(20),
    letterSpacing: ratio.fontPixel(0.4),
    alignSelf: 'center',
  },
  facilitiesImage: {
    width: ratio.widthPixel(64),
    height: ratio.widthPixel(64),
  },
  facilitiesImageContainer: {
    flexDirection: 'row',
    gap: 17,
    paddingStart: 20,
  },
  facilitiesText: {
    color: Color.black,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: ratio.fontPixel(15),
    lineHeight: ratio.fontPixel(20),
    letterSpacing: ratio.fontPixel(0.1),
    paddingHorizontal: 20,
  },
  facilitiesContainer: {
    paddingBottom: 10,
    gap: 10,
  },
  bottomText: {
    color: 'rgba(0, 0, 0, 0.60)',
    paddingTop: 10,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: ratio.fontPixel(15),
  },
  rewBtn: {
    backgroundColor: Color.secondary,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 16,
    height: ratio.widthPixel(27),
    justifyContent: 'center',
    alignItems: 'center',
  },
  detBtnText: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: ratio.fontPixel(14),
    lineHeight: ratio.fontPixel(17),
    color: Color.white,
  },
  detBtn: {
    backgroundColor: Color.primary,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 16,
    height: ratio.widthPixel(27),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    elevation: -10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  line: {
    width: '100%',
    height: ratio.widthPixel(1),
    backgroundColor: '#C4C4C4',
  },
  mapPinText: {
    color: Color.grey,
    fontSize: ratio.fontPixel(14),
    fontFamily: FontFamily.poppinsMedium,
  },
  mapPin: {
    width: ratio.widthPixel(24),
    height: ratio.widthPixel(24),
    marginBottom: 2,
  },
  mapPinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    width: ratio.widthPixel(16),
    height: ratio.widthPixel(16),
  },
  villaTextStar: {
    color: Color.black,
    fontSize: ratio.fontPixel(12),
    fontFamily: FontFamily.poppinsSemiBold,
    lineHeight: ratio.fontPixel(25),
  },
  villaText: {
    color: Color.black,
    fontSize: ratio.fontPixel(18),
    fontFamily: FontFamily.poppinsRegular,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    height: ratio.widthPixel(19),
  },
  villa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  villaContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  carouselBtn: {
    backgroundColor: Color.white,
    width: ratio.widthPixel(36),
    height: ratio.widthPixel(36),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 36,
  },
  carouselBtnContainer: {
    paddingHorizontal: 20,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  overlayText: {
    fontFamily: FontFamily.poppinsMedium,
    fontSize: ratio.fontPixel(15),
    lineHeight: ratio.fontPixel(17.652),
    color: Color.white,
    opacity: 0.6,
  },
  smallImageContainer: {
    flexDirection: 'row',
    gap: 1,
    justifyContent: 'space-between',
  },
  smallImage: {
    width: ratio.widthPixel(71),
    height: ratio.widthPixel(63),
  },
  smallImageOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  },
  mainImage: {
    width: '100%',
    minHeight: ratio.widthPixel(285),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainImageContainer: {
    maxHeight: ratio.widthPixel(285),
    overflow: 'hidden',
  },
  carouselContainer: {
    overflow: 'hidden',
    borderRadius: 30,
    gap: 1,
  },
});
