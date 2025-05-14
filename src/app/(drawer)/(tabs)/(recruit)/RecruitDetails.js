

import {
    Dimensions,
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import React, { useLayoutEffect, useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import Header from "../../../../components/header/Header";
  import BackComponent from "../../../../components/BackComponent/BackComponent";
  import { TouchableOpacity } from "react-native";
  import Colors from "../../../../assets/constant/Colors";
  import * as WebBrowser from 'expo-web-browser';
  import { ScrollView } from "react-native";
  
  const { width, height } = Dimensions.get("window");
  const RecruitDetails = () => {
    
    return (
      <SafeAreaView>
        <Image
          source={require("../../../../assets/images/Background/GroupRappel.png")}
          style={styles.imageBack}
        />
        <BackComponent />
        <ScrollView
          style={{
            backgroundColor: Colors.light,
            width: width * 0.9,
            height: height * 0.7,
            alignSelf: "center",
            borderRadius: 15,
          }}
        >
          <View style={{ marginTop: 10, marginLeft: 10 }}>
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{ alignSelf: "center", fontSize: 20, fontFamily:"mrt-bold"}}
              >
                JOB Vacancies
              </Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={[styles.titleRecDetails, {fontFamily:"mrt-bold-medium"} ]}>Job Title:</Text>
              <Text style={[styles.subTitleRecDetails, {fontFamily:"source-sans3-medium"}]}>
                {/* {item.data.title} */}

                </Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={[styles.titleRecDetails, {fontFamily:"mrt-bold-medium"}]}>Qualifications:</Text>
              <Text style={[styles.subTitleRecDetails, {fontFamily:"source-sans3-medium"}]}>
                {/* {item.data.skills} */}
                </Text>
              <Text style={[styles.subTitleRecDetails, {fontFamily:"source-sans3-medium"}]}>
                {/* {item.data.skills2} */}

              </Text>
              <Text style={[styles.subTitleRecDetails, {fontFamily:"source-sans3-medium"}]}>
                {/* {item.data.skills3} */}

              </Text>
              <Text style={[styles.subTitleRecDetails, {fontFamily:"source-sans3-medium"}]}>
                {/* {item.data.skills4} */}

              </Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={[styles.titleRecDetails, {fontFamily:"mrt-bold-medium"}]}>Education:</Text>
              <Text style={[styles.subTitleRecDetails, {fontFamily:"source-sans3-medium"}]}>
                {/* {item.data.education} */}
                </Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={[styles.titleRecDetails, {fontFamily:"mrt-bold-medium"}]}>Description:</Text>
              <Text style={[styles.subTitleRecDetails, {fontFamily:"source-sans3-medium"}]}>{item.data.description}</Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={[styles.titleRecDetails, {fontFamily:"mrt-bold-medium"}]}>Salary:</Text>
              <Text style={[styles.subTitleRecDetails, {fontFamily:"source-sans3-medium"}]}>
                {/* {item.data.salary} Php */}
                </Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={[styles.titleRecDetails, {fontFamily:"mrt-bold-medium"}]}>Visit Recruitment Center:</Text>
              <TouchableOpacity 
            //   onPress={() =>  WebBrowser.openBrowserAsync(item.data.companyWeb)}
              >
             
              <Text 
            
              >Web: 
              <Text   style={styles.visitSite}>
                 {/* {item.data.companyWeb} */}
                 </Text>
       
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
  
      </SafeAreaView>
    );
  };
  
  export default RecruitDetails;

const styles = StyleSheet.create({
 titleRecDetails:{
  fontSize:16,
  fontWeight:"500"
 },
 subTitleRecDetails:{
  fontSize:15,
  fontWeight:"300"
 },
 visitSite:{
  fontSize:15,
  fontWeight:"700",
  color:Colors.blue
 },
 imageBack: {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  width: width,
  height: height,
},
hiringImage: {
  width: width,
  height: width,
},
});

