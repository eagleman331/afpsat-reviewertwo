import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import Colors from '../../../../assets/constant/Colors';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const { width, height } = Dimensions.get('window');
const StartExamScreen = () => {
  return (
    <View className="flex-1 bg-slate-200">
      <View style={{marginTop:height*.15}}>
        <Text style={{fontSize:22}}>Are You Ready for the Exam</Text>
        <View
          style={{
            backgroundColor: 'black',
            width: width * 0.9,
            height: 2,
            marginTop: 10,
            alignSelf: 'baseline',
          }}
        />
      </View>
      <View style={{alignItems:'center', marginTop: height* .15}}>
      <SimpleLineIcons name="notebook" size={150} color="black" />
      </View>

      <View style={{alignItems:'center'}}>
         <TouchableOpacity onPress={() => router.push('ExamScreen')}>
                                <View
                                  style={{
                                    marginTop: height * 0.1,
                                    backgroundColor: Colors.pinkRed,
                                    width: width * 0.5,
                                    height: width* 0.5 / 3,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 10,
                                  }}>
                                  <Text style={{ color: 'white', fontSize:27 }}>START</Text>
                                </View>
                              </TouchableOpacity>
      </View>

    </View>
  );
};

export default StartExamScreen;
