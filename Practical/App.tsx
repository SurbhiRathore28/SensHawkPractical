/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { GOOGLE_ICON } from './common/assets/imgConst';
import { LOGIN_PAGE } from './common/constant/string';
import { ButtonInterFace, LOGIN_BUTTON_PARAMS, LOGIN_INPUT_PARAMS, TextInputInterface } from './common/constant/loginConstants';

function App(): JSX.Element {
  
  const showAlert = (msg: string) => {
    Alert.alert(msg)
  }

  const renderHeader = () => {
    return (
      <Text style={styles.headerStyle}>{LOGIN_PAGE.LOGIN_HEADER}</Text>
    )
  }

  const renderButton = (buttonParams: ButtonInterFace) => {
    return (
      <Pressable style={buttonParams.backgroundStyle} onPress={() => showAlert(LOGIN_PAGE.SIGN_IN_SUCCESSFUL)}>
        {buttonParams.displayIcon && <Image style={buttonParams.iconButtonStyle} source={GOOGLE_ICON}/>}
        <Text style={buttonParams.textStyle}>{buttonParams.text}</Text>
      </Pressable>
    )
  }

  const renderSignInSeparator = () => {
    return (
      <View style={styles.separatorContainerStyle}>
         <View style={styles.separatorStyle}/>
         <Text style={styles.signInWithEmailTextStyle}>{LOGIN_PAGE.SIGN_IN_SEPARATOR}</Text>
         <View style={styles.separatorStyle}/>
      </View>
    )
  }

  const renderInputField = (textInputParam: TextInputInterface) => {
    return (
      <>
      <View
          style={styles.inputContainerStyle}>
          <Text style={textInputParam.titleStyle}>{textInputParam.title}</Text>          
          {textInputParam.secondaryText && <Text style={textInputParam.secondaryTitleStyle}>Forgot?</Text>}
         </View>
         <TextInput secureTextEntry={textInputParam.secureEntry} style={textInputParam.textInputStyle} />
      </>
    )
  }

  const renderSignUpButton = () => {
    return (
      <Text style={styles.signUpButtonContainerStyle}>
         <Text style={styles.dontHaveAccountTextStyle}>{LOGIN_PAGE.DONT_HAVE_AN_ACCOUNT_TEXT}</Text>
         <Text onPress={() => showAlert(LOGIN_PAGE.SIGN_UP_SUCCESSFUL)} style={styles.signUpTextStyle}>Sign up</Text>
      </Text>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollViewStyle}>
        <View
          style={styles.containerViewStyle}>
         {renderHeader()}
         {renderButton(LOGIN_BUTTON_PARAMS.Sign_In_With_Google)}
         {renderSignInSeparator()}
         {renderInputField(LOGIN_INPUT_PARAMS.UserNameTextInput)}
         {renderInputField(LOGIN_INPUT_PARAMS.PasswordTextInput)}
         {renderButton(LOGIN_BUTTON_PARAMS.Sign_In)}         
         {renderSignUpButton()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  signInWithGoogleButtonStyle: {flexDirection:'row', marginVertical: 20, justifyContent:'center', alignItems: 'center', height: 50, borderWidth: 1, paddingHorizontal: 16, width: '100%', borderRadius: 25, borderColor: '#C5C5C5'},
  signInButtonStyle: {marginTop:16, backgroundColor: '#0d0c22', marginBottom: 20, justifyContent:'center', alignItems: 'center', height: 50, borderWidth: 1, paddingHorizontal: 16, width: '100%', borderRadius: 25, borderColor: '#C5C5C5'},
  signInWithGoogleButtonTextStyle: {fontSize: 18, fontWeight: 'bold'},
  signInButtonTextStyle: {fontSize: 18, fontWeight: 'bold', color: Colors.white},
  scrollViewStyle: {height: '100%', width: '100%'},
  containerViewStyle: {
    padding: 16,
    flex:1,
    justifyContent: 'center'
  },
  signUpButtonContainerStyle: {
    width:'100%', justifyContent:'center',alignItems:'center', textAlign:'center'
  },
  dontHaveAccountTextStyle: {
     color: '#3d3d4e', fontSize: 14, fontWeight: '400'
  },
  signUpTextStyle: { color: '#0d0c22', fontSize: 14, fontWeight: '400',textDecorationLine: 'underline'},
  inputContainerStyle: {    
      flexDirection:'row',
      justifyContent: 'space-between'    
  },
  inputHeaderStyle: {color:'#0d0c22',fontSize: 16, fontWeight: 'bold'},
  secondaryTextStyle: {textDecorationLine:'underline', color:'#0d0c22',fontSize: 16},
  separatorContainerStyle: {flexDirection: 'row', width: '100%', alignItems:'center', marginBottom: 40},
  separatorStyle: {height: 1, backgroundColor: '#C5C5C5',flex:1},
  signInWithEmailTextStyle: {marginHorizontal: 5, color: '#6e6d7a', fontSize: 16},
  buttonIconStyle:{width: 20, height: 20, marginRight: 10},
  textInputStyle: {marginBottom: 16, marginTop:8,height: 40, borderColor: '#C5C5C5', borderWidth: 1, borderRadius: 8},
  headerStyle: {color:'#0d0c22', fontSize: 34, fontWeight: 'bold'}
});

export default App;
