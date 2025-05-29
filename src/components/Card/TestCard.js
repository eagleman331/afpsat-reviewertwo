import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { Dimensions } from "react-native";
import { Image } from "react-native";
// import LottieView from "lottie-react-native";

// import test from "../../assets/lottie/test.json";
import Colors from "../../assets/constant/Colors";

const { width, height } = Dimensions.get("window");

//  const CardExamSelector = (itemAgency, index) => {
//   if (itemAgency == "aFP") {
//     return "AFPSAT";
//   } else if (itemAgency == "police") {
//     return "police";
//   }
//   else {
//     console.log("error and card", itemAgency);
//   }
// };

export const TestCard = ({
  navigation,
  itemAgency,
  cardImage,
  index,
  item,
}) => {

  return (
    <View style={styles.lottieContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("PreExam", { item, itemAgency, cardImage })
        }
      >
        {/* <Card containerStyle={{ borderRadius: 20, backgroundColor: Colors.green2, borderColor:Colors.yellow }} wrapperStyle={{}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "roboto-medium",
              alignSelf: "center",
            }}
          >
            Exam # {index + 1}
          </Text>
     
          <View
            style={{
              position: "relative",
              alignItems: "center",
            }}
          >
            <View style={styles.examLottie}>
              <LottieView
                style={{ width: width * 0.3, alignSelf: "center" }}
                source={test}
                autoPlay
                loop
              />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "source-sans3-medium",
                alignSelf: "center",
              }}
            >
              Click to Start
            </Text>
          </View>
        </Card> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageCatContainer: { width: width * 0.45, height: width * 0.3 },
  categoryImage: {
    width: width * 0.25,
    height: width * 0.3,
    resizeMode: "stretch",
    borderRadius: 5,
  },
  lottieContainer: {
    marginTop: 5,
  },
  examLottie: {
    width: width * 0.35,
    height: width * 0.3,
  },
});