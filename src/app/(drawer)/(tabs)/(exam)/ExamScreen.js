import { View, Text, ScrollView, Dimensions, TouchableOpacity, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../utils/firebase';
import Entypo from '@expo/vector-icons/Entypo';
import Colors from '../../../../assets/constant/Colors';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { FlatList } from 'react-native';

const { width, height } = Dimensions.get('window');

const ExamScreen = () => {
  // const { answerTest,scoreNgayun, numQuestion } = useLocalSearchParams();
  const id = '3abd941c-3a8d-4c40-a528-c80c4e1c5451';
  const [data, setData] = useState([]);

  const [numberingQuestion, setNumberingQuestion] = useState(1);
  const [showScore, setShowScore] = useState(false);
  const [questionCounting, setQuestionCounting] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scoreNgayun, setScoreNgayun] = useState(0);
  const [testData, setTestData] = useState([]);
  const [questioIterate, setQuestioIterate] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [answerTest, setAnswerTest] = useState([]);
  const [questionLenght, setQuestionLenght] = useState(0);

  const numQuestion = data.length;
  const scrollX = useRef(new Animated.Value(0)).current;
  const progress = Animated.modulo(Animated.divide(scrollX, width), width);
  const ref = useRef();

  // const EndExam = () => {
  //   setQuestionLenght(numQuestion);
  //   navigation.navigate("Result", { numQuestion, scoreNgayun, cardImage });
  // };

  function resultLipat() {
    router.push('ExamResult');
  }

  const NextQuestionPlease = (sample, item) => {
    setQuestionCounting(questionCounting + 1);
    const objQuestion = {
      id: questionCounting,
      question: item.data.question,
      answer: item.data.answer,
      choice2: item.data.choice2,
      choice3: item.data.choice3,
      choice4: item.data.choice4,
      pickAnswer: sample,
    };

    setAnswerTest([...answerTest, objQuestion]);
    if (sample === item.data.answer) {
      setScoreNgayun(scoreNgayun + 1);
    } else {
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < numQuestion) {
      setCurrentQuestion(nextQuestion);
      const lastquestion = currentQuestion + 2;
      if (lastquestion == numQuestion) {
        setShowScore(true);
      }
    } else {
      setQuestionLenght(numQuestion);
      router.push({ pathname: 'ExamResult', params: { answerTest, scoreNgayun, numQuestion } });
    }
  };

  const skipQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < numQuestion) {
      setCurrentQuestion(nextQuestion);
      const lastquestion = currentQuestion + 2;
      if (lastquestion == numQuestion) {
        setShowScore(true);
      }
    } else {
      setQuestionLenght(numQuestion);
      router.push('ExamResult');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'aFPExam', id, id));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setData((prev) => [...prev, { id: doc.id, data: doc.data() }]);
      });
    };
    fetchData();
  }, []);

  return (
    <View className="flex-1 bg-slate-200">
      <View
        style={{
          marginTop: 50,
          width,
          alignItems: 'center',
          //  transform:[{translateY}],
        }}>
        <ScrollView>
          <Animated.FlatList
            showsHorizontalScrollIndicator={false}
            data={data}
            ref={ref}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
              useNativeDriver: true,
            })}
            keyExtractor={(item) => item.id}
            horizontal
            onMomentumScrollEnd={(ev) => {
              setCardIndex(Math.floor(ev.nativeEvent.contentOffset.x / width));
            }}
            renderItem={({ item, index }) => {

              var ChoiceOptions = [
                item.data.answer,
                item.data.choice2,
                item.data.choice3,
                item.data.choice4,
              ];
              function listRandomize(a, b) {
                return Math.random() - 0.5;
              }

              const choiceData = ChoiceOptions.sort(listRandomize);
              const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0, 1, 0],
              });
              const translateY = scrollX.interpolate({
                inputRange,
                outputRange: [50, 0, 20],
              });
              return (
                <Animated.View
                  key={index}
                  style={{
                    marginTop: 30,
                    opacity,
                    width,
                    alignItems: 'center',
                    //  transform:[{translateY}],
                    transform: [
                      {
                        rotateY: progress.interpolate({
                          inputRange: [0, 0.5, 1],
                          outputRange: ['0deg', '180deg', '0deg'],
                        }),
                      },
                    ],
                  }}>
                  <View
                    style={{
                      borderRadius: 20,
                      width: width * 0.9,
                      backgroundColor: 'white',
                    }}>
                    <View style={{ alignItems: 'center' }}>
                      <Text>Exam #1</Text>
                    </View>
                    <View style={{ marginTop: 5, paddingLeft: 5 }}>
                      <Text>
                        Question # {index + 1}/ {numQuestion}
                      </Text>
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
                    <View style={{ marginTop: 10, paddingLeft: 5 }}>
                      <Text>{item.data.question}?</Text>
                    </View>

                    <View style={{ marginLeft: 5, marginTop: 20 }}>
                      <Text>Choices:</Text>
                      <View
                        style={{
                          backgroundColor: 'black',
                          width: width * 0.7,
                          height: 1,
                          marginTop: 1,
                          alignSelf: 'baseline',
                        }}
                      />
                    </View>

                    <View style={{ marginTop: 10 }}>
                      {choiceData.map((sample, k) => {
                        return (
                          <View key={k}>
                            <TouchableOpacity
                              onPress={() => {
                                ref?.current?.scrollToOffset({
                                  offset: (index + 1) * width,
                                  animated: true,
                                });
                                NextQuestionPlease(sample, item);
                              }}>
                              <View
                                style={{
                                  borderRadius: 5,
                                  borderColor: Colors.gray,
                                  borderWidth: 0.5,
                                  flexDirection: 'row',
                                  marginRight: 5,
                                  marginLeft: 5,

                                  alignItems: 'center',
                                  marginBottom: 20,
                                }}>
                                {/* Icon */}
                                <View style={{ marginLeft: 2 }}>
                                  <FontAwesome5 name="square" size={30} color={Colors.gray} />
                                </View>
                                {/* Text */}

                                <Text style={{ padding: 10, marginRight: 10 }}>{sample}</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                        );
                      })}
                    </View>
                    <View
                      style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                      <TouchableOpacity onPress={() => router.push('ExamResult')}>
                        <View
                          style={{
                            backgroundColor: Colors.pinkRed,
                            width: width * 0.25,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                          }}>
                          <Text style={{ color: 'white' }}>END</Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => skipQuestion()}>
                        <View
                          style={{
                            flexDirection: 'row',
                            backgroundColor: Colors.pinkRed,
                            width: width * 0.25,
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                          }}>
                          <Text style={{ marginRight: 2, color: 'white' }}>SKIP</Text>
                          <Entypo name="clipboard" size={20} color="white" />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Animated.View>
              );
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default ExamScreen;
