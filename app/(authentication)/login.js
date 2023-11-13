import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const login = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}
    >
      <View>
        <Image
          style={{ width: 150, height: 100, resizeMode: 'contain' }}
          source={{
            uri: 'https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-25.png',
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginTop: 12,
              color: '#041E42',
            }}
          >
            Login to your account
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              backgroundColor: '#e0e0e0',
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              style={{ color: 'gray', marginVertical: 10, width: 300 }}
              placeholder="Enter Email"
            />
          </View>

          <View style={{ marginTop: 10 }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                backgroundColor: '#e0e0e0',
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <AntDesign
                style={{ marginLeft: 8 }}
                name="lock1"
                size={24}
                color="gray"
              />
              <TextInput
                secureTextEntry={true}
                style={{ color: 'gray', marginVertical: 10, width: 300 }}
                placeholder="Enter Password"
              />
            </View>
          </View>

          <View
            style={{
              marginTop: 12,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text>Keep me logged in</Text>
            <Text style={{ color: '#007FFF', fontWeight: '500' }}>
              Forgot Password
            </Text>
          </View>

          <View style={{ marginTop: 80 }} />
          <Pressable
            style={{
              width: 200,
              backgroundColor: '#0072b1',
              borderRadius: 6,
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: 15,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              }}
            >
              Login
            </Text>
          </Pressable>

          <Pressable style={{ marginTop: 15 }}>
            <Text style={{ textAlign: 'center', color: 'gray', fontSize: 16 }}>
              Don't have an account? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({});
