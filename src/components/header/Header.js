import React, { useContext, useLayoutEffect } from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../../assets/constant/Colors';
const { width, height } = Dimensions.get('window');
// import { AuthContext } from "../../context/AuthContext";

import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Header = () => {
  const router = useRouter();
  //   const auth = getAuth();
  //   const navigation = useNavigation();
  //   const { logout } = useContext(AuthContext);

  // async function signOutFireBase() {
  //     try {
  //       signOut(auth);
  //     } catch (error) {
  //         console.log('error signing out: ', error);
  //     }
  // }

  return (
    <View
      style={{
        width: width * 0.9,
        height: height * 0.1,
        // backgroundColor: "red",
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => router.push('(drawer)')}>
        <View>
          <Entypo name="menu" size={40} color={Colors.gold} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <Entypo name="log-out" size={30} color={Colors.gold} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
