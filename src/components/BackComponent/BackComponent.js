import React from 'react';
import {
  View,
  Dimensions,
  BackHandler,
} from 'react-native';
import Colors from '../../assets/constant/Colors';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');
import { Entypo } from '@expo/vector-icons';
import { Icon } from '@rneui/themed';

const BackComponent = () => {
  const router = useRouter();

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
      {/* <TouchableOpacity onPress={() => router.replace('(drawer)')}>
        <View>
          <Icon
            raised
            reverse
            name="chevron-thin-left"
            type="entypo"
            size={20}
            color={Colors.gray}
            //   onPress={() => navigation.goBack()}
          />
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default BackComponent;