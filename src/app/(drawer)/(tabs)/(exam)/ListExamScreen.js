import {
  Image,
  SafeAreaView,
  Dimensions,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Text,
} from 'react-native';
import React, { useLayoutEffect, useEffect, useContext, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
// import { StatusBar } from "expo-status-bar";

import Header from '../../../../components/header/Header';
// import {TestCard} from "../../../components/CardTest/TestCard";
import { StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../utils/firebase';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');
const ListExamScreen = () => {
  const [data, setData] = useState([]);
  const [dataShapes, setDataShapes] = useState([]);
  const [dataPremium, setDataPremium] = useState([]);
  const router = useRouter();

  // useEffect(() => {
  //   const unsubscribe = firestore()
  //     .collection("aFPExam")
  //     .onSnapshot((snapshot) =>
  //       setData(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           data: doc.data(),
  //         }))
  //       )
  //     );

  //   return unsubscribe;
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'aFPExam'));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        setData((prev) => [...prev, { id: doc.id, data: doc.data() }]);
      });
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      {/* <StatusBar hidden style="auto" /> */}
      <Image
        source={require('../../../../assets/images/Background/GroupRappel.png')}
        style={styles.imageBack}
      />
      <ScrollView>
        <Header />

        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: 'white', fontFamily: 'roboto-bold', fontSize: 16 }}>
            Free Aptitude Exam
          </Text>
          {/* <Divider inset={true} insetType="right" width={1.5} /> */}
        </View>
        <View style={{}}>
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            // snapToInterval={FULL_SIZE}
            decelerationRate="fast"
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    router.push({
                      pathname: 'ExamScreen',
                      params: {
                        id: item.id,
                        className: item.className,
                        questionNum: item.questionNum,
                        statusPay: item.statusPay,
                      },
                    })
                  }>
                  <View
                    style={{
                      width: width * 0.6,
                      height: 200,
                      backgroundColor: 'red',
                      marginLeft: 10,
                      borderRadius: 10,
                    }}>
                    <Text>Warren</Text>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                      <Entypo name="clipboard" size={150} color="black" />
                    </View>
                  </View>
                </TouchableOpacity>

                // <View key={index} className="w-4/5 h-1/5" style={{backgroundColor: "red"}}>

                // </View>

                // <TestCard navigation={navigation} item={item} itemAgency={itemAgency} cardImage={cardImage} index={index} test={false}/>
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListExamScreen;

const styles = StyleSheet.create({
  containerTitle: {
    color: `#000000`,
    fontSize: 20,
    textShadowRadius: 1,
    textShadowColor: '#f0f8ff',
  },
  imageBack: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: width,
    height: height,
  },
  containerCarouselExam: {
    alignContent: 'space-around',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  imageCatContainer: {
    width: width * 0.45,
    height: width * 0.3,
  },

  categoryImage: {
    width: width * 0.25,
    height: width * 0.3,
    resizeMode: 'stretch',
    borderRadius: 5,
  },
  textBox: { alignSelf: 'center', bottom: 30 },
  examLottie: {
    width: width * 0.35,
    height: width * 0.3,
  },
  lottieContainer: {
    marginTop: 5,
  },
});
