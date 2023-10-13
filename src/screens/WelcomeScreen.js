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

          <Text style={styles.titleText}>MeBot</Text>

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
                      source={require('../../assets/images/AI.jpg')}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                    <View className="absolute w-full h-full items-center justify-center bg-[#00000068]">
                      <Text className="text-base text-white font-semibold">Read more on You AI</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ width: 250, height: 250 }} className="w-24 h-24 m-1 rounded-xl bg-gray-300 overflow-hidden">
                    <Image
                      source={require('../../assets/images/DanceBot.gif')}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                    <View className="absolute w-full h-full items-center justify-center bg-[#00000068]">
                      <Text className="text-base text-white font-semibold">250+</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ width: 250, height: 250 }} className="w-24 h-24 m-1 rounded-xl bg-gray-300 overflow-hidden relative">
                    <Image
                      source={require('../../assets/images/code.jpeg')}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                    <View className="absolute w-full h-full items-center justify-center bg-[#00000068]">
                      <Text className="text-base text-white font-semibold">250+</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ width: 250, height: 250 }} className="w-24 h-24 m-1 rounded-xl bg-gray-300 overflow-hidden">
                    <Image
                      source={require('../../assets/images/AI2.jpeg')}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                    <View className="absolute w-full h-full items-center justify-center bg-[#00000068]">
                      <Text className="text-base text-white font-semibold">250+</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={{ width: 250, height: 250 }} className="w-24 h-24 m-1 rounded-xl bg-gray-300 overflow-hidden relative">
                    <Image
                      source={require('../../assets/images/AI.jpg')}
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
                      source={require('../../assets/images/bot.png')}
                      style={styles.sectionIcon}
                    />
                    <Text style={styles.sectionTitle}>Chat Bot</Text>
                  </View>
                  <Text style={styles.sectionDescription}>
                    Can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.
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
    Logotom: 0,
    backgroundColor: '#42A5F5', 
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: hp(10),
  },
  titleText: {
    fontSize: wp(8),
    fontWeight: 'bold',
    color: '#424242', 
  },
  subtitleText: {
    fontSize: wp(4),
    color: 'white', 
    textAlign: 'center',
    marginTop: 8,
  },
  section: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 10,
    marginLogotom: hp(2),
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
    color: '#424242', 
  },
  sectionDescription: {
    fontSize: wp(3.8),
    color: '#424242', 
    marginTop: 8,
  },
});



