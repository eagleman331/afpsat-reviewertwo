import { View, Text, Dimensions, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import Colors from '../../../../assets/constant/Colors';
import { Fontisto } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router, useLocalSearchParams } from 'expo-router';

const { width, height } = Dimensions.get('window');
const ExamResult = () => {
  const { answerTest, scoreNgayun, numQuestion } = useLocalSearchParams();

  console.log('ScoreNgayun', scoreNgayun);
  console.log('numQuestion', numQuestion);
  return (
    <View className="flex-1 bg-slate-200">
      <View
        style={{
          marginTop: height * 0.15,
          width,
          alignItems: 'center',
          //  transform:[{translateY}],
        }}>
        <View
          style={{
            borderRadius: 20,
            width: width * 0.9,
            backgroundColor: 'white',
          }}>
          <View style={{ alignItems: 'center' }}>
            <Text>Result Exam #1</Text>
          </View>
          <View
            style={{
              marginTop: 5,
              paddingLeft: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>Question # 1/40</Text>
            <Text style={{ marginRight: 10 }}>Time: --</Text>
          </View>
          <View
            style={{
              backgroundColor: 'black',
              width: width * 0.7,
              height: 1,
              marginTop: 10,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: height * 0.05,
            }}>
            <View
              style={{
                backgroundColor: Colors.pinkRed,
                width: 100,
                height: height * 0.15,
                borderReadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ color: Colors.light }}>
                {scoreNgayun}/{numQuestion}
              </Text>
              <View style={{ marginLeft: 5 }}>
                <AntDesign name="checksquareo" size={24} color="white" />
              </View>
            </View>

            <View
              style={{
                backgroundColor: Colors.pinkRed,
                width: 100,
                height: height * 0.15,
                borderReadius: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ color: Colors.light }}>
                {Math.round((scoreNgayun / numQuestion) * 100)}%
              </Text>
              <View style={{ marginLeft: 5 }}>
                <AntDesign name="piechart" size={24} color="white" />
              </View>
            </View>
          </View>

          <View style={{ marginLeft: 5, marginTop: height * 0.07, alignItems: 'center' }}>
            <Text>Do your Best Next Time</Text>
            <View
              style={{
                backgroundColor: 'black',
                width: width * 0.7,
                height: 1,
                marginTop: 1,
                alignSelf: 'center',
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: height * 0.05,
              paddingBottom: 20,
            }}>
            <TouchableOpacity onPress={() => router.push('ExamScreen')}>
              <View
                style={{
                  backgroundColor: Colors.pinkRed,
                  borderRadius: 10,
                  height: height * 0.07,
                  borderReadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <Text style={{ color: Colors.light }}>Try Again</Text>
                <View style={{ marginLeft: 5 }}>
                  <Entypo name="cycle" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Alert.alert('Go to Review')}>
              <View
                style={{
                  backgroundColor: Colors.pinkRed,
                  borderRadius: 10,
                  height: height * 0.07,
                  borderReadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <Text style={{ color: Colors.light }}>Review</Text>
                <View style={{ marginLeft: 5 }}>
                  <Entypo name="eye" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExamResult;
