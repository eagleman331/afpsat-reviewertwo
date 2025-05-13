import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useRef, useState, useLayoutEffect } from 'react';
import OCSlogoNo from '../../../../assets/logo/OCSlogoNo.png';
import { ScrollView } from 'react-native-gesture-handler';
import { openBrowserAsync } from 'expo-web-browser';

const { width, height } = Dimensions.get('window');
import Colors from '../../../../assets/constant/Colors';

import { NarrativeData } from '../../../../assets/Data/NarrativeData';

const HomeScreen = ({ navigation }) => {
  const LagayIndentation = '       ';
  const socialMedaApps = ['facebook', 'twitter', 'instagram'];

  const GoToFacebook = () => {
    openBrowserAsync('https://www.facebook.com/profile.php?id=100089656629408');
  };
  //

  return (
    <View>
      <Image
        source={require('../../../../assets/images/Background/GroupRappel.png')}
        style={styles.imageBack}
      />
      <ScrollView>
        <TouchableOpacity>
          <View style={styles.logoImageContainer}>
            <Image source={OCSlogoNo} style={styles.logoImage} />
          </View>
        </TouchableOpacity>

        <View style={styles.firstTextContainer}>
          <View style={styles.titleHomePage}>
            <Text style={{ fontSize: 16, textDecorationLine: 'underline', fontFamily: 'mrt-bold' }}>
              Looking to land your dream job?
            </Text>
          </View>
          {NarrativeData.map((item, index) => {
            return (
              <Text style={[styles.firstText, { fontFamily: 'roboto-medium' }]} key={index}>
                {LagayIndentation}
                {item.core}
              </Text>
            );
          })}
        </View>
        {/* <View style={styles.socialmediaContainer}>
          <Text style={[styles.socialMediaTitleContainer, {fontFamily:"roboto-medium"} ]}>Follow Us:</Text>
          <View style={styles.socialAllMedia}>
            {socialMedaApps.map((socialApp, index) => {
              return (
                <View key={index} style={styles.socialMedia}>
                  <TouchableOpacity onPress={GoToFacebook}>
                    <SocialIcon type={socialApp} iconType={"font-awesome"} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View> */}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  imageBack: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: width,
    height: height,
  },

  logoImage: {
    position: 'relative',
    height: height * 0.2,
    width: width * 0.4,
    resizeMode: 'contain',
    borderRadius: 15,
  },
  logoImageContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  firstTextContainer: {
    alignSelf: 'center',
    backgroundColor: Colors.gray,
    width: width * 0.9,
    borderRadius: 15,
    marginTop: 20,
    opacity: 0.9,
  },
  titleHomePage: {
    marginTop: 10,
    alignItems: 'center',
  },
  firstText: {
    padding: 10,
    opacity: 2,
  },
  socialmediaContainer: {
    alignSelf: 'center',
    backgroundColor: Colors.gray,
    width: width * 0.9,
    borderRadius: 15,
    marginTop: 20,
    opacity: 0.9,
    marginBottom: 10,
  },
  socialMediaTitleContainer: {
    alignSelf: 'center',
  },
  socialAllMedia: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialMedia: {},
});
