import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import { BGImage, Logo } from "../../assets";
import { UserTextInput } from "../components";
import { useNavigation } from "@react-navigation/native";
import { avatars } from "../../utils/supports";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { BlurView } from "@react-native-community/blur";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firestoreDB } from "../config/firebase.config";
import { doc, setDoc } from "firebase/firestore";

import LoginScreen from '../screens/LoginScreen';

const SignUpScreen = () => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);
  const backgroundColor = 'green';

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(avatars[0]?.image.asset.url);
  const [isAvatarMenu, setIsAvatarMenu] = useState(false);
  const [getEmailValidationStatus, setGetEmailValidationStatus] =
    useState(false);

  const navigation = useNavigation();


  const handleAvatar = (item) => {
    setAvatar(item?.image.asset.url);
    setIsAvatarMenu(false);
  };

  const handleSignUp = async () => {
    if (getEmailValidationStatus && email !== "") {
      await createUserWithEmailAndPassword(firebaseAuth, email, password).then(
        (userCred) => {
          const data = {
            _id: userCred?.user.uid,
            fullName: name,
            profilePic: avatar,
            providerData: userCred.user.providerData[0],
          };

          setDoc(doc(firestoreDB, "users", userCred?.user.uid), data).then(
            () => {
              navigation.navigate("LoginScreen");
            }
          );
        }
      );
    }
  };

  return (



    <View style={{ flex: 1, alignItems: "center", justifyContent: "start" }}>
      <Image
        source={BGImage}
        resizeMode="cover"
        style={{ height: screenHeight * 0.4, width: screenWidth }}
      />

      {isAvatarMenu && (
        <>
          {/* list of avatars sections */}
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <ScrollView>
              <BlurView
                style={{
                  flex: 1,
                  padding: 16,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
                tint="light"
                intensity={40}
              >
                {avatars?.map((item) => (
                  <TouchableOpacity
                    onPress={() => handleAvatar(item)}
                    key={item._id}
                    style={{
                      width: 80,
                      height: 80,
                      margin: 8,
                      padding: 4,
                      borderRadius: 40,
                      borderWidth: 2,
                      borderColor: "primary",
                    }}
                  >
                    <Image
                      source={{ uri: item?.image.asset.url }}
                      style={{ flex: 1, width: undefined, height: undefined }}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                ))}
              </BlurView>
            </ScrollView>
          </View>
        </>
      )}

      {/* Main View */}
      <View
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: "white",
          borderTopLeftRadius: 90,
          marginTop: -screenHeight * 0.22,
          alignItems: "center",
          justifyContent: "start",
          padding: 16,
          paddingBottom: 0,
        }}
      >
        <Image source={Logo} style={{ width: 64, height: 64 }} resizeMode="contain" />

        <Text style={{ paddingVertical: 8, fontSize: 24, fontWeight: "bold", color: "primary" }}>
          Join with us!
        </Text>

        {/* avatar section */}
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => setIsAvatarMenu(true)}
            style={{
              width: 80,
              height: 80,
              padding: 4,
              borderRadius: 40,
              borderWidth: 2,
              borderColor: "primary",
              position: "relative",
            }}
          >
            <Image
              source={{ uri: avatar }}
              style={{ flex: 1, width: undefined, height: undefined }}
              resizeMode="contain"
            />
            <View
              style={{
                width: 24,
                height: 24,
                backgroundColor: "green",
                borderRadius: 12,
                position: "absolute",
                top: 0,
                right: 0,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialIcons name="edit" size={18} color={"#fff"} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ width: "100%", alignItems: "center", marginTop: 16 }}>
          {/* full name */}
          <UserTextInput
            placeholder="Full Name"
            isPass={false}
            setStatValue={setName}
          />

          {/* email */}
          <UserTextInput
            placeholder="Email"
            isPass={false}
            setStatValue={setEmail}
            setGetEmailValidationStatus={setGetEmailValidationStatus}
          />
          

          {/* password */}
          <UserTextInput
            placeholder="Password"
            isPass={true}
            setStatValue={setPassword}
          />

          {/* login button */}
          <TouchableOpacity
            onPress={handleSignUp}
            style={{
              width: "100%",
              padding: 8,
              borderRadius: 8,
              backgroundColor: "green",
              marginTop: 16,
              alignItems: "center",
            }}
          >
            <Text style={{ paddingVertical: 8, fontSize: 18, fontWeight: "bold", color: "white" }}>
              Sign Up
            </Text>
          </TouchableOpacity>

          <View className="w-full py-12 flex-row items-center justify-center space-x-2">
            <Text className="text-base text-primaryText">
              Have an account!
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}
            >
              <Text className="text-base font-semibold text-primaryBold">
                Login Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;




