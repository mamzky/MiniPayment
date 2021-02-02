import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TextInput, TouchableOpacity } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LoginScreen extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#f5f5f5', flex: 1, justifyContent: 'center' }}>
        <View style={{ width: '100%', justifyContent: 'center', flexDirection: 'column' }}>
          <Image
            style={{ height: 250, width: 250, alignSelf: 'center' }}
            source={Images.next_logo}
          />
        </View>

        {/* TEXT LOGIN BY USERNAME */}
        <View style={{ justifyContent: "center", flexDirection: 'column', alignItems: 'center', marginTop: 50 }}>
          <View style={{ backgroundColor: 'rgba(131, 241, 197, 0.75)', height: 40, width: '80%', borderRadius: 10 }}>
            <TextInput
              placeholder={'Username'}
              style={{ paddingLeft: 8 }}
            />
          </View>
          <View style={{ backgroundColor: 'rgba(131, 241, 197, 0.75)', height: 40, width: '80%', borderRadius: 10, marginTop: 10 }}>
            <TextInput
              placeholder={'Password'}
              style={{ paddingLeft: 8 }}
            />
          </View>
        </View>
        <Text style={{ width: '100%', textAlign: 'center', color: '#7f7f7f', marginTop: 10 }}>
          or login by
        </Text>

        {/* BUTTON LOGIN BY SOCMED */}
        <View style={{ marginTop: 20, alignSelf: 'center', alignItems: 'center', flexDirection: 'row', width: '80%', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={{ height: 42, width: 144, backgroundColor: '#4267B2', borderRadius: 8, alignItems: 'center' }}
            onPress={() => {
              alert('Login by facebook')
            }}
          >
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={{ height: 30, width: 30, alignSelf: 'center' }}
                source={Images.facebook_logo}
              />
            </View>

          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: 42, width: 144, borderWidth: 1, borderColor: '#bebebe', borderRadius: 8, alignItems: 'center' }}
            onPress={() => {
              alert('Login by google')
            }}
          >
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={{ height: 30, width: 30, alignSelf: 'center' }}
                source={Images.google_logo}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* MAIN LOGIN BUTTON */}
        <View style={{ marginTop: 20, alignSelf: 'center', alignItems: 'center', flexDirection: 'row', width: '80%', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={{ height: 42, width: '100%', backgroundColor: '#3FD6D9', borderRadius: 8, flexDirection:'column', justifyContent:'center' }}
            onPress={() => {
              alert('Login')
            }}
          >
            <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20, width:'100%', textAlign:'center', alignSelf:'center'}}>Login</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ width: '100%', textAlign: 'center', color: '#7f7f7f', marginTop: 30 }}>
          Don't have an account ?
          <Text style={{ fontWeight: 'bold' }}
            onPress={() => {
              alert('Sign Up !')
            }}>
            Sign Up
          </Text>
        </Text>

      </View>
    )
  }
}
export default LoginScreen