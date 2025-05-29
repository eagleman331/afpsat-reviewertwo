import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../utils/firebase';

const ExamScreen = () => {
  const { id, className, questionNum, statusPay } = useLocalSearchParams();
    const [data, setData] = useState([]);

    const [numberingQuestion, setNumberingQuestion] = useState(1);
    const [showScore, setShowScore] = useState(false);
    const [questionCounting, setQuestionCounting] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scoreNgayun, setScoreNgayun] = useState(0);
    const [testData, setTestData] = useState([]);
    const [questioIterate, setQuestioIterate] = useState([]);
    const [cardIndex, setCardIndex] = useState(0);

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

  console.log('Clicked item', id);
  console.log('Data', data);
  return (
    <View className="flex-1 bg-slate-200">
      <Text>ExamScreen</Text>
      <Text>{id}</Text>
    </View>
  );
};

export default ExamScreen;
