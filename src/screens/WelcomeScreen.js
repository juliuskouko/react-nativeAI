import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import { Logo } from '../../assets';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.user);
  // const [isLoading, setIsLoading] = useState(true);
  // const [chats, setChats] = useState(null);

  return (
    <View className="flex-1">
      <SafeAreaView>
        <View className="w-full flex-row items-center justify-between px-4 py-2">
          <Image source={Logo} className="w-12 h-12" resizeMode="contain" />

          <Text style={styles.titleText}>FutureAI</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileScreen")}
            className="w-12 h-12 rounded-full border border-primary flex items-center justify-center"
          >
            <Image
              source={{ uri: user?.profilePic }}
              className="w-full h-full"
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>

        {/* scrolling area */}
        <ScrollView className="w-full px-4 pt-4">
          <View className="w-full">
            

            <View className="w-full  mt-6 space-y-3">
              {/* px-6 */}
              <View className="w-full flex-row items-center justify-between">
                <Text className="text-base font-semibold text-primaryText">
                  Latest News
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-semibold uppercase text-primaryText ">
                    View All
                  </Text>
                </TouchableOpacity>
              </View>

              <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 16, // Adjust as needed
                }}>
                <View className="w-full h- flex-row items-center justify-between">
                  <TouchableOpacity style={{ width: 250, height: 250 }} className="w-24 h-24 m-1 rounded-xl bg-gray-300 overflow-hidden">
                    <Image
                      source={{
                        uri: "https://cdn.pixabay.com/photo/2023/06/29/10/33/lion-8096155_1280.png",
                      }}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                    <View className="absolute w-full h-full items-center justify-center bg-[#00000068]">
                      <Text className="text-base text-white font-semibold">Read more on You AI</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ width: 250, height: 250 }} className="w-24 h-24 m-1 rounded-xl bg-gray-300 overflow-hidden">
                    <Image
                      source={{
                        uri: "https://cdn.pixabay.com/photo/2023/07/02/18/49/cup-8102791_640.jpg",
                      }}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                    <View className="absolute w-full h-full items-center justify-center bg-[#00000068]">
                      <Text className="text-base text-white font-semibold">250+</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ width: 250, height: 250 }} className="w-24 h-24 m-1 rounded-xl bg-gray-300 overflow-hidden relative">
                    <Image
                      source={{
                        uri: "https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_640.jpg",
                      }}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                    <View className="absolute w-full h-full items-center justify-center bg-[#00000068]">
                      <Text className="text-base text-white font-semibold">250+</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: 250, height: 250 }} className="w-24 h-24 m-1 rounded-xl bg-gray-300 overflow-hidden">
                    <Image
                      source={{
                        uri: "https://cdn.pixabay.com/photo/2023/07/02/18/49/cup-8102791_640.jpg",
                      }}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                    <View className="absolute w-full h-full items-center justify-center bg-[#00000068]">
                      <Text className="text-base text-white font-semibold">250+</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ width: 250, height: 250 }} className="w-24 h-24 m-1 rounded-xl bg-gray-300 overflow-hidden relative">
                    <Image
                      source={{
                        uri: "https://cdn.pixabay.com/photo/2023/07/07/17/47/sushi-8113165_640.jpg",
                      }}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                    <View className="absolute w-full h-full items-center justify-center bg-[#00000068]">
                      <Text className="text-base text-white font-semibold">250+</Text>
                    </View>
                  </TouchableOpacity>
                </View>

              </ScrollView>

              <ScrollView>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Home')}
                  style={styles.section}>
                  <View style={styles.sectionContent}>
                    <Image
                      source={require('../../assets/images/chatgptIcon.png')}
                      style={styles.sectionIcon}
                    />
                    <Text style={styles.sectionTitle}>ChatGPT</Text>
                  </View>
                  <Text style={styles.sectionDescription}>
                    ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.
                  </Text>
                </TouchableOpacity>


                <TouchableOpacity
                  onPress={() => navigation.navigate('Notes')}
                  style={styles.section}>
                  <View style={styles.sectionContent}>
                    <Image
                      source={require('../../assets/images/chatgptIcon.png')}
                      style={styles.sectionIcon}
                    />
                    <Text style={styles.sectionTitle}>Notes</Text>
                  </View>
                  <Text style={styles.sectionDescription}>
                    ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.
                  </Text>
                </TouchableOpacity>

                {/* <TouchableOpacity
                  onPress={() => navigation.navigate('Notes')}
                  style={styles.section}>
                  <View style={styles.sectionContent}>
                    <Image
                      source={require('../../assets/images/chatgptIcon.png')}
                      style={styles.sectionIcon}
                    />
                    <Text style={styles.sectionTitle}>Notes</Text>
                  </View>
                  <Text style={styles.sectionDescription}>
                    ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.
                  </Text>
                </TouchableOpacity> */}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
    // <SafeAreaView style={styles.container}>
    //   {/* Gradient Background */}
    //   <View style={styles.background} />

    //   {/* Title */}
    //   <View style={styles.titleContainer}>
    //     <Text style={styles.titleText}>FutureAI</Text>
    //     <Text style={styles.subtitleText}>
    //       The future is here, powered by AI.
    //     </Text>
    //   </View>

    //   {/* ChatGPT Section */}
    //   <TouchableOpacity
    //     onPress={() => navigation.navigate('Home')}
    //     style={styles.section}>
    //     <View style={styles.sectionContent}>
    //       <Image
    //         source={require('../../assets/images/chatgptIcon.png')}
    //         style={styles.sectionIcon}
    //       />
    //       <Text style={styles.sectionTitle}>ChatGPT</Text>
    //     </View>
    //     <Text style={styles.sectionDescription}>
    //       ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.
    //     </Text>
    //   </TouchableOpacity>

    //   {/* Notes Section */}
    //   <TouchableOpacity
    //     onPress={() => navigation.navigate('Notes')}
    //     style={styles.section}>
    //     <View style={styles.sectionContent}>
    //       <Image
    //         source={require('../../assets/images/chatgptIcon.png')}
    //         style={styles.sectionIcon}
    //       />
    //       <Text style={styles.sectionTitle}>Notes</Text>
    //     </View>
    //     <Text style={styles.sectionDescription}>
    //       ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.
    //     </Text>
    //   </TouchableOpacity>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#42A5F5', // Gradient background color start
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: hp(10),
  },
  titleText: {
    fontSize: wp(10),
    fontWeight: 'bold',
    color: 'white', // Title text color
  },
  subtitleText: {
    fontSize: wp(4),
    color: 'white', // Subtitle text color
    textAlign: 'center',
    marginTop: 8,
  },
  section: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Section background color
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: hp(2),
  },
  sectionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionIcon: {
    height: hp(4),
    width: hp(4),
    borderRadius: hp(2),
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: wp(4.8),
    fontWeight: 'bold',
    color: '#424242', // Section title text color
  },
  sectionDescription: {
    fontSize: wp(3.8),
    color: '#424242', // Section description text color
    marginTop: 8,
  },
});



