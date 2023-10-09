import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Color, FontFamily} from '../styles/consts/GlobalStyles';
import places from '../components/places';
import ratio from '../styles/consts/ratio';

const HomeScreen = ({navigation}) => {
  // console.log('places', places);

  const [currentScreen, setCurrentScreen] = useState(0);
  const [read, setRead] = useState(false);

  const placesEdited = places.slice(currentScreen, currentScreen + 1);

  const handleRead = () => {
    setRead(!read);
  };

  const handleChange = () => {
    if (currentScreen < 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      setCurrentScreen(currentScreen - 1);
    }
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: Color.light}]}>
      <StatusBar barStyle="dark-content" backgroundColor={Color.light} />
      <View>
        {/* topBar */}
        <View style={styles.topBarContainer}>
          <Image
            style={styles.profileIcon}
            source={require('../assets/images/icon/profileIcon.png')}
          />
          <Text style={styles.topText}>Hello, Sourany!</Text>
          <View style={styles.notificationIcon}>
            <Image
              style={styles.profileIcon}
              source={require('../assets/images/icon/notificationIcon.png')}
            />
          </View>
        </View>
        {/* topBar */}
        {/* aka inputs */}
        <View style={styles.inputsContainer}>
          {/* input */}
          <View style={styles.inputs}>
            <View
              style={[{flexDirection: 'row', alignItems: 'center', gap: 10}]}>
              <Image
                source={require('../assets/images/icon/search.png')}
                style={styles.leftIcon}
              />
              <Text style={styles.leftText}>Location</Text>
            </View>
            <View>
              <Image
                source={require('../assets/images/icon/filter.png')}
                style={[{height: '100%'}]}
              />
            </View>
          </View>
          {/* input */}
          {/* input 2*/}
          <View style={styles.inputs}>
            <View
              style={[{flexDirection: 'row', alignItems: 'center', gap: 10}]}>
              <Image
                source={require('../assets/images/icon/calendar.png')}
                style={styles.leftIcon}
              />
              <Text style={styles.leftText}>July 08 - July 15 </Text>
            </View>
          </View>
          {/* input 2*/}
          {/* input 3*/}
          <View style={[styles.inputs, {paddingRight: 0}]}>
            <View
              style={[{flexDirection: 'row', alignItems: 'center', gap: 10}]}>
              <Image
                source={require('../assets/images/icon/people.png')}
                style={styles.leftIcon}
              />
              <Text style={styles.leftText}>2 Guests</Text>
            </View>
            <View style={styles.rightIcons}>
              <View style={styles.addRemove}>
                <Image
                  style={styles.leftIcon}
                  source={require('../assets/images/icon/remove.png')}
                />
              </View>
              <View
                style={[
                  {height: 30, width: 1, backgroundColor: Color.grey},
                ]}></View>
              <View style={styles.addRemove}>
                <Image
                  style={styles.leftIcon}
                  source={require('../assets/images/icon/add.png')}
                />
              </View>
            </View>
          </View>
          {/* input */}
          {/* btn */}
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Search</Text>
            </TouchableOpacity>
          </View>
          {/* btn */}
        </View>
        {/* aka inputs */}
      </View>
      {/* ---------------2nd section---------------- */}

      {/* <ScrollView> */}
      <ScrollView contentContainerStyle={styles.infoContainer}>
        {placesEdited.map((place, i) => {
          return (
            <View key={i}>
              <Image style={styles.infoImage} source={place.image} />
              <Text style={styles.details}>Details</Text>
              {read ? (
                <TouchableOpacity onPress={handleRead}>
                  <Text style={styles.infoText}>{place.details}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={handleRead}>
                  <Text style={styles.infoText}>
                    {place.detailsLess}{' '}
                    <Text
                      style={{
                        color: Color.black,
                        fontFamily: FontFamily.poppinsMedium,
                      }}>
                      Read More
                    </Text>
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}

        {/* dock */}
        {read ? (
          <View style={styles.bottomContainer}>
            {currentScreen == '1' ? (
              <TouchableOpacity style={styles.bottomBtn} onPress={handleChange}>
                <Text style={styles.bottomBtnText}>Back</Text>
              </TouchableOpacity>
            ) : (
              <Text style={[{width: 85}]}></Text>
            )}
            <View
              style={[
                styles.bottomBtn,
                {
                  backgroundColor: '#C3CFE0',
                  width: ratio.widthPixel(129),
                  borderRadius: 100,
                },
              ]}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Booking');
                }}>
                <Text style={styles.bottomBtnText}>Learn more</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.bottomBtn} onPress={handleChange}>
              <Text style={styles.bottomBtnText}>Next</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.dock}>
            <ImageBackground
              style={styles.dockImage}
              source={require('../assets/images/homeDock.png')}>
              <TouchableOpacity>
                <Image
                  style={styles.dockIcon}
                  source={require('../assets/images/icon/home.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.dockIcon}
                  source={require('../assets/images/icon/searchWhite.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.dockIcon}
                  source={require('../assets/images/icon/location.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.dockIcon}
                  source={require('../assets/images/icon/account.png')}
                />
              </TouchableOpacity>
            </ImageBackground>
            <Image
              style={styles.dockBtn}
              source={require('../assets/images/icon/dockBtn.png')}
            />
          </View>
        )}
        {/* dock */}
      </ScrollView>
      {/* </ScrollView> */}
      {/* ---------------2nd section---------------- */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dockBtn: {
    position: 'absolute',
    top: -40,
  },
  dockIcon: {
    width: ratio.widthPixel(44),
    height: ratio.widthPixel(44),
  },
  dockImage: {
    width: ratio.widthPixel(340),
    height: ratio.widthPixel(71),
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dock: {
    position: 'absolute',
    bottom: 6,
    alignItems: 'center',
    width: '100%',
  },
  bottomBtn: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  bottomBtnText: {
    color: '#313033',
    fontSize: ratio.fontPixel(14),
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: ratio.fontPixel(20),
    letterSpacing: ratio.fontPixel(0.1),
  },
  bottomContainer: {
    marginTop: 9,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  notificationIcon: {
    elevation: 20,
    borderRadius: 1,
  },
  details: {
    fontSize: ratio.fontPixel(14),
    // fontWeight: '500',
    lineHeight: ratio.fontPixel(20),
    letterSpacing: ratio.fontPixel(0.1),
    color: Color.black,
    fontFamily: FontFamily.poppinsMedium,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  infoText: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.bGrey,
    fontSize: ratio.fontPixel(14),
    width: ratio.widthPixel(310),
  },
  infoImage: {
    width: ratio.widthPixel(320),
    height: ratio.widthPixel(200),
    borderRadius: 20,
    marginBottom: 20,
  },
  infoContainer: {
    flex: 1,
    backgroundColor: Color.secondary,
    marginTop: 7.97,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    alignItems: 'center',
  },
  btnText: {
    fontSize: ratio.fontPixel(14),
    fontWeight: '500',
    lineHeight: ratio.fontPixel(24),
    letterSpacing: ratio.fontPixel(0.1),
    fontFamily: FontFamily.poppinsRegular,
    color: Color.white,
  },
  btn: {
    width: ratio.widthPixel(136),
    height: ratio.widthPixel(44),
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: Color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
  },
  btnContainer: {
    alignItems: 'center',
  },
  addRemove: {
    height: ratio.widthPixel(42.7),
    width: ratio.widthPixel(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftText: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: 'center',
    fontSize: ratio.fontPixel(16),
    lineHeight: ratio.fontPixel(20),
    color: Color.black,
    letterSpacing: ratio.fontPixel(0.32),
  },
  leftIcon: {
    width: ratio.widthPixel(24),
    height: ratio.widthPixel(24),
  },
  inputs: {
    width: '100%',
    height: ratio.widthPixel(42.7),
    paddingHorizontal: 20,
    backgroundColor: Color.white,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 13,
    gap: 10,
  },
  container: {
    flex: 1,
    fontFamily: FontFamily.poppinsRegular,
  },
  topBarContainer: {
    paddingTop: 18,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileIcon: {
    width: ratio.widthPixel(36),
    height: ratio.widthPixel(36),
  },
  topText: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
    fontSize: ratio.fontPixel(16),
    fontWeight: '600',
  },
});

export default HomeScreen;
