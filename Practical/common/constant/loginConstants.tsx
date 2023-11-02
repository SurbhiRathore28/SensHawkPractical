import { ImageSourcePropType, ImageStyle, TextStyle, ViewStyle } from "react-native"
import { LOGIN_PAGE } from "./string"
import { styles } from "../../App"
import { GOOGLE_ICON } from "../assets/imgConst"

export interface TextInputInterface {
    secureEntry?: boolean,
    title: string,
    secondaryText?: boolean,
    titleStyle?: TextStyle,
    secondaryTitleStyle?: TextStyle,
    textInputStyle: ViewStyle
}

export interface ButtonInterFace {
    text: string,
    backgroundStyle?: ViewStyle,    
    displayIcon?: boolean,
    image?: ImageSourcePropType,
    textStyle: TextStyle,
    iconButtonStyle?: ImageStyle
}

export const LOGIN_INPUT_PARAMS = {
    UserNameTextInput:  {
        title: LOGIN_PAGE.USER_NAME_TEXT_INPUT_HEADIN,
        secureEntry: false,
        secondaryText: false,
        titleStyle: styles.inputHeaderStyle,
        textInputStyle: styles.textInputStyle
    },
    PasswordTextInput:  {
        title: LOGIN_PAGE.PASSWORD_TEXT_INPUT_HEADING,
        secureEntry: true,
        secondaryText: true,
        titleStyle: styles.inputHeaderStyle,
        secondaryTitleStyle: styles.secondaryTextStyle,
        textInputStyle: styles.textInputStyle
    },
}

export const LOGIN_BUTTON_PARAMS = {
    Sign_In_With_Google: {
        text: LOGIN_PAGE.SIGN_IN_WITH_GOOGLE_BUTTON,
        backgroundStyle: styles.signInWithGoogleButtonStyle,
        displayIcon: true,
        image: GOOGLE_ICON,
        textStyle: styles.signInWithGoogleButtonTextStyle,
        iconButtonStyle: styles.buttonIconStyle
    },
    Sign_In: {
        backgroundStyle: styles.signInButtonStyle,
        text: LOGIN_PAGE.SIGN_UP_BUTTON_TEXT,
        displayIcon: false,
        textStyle: styles.signInButtonTextStyle
    },
}

export const backgroundStyleSignInWithGoogle = {flexDirection:'row', marginVertical: 20, justifyContent:'center', alignItems: 'center', height: 50, borderWidth: 1, paddingHorizontal: 16, width: '100%', borderRadius: 25, borderColor: '#C5C5C5'};
