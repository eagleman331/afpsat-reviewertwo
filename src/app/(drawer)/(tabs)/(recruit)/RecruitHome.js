import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../../../components/header/Header';
import { TouchableOpacity } from 'react-native';
import Colors from '../../../../assets/constant/Colors';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../utils/firebase';

const { width, height } = Dimensions.get('window');
const RecruitHome = ( ) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'recruitHome'));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        setData((prev) => [...prev, { id: doc.id, data: doc.data() }]);
      });
    };
    fetchData();
  }, []);

  return (
    <View>
      <Image
        source={require('../../../../assets/images/Background/GroupRappel.png')}
        style={styles.imageBack}
      />
      <Header />
      <View style={{ alignItems: 'center', width: width, height: height * 0.75 }}>
        <FlatList
          data={data}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            var imageFB = item.data.facebookPic;
            console.log('item', item);
            return (
              <TouchableOpacity key={index}>
                <View>
                  <View
                    style={{
                      height: height * 0.23,
                      width: width * 0.9,
                      backgroundColor: Colors.light,
                      borderRadius: 10,
                      marginBottom: 20,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          paddingLeft: 10,
                          paddingTop: 5,
                          paddingBottom: 5,
                        }}>
                        <Text style={{ fontFamily: 'roboto-medium' }}>
                          Date: {new Date(item.data.timestamp.toDate()).toUTCString().slice(5, 16)}
                        </Text>
                      </View>
                      <View style={{ alignSelf: 'center', marginRight: 10 }}>
                        {/* <Badge
                          value="Verified"
                          status="success"
                          containerStyle={{ padding: 3 }}
                          textStyle={{fontFamily:"source-sans3-italic"}}
                        /> */}
                      </View>
                    </View>
                    {/* <Card.Divider /> */}

                    <View style={{ flexDirection: 'row' }}>
                      <View
                        style={{
                          height: 100,
                          width: 100,
                          marginLeft: 5,
                        }}>
                        <Image
                          source={{
                            uri: imageFB,
                          }}
                          style={{
                            resizeMode: 'stretch',
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </View>
                      <View
                        style={{
                          height: 110,
                          width: width * 0.55,
                        }}>
                        <View style={{ marginLeft: 10, flexDirection: 'row' }}>
                          <View style={styles.variable}>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              }}>
                              <Text style={{ fontFamily: 'roboto-medium' }}>Job: </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              }}>
                              <Text style={{ fontFamily: 'roboto-medium' }}>Agency: </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              }}>
                              <Text style={{ fontFamily: 'roboto-medium' }}>Salary: </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              }}>
                              <Text style={{ fontFamily: 'roboto-medium' }}>Location: </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              }}>
                              <Text style={{ fontFamily: 'roboto-medium' }}>Quota: </Text>
                            </View>
                          </View>

                          <View style={{ marginLeft: 10 }}>
                            <View>
                              <Text style={[styles.title, { fontFamily: 'source-sans3-medium' }]}>
                                {item.data.title}
                              </Text>
                            </View>

                            <View>
                              <Text style={[styles.title, { fontFamily: 'source-sans3-medium' }]}>
                                {item.data.company}
                              </Text>
                            </View>
                            <View>
                              <Text style={[styles.title, { fontFamily: 'source-sans3-medium' }]}>
                                {item.data.salary}Php
                              </Text>
                            </View>
                            <View>
                              <Text style={[styles.title, { fontFamily: 'source-sans3-medium' }]}>
                                {item.data.location}
                              </Text>
                            </View>
                            <View>
                              <Text style={[styles.title, { fontFamily: 'source-sans3-medium' }]}>
                                {item.data.quota}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default RecruitHome;

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
  hiringImage: {
    width: width,
    height: width,
  },
  title: { fontWeight: '500' },
  subTitle: {
    fontWeight: '500',
  },
});
