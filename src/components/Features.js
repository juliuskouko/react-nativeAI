import {View, Text, Image} from 'react-native';
import React from 'react';
import {s} from 'react-native-wind';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Features({ style }) {
  return (
    <View style={[s`space-y-4 w-${wp(4)}`, style]}>
      {/* <Image
        className="rounded-full"
        source={require('../../assets/images/Logo.gif')}
        style={{ width: hp(20), height: hp(20),}}
      /> */}
      <Text
        style={[s`font-semibold text-gray-700 mb-4`, {fontSize: wp('6.5%')}]}>
        Features
      </Text>
      <View style={s`bg-emerald-200 p-4 rounded-xl space-y-2 mb-4`}>
        <View style={s`flex-row items-center space-x-1`}>
          <Image
            source={require('../../assets/images/chatgptIcon.png')}
            style={{width: hp('4%'), height: hp('4%')}}
          />
          <Text
            style={[
              s`font-semibold text-gray-700 py-2 px-1`,
              {fontSize: wp('4.8%')},
            ]}>
            ChatGPT
          </Text>
        </View>
        <Text
          style={[s`font-medium text-gray-700 py-2`, {fontSize: wp('3.8%')}]}>
          ChatGPT can provide you with instant and knowledgeable responses,
          assist you with creative ideas on a wide range of topics.
        </Text>
      </View>
      {/*  */}
      <View style={s`bg-purple-200 p-4 rounded-xl space-y-2 mb-4`}>
        <View style={s`flex-row items-center space-x-1`}>
          <Image
            source={require('../../assets/images/dalleIcon.png')}
            style={{width: hp('4%'), height: hp('4%')}}
          />
          <Text
            style={[
              s`font-semibold text-gray-700 py-2 px-1`,
              {fontSize: wp('4.8%')},
            ]}>
            DALL-E
          </Text>
        </View>
        <Text
          style={[s`font-medium text-gray-700 py-2`, {fontSize: wp('3.8%')}]}>
          DALL-E can generate imaginative and diverse images from textual
          descriptions, expanding the boundaries of visual creativity.
        </Text>
      </View>
      {/*  */}
      <View style={s`bg-cyan-200 p-4 rounded-xl space-y-2 mb-4`}>
        <View style={s`flex-row items-center space-x-1`}>
          <Image
            source={require('../../assets/images/smartaiIcon.png')}
            style={{width: hp('4%'), height: hp('4%')}}
          />
          <Text
            style={[
              s`font-semibold text-gray-700 py-2 px-1`,
              {fontSize: wp('4.8%')},
            ]}>
            SMART AI
          </Text>
        </View>
        <Text
          style={[s`font-medium text-gray-700 py-2`, {fontSize: wp('3.8%')}]}>
          A powerful voice assistant with the abilities of ChatGPT and Dall-E,
          providing you the best of Logoh worlds.
        </Text>
      </View>
    </View>
  );
}
