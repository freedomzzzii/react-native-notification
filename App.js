// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React, { Component, useEffect } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Button,
//   Alert,
// } from 'react-native';
// import RNRootbeer from 'react-native-rootbeer';
// // import PushNotificationIOS from "@react-native-community/push-notification-ios";
// import PushNotification from "react-native-push-notification";
// // import firebase from "react-native-firebase";
// import messaging from '@react-native-firebase/messaging';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// class IsRooted extends Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       'isRooted': 'default-value',
//     };
//   }

//   componentDidMount() {
//     this.handleIsRooted();
//   }

//   handleIsRooted = async () => {
//     try {
//       const isRooted = await RNRootbeer.isRooted();
//       return this.setState({ isRooted });
//     } catch (error) {
//       this.setState({ 'isRooted': error });
//       throw error;
//     }
//   }

//   render() {
//     return (
//       <>
//         <Text style={{ marginTop: 100 }}>
//           isRooted: {`${this.state.isRooted}`}
//         </Text>
//       </>
//     );
//   }
// };

// class Notification extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     // this.handleInitNotification();
//     // this.requestUserPermission();
//   }

//   // handleInitNotification = () => {
//   //   try {
//   //     console.log('handleInitNotification')
//   //     // Must be outside of any component LifeCycle (such as `componentDidMount`).
//   //     PushNotification.checkPermissions(check => console.log(check))
//   //     PushNotification.configure({
//   //       // (optional) Called when Token is generated (iOS and Android)
//   //       onRegister: function (token) {
//   //         console.log("TOKEN:", token);
//   //       },

//   //       // (required) Called when a remote is received or opened, or local notification is opened
//   //       onNotification: function (notification) {
//   //         console.log("NOTIFICATION:", notification);

//   //         // process the notification

//   //         // (required) Called when a remote is received or opened, or local notification is opened
//   //         // notification.finish(PushNotificationIOS.FetchResult.NoData);
//   //       },

//   //       // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
//   //       onAction: function (notification) {
//   //         console.log("ACTION:", notification.action);
//   //         console.log("NOTIFICATION:", notification);

//   //         // process the action
//   //       },

//   //       // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//   //       onRegistrationError: function(err) {
//   //         console.error(err.message, err);
//   //       },

//   //       // IOS ONLY (optional): default: all - Permissions to register.
//   //       permissions: {
//   //         alert: true,
//   //         badge: true,
//   //         sound: true,
//   //       },

//   //       // Should the initial notification be popped automatically
//   //       // default: true
//   //       popInitialNotification: true,

//   //       /**
//   //        * (optional) default: true
//   //        * - Specified if permissions (ios) and token (android and ios) will requested or not,
//   //        * - if not, you must call PushNotificationsHandler.requestPermissions() later
//   //        * - if you are not using remote notification or do not have Firebase installed, use this:
//   //        *     requestPermissions: Platform.OS === 'ios'
//   //        */
//   //       requestPermissions: false,
//   //     });

//   //     PushNotification.popInitialNotification((notification) => {
//   //       console.log('Initial Notification', notification);
//   //     });

//   //     PushNotification.getChannels(function (channel_ids) {
//   //       console.log(channel_ids); // ['channel_id_1']
//   //     });
    
//   //     PushNotification.createChannel(
//   //       {
//   //         channelId: "channel-id", // (required)
//   //         channelName: "My channel", // (required)
//   //         channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
//   //         soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
//   //         importance: 4, // (optional) default: 4. Int value of the Android notification importance
//   //         vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
//   //       },
//   //       (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
//   //     );
//   //     this.handleSetDelay();
//   //   } catch (error) {
//   //     console.log('error>>>', error)
//   //   }
//   // }

//   // handleSetDelay = () => {
//   //   try {
//   //     console.log('handleSetDelay', new Date(Date.now() + (1000)))
//   //     PushNotification.localNotificationSchedule({
//   //       message: "My Notification Message", // (required)
//   //       date: new Date(Date.now() + (1000)) // in 10 secs
//   //      });
//   //   } catch (error) {
//   //     console.log(error)
//   //   }
//   // }

//   // handleButtonPress = () => {
//   //   try {
//   //     console.log('handleButtonPress>>>');
//   //     PushNotification.localNotification({
//   //       /* Android Only Properties */
//   //       // channelId: "your-channel-id", // (required) channelId, if the channel doesn't exist, it will be created with options passed above (importance, vibration, sound). Once the channel is created, the channel will not be update. Make sure your channelId is different if you change these options. If you have created a custom channel, it will apply options of the channel.
//   //       // ticker: "My Notification Ticker", // (optional)
//   //       // showWhen: true, // (optional) default: true
//   //       // autoCancel: true, // (optional) default: true
//   //       // largeIcon: "ic_launcher", // (optional) default: "ic_launcher". Use "" for no large icon.
//   //       // largeIconUrl: "https://www.example.tld/picture.jpg", // (optional) default: undefined
//   //       // smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher". Use "" for default small icon.
//   //       // bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
//   //       // subText: "This is a subText", // (optional) default: none
//   //       // bigPictureUrl: "https://www.example.tld/picture.jpg", // (optional) default: undefined
//   //       // color: "red", // (optional) default: system default
//   //       // vibrate: true, // (optional) default: true
//   //       // vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
//   //       // tag: "some_tag", // (optional) add tag to message
//   //       // group: "group", // (optional) add group to message
//   //       // groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
//   //       // ongoing: false, // (optional) set whether this is an "ongoing" notification
//   //       // priority: "high", // (optional) set notification priority, default: high
//   //       // visibility: "private", // (optional) set notification visibility, default: private
//   //       // ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear)
//   //       // shortcutId: "shortcut-id", // (optional) If this notification is duplicative of a Launcher shortcut, sets the id of the shortcut, in case the Launcher wants to hide the shortcut, default undefined
//   //       // onlyAlertOnce: false, // (optional) alert will open only once with sound and notify, default: false
        
//   //       // when: null, // (optionnal) Add a timestamp pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
//   //       // usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
//   //       // timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null
      
//   //       // messageId: "google:message_id", // (optional) added as `message_id` to intent extras so opening push notification can find data stored by @react-native-firebase/messaging module. 
      
//   //       // actions: ["Yes", "No"], // (Android only) See the doc for notification actions to know more
//   //       // invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true
      
//   //       // /* iOS only properties */
//   //       // alertAction: "view", // (optional) default: view
//   //       // category: "", // (optional) default: empty string
      
//   //       // /* iOS and Android properties */
//   //       // id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
//   //       title: "My Notification Title", // (optional)
//   //       message: "My Notification Message", // (required)
//   //       // userInfo: {}, // (optional) default: {} (using null throws a JSON value '<null>' error)
//   //       // playSound: false, // (optional) default: true
//   //       // soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
//   //       // number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
//   //       // repeatType: "day", // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
//   //     });
//   //   } catch (error) {
//   //     console.log(error)
//   //   }
//   // }

//   // requestUserPermission = async () => {
//   //   console.log('requestUserPermission');
//   //   const authStatus = await messaging().requestPermission();
//   //   const enabled =
//   //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//   //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
//   //   if (enabled) {
//   //     this.getFcmToken() //<---- Add this
//   //     console.log('Authorization status:', authStatus);
//   //   }
//   // }

//   // getFcmToken = async () => {
//   //   const fcmToken = await messaging().getToken();
//   //   if (fcmToken) {
//   //    console.log(fcmToken);
//   //    console.log("Your Firebase Token is:", fcmToken);
//   //   } else {
//   //    console.log("Failed", "No token received");
//   //   }
//   // }

//   render() {
//     return (
//       <>
//         <Button
//           title="test"
//           onPress={() => console.log('test')}
//         />
//         {/* <Button
//         title="test"
//         onPress={this.requestUserPermission}
//       /> */}
//       </>
//     );
//   }
// }

// const App = () => {
//   messaging().setBackgroundMessageHandler(async remoteMessage => {
//     console.log('Message handled in the background!', remoteMessage);
//   });
  
//   useEffect(() => {
//     requestUserPermission();
//     const unsubscribe = messaging().onMessage(async remoteMessage => {
//       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
//     });
//     return unsubscribe;
//    }, []);

//   requestUserPermission = async () => {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//       getFcmToken()
//       console.log('Authorization status:', authStatus);
//     }
//   }

//   getFcmToken = async () => {
//     const fcmToken = await messaging().getToken();
//     if (fcmToken) {
//      console.log(fcmToken);
//      console.log("Your Firebase Token is:", fcmToken);
//     } else {
//      console.log("Failed", "No token received");
//     }
//   }


//   console.log('App render>>>');
//   return (
//     <>
//         <IsRooted />
//         <Notification />
//         <StatusBar barStyle="dark-content" />
//         <SafeAreaView>
//           <ScrollView
//             contentInsetAdjustmentBehavior="automatic"
//             style={styles.scrollView}>
//             <Header />
//             {global.HermesInternal == null ? null : (
//               <View style={styles.engine}>
//                 <Text style={styles.footer}>Engine: Hermes</Text>
//               </View>
//             )}
//             <View style={styles.body}>
//               <View style={styles.sectionContainer}>
//                 <Text style={styles.sectionTitle}>Step One</Text>
//                 <Text style={styles.sectionDescription}>
//                   Edit <Text style={styles.highlight}>App.js</Text> to change this
//                   screen and then come back to see your edits.
//                 </Text>
//               </View>
//               <View style={styles.sectionContainer}>
//                 <Text style={styles.sectionTitle}>See Your Changes</Text>
//                 <Text style={styles.sectionDescription}>
//                   <ReloadInstructions />
//                 </Text>
//               </View>
//               <View style={styles.sectionContainer}>
//                 <Text style={styles.sectionTitle}>Debug</Text>
//                 <Text style={styles.sectionDescription}>
//                   <DebugInstructions />
//                 </Text>
//               </View>
//               <View style={styles.sectionContainer}>
//                 <Text style={styles.sectionTitle}>Learn More</Text>
//                 <Text style={styles.sectionDescription}>
//                   Read the docs to discover what to do next:
//                 </Text>
//               </View>
//               <LearnMoreLinks />
//             </View>
//           </ScrollView>
//         </SafeAreaView>
//       </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;


import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import messaging from '@react-native-firebase/messaging';
import NotificationPopup from 'react-native-push-notification-popup';

const App: () => React$Node = () => {
  popup = React.useRef(null);
    messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
  
  useEffect(() => {
    requestUserPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('message on still open app>>>', JSON.stringify(remoteMessage));
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      // console.log(popup.show)
      
      popup.show({
        onPress: function() {console.log('Pressed')},
        appIconSource: require('./assets/icon.png'),
        // appIconSource: require('./icon.png'),
        appTitle: 'Some App',
        timeText: 'Now',
        title: 'Hello World',
        body: 'This is a sample message.\nTesting emoji 😀',
        slideOutTime: 5000
      });
    });
    return unsubscribe;
   }, []);

  requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getFcmToken()
      console.log('Authorization status:', authStatus);
    }
  }

  getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
     console.log(fcmToken);
     console.log("Your Firebase Token is:", fcmToken);
    } else {
     console.log("Failed", "No token received");
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NotificationPopup ref={ref => this.popup = ref} />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;





// import React, { useState, useEffect } from 'react';
// import messaging from '@react-native-firebase/messaging';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { View, Text } from 'react-native';

// // const Stack = createStackNavigator();

// function HomeScreen() {
//   return (
//     <View>
//       <Text>Home screen</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View>
//       <Text> screen</Text>
//     </View>
//   );
// }

// export default function App() {
//   // const navigation = useNavigation();
//   const [loading, setLoading] = useState(true);
//   // const [initialRoute, setInitialRoute] = useState('Home');

//   const requestUserPermission = async () => {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//       getFcmToken()
//       console.log('Authorization status:', authStatus);
//     }
//   }

//   const getFcmToken = async () => {
//     const fcmToken = await messaging().getToken();
//     if (fcmToken) {
//       console.log(fcmToken);
//       console.log("Your Firebase Token is:", fcmToken);
//     } else {
//       console.log("Failed", "No token received");
//     }
//   }

//   useEffect(() => {
//     // Assume a message-notification contains a "type" property in the data payload of the screen to open
//     messaging().onNotificationOpenedApp(remoteMessage => {
//       console.log(
//         'Notification caused app to open from background state:',
//         remoteMessage.notification,
//       );
//       // navigation.navigate(remoteMessage.data.type);
//     });

//     // Check whether an initial notification is available
//     messaging()
//       .getInitialNotification()
//       .then(remoteMessage => {
//         if (remoteMessage) {
//           console.log(
//             'Notification caused app to open from quit state:',
//             remoteMessage.notification,
//           );
//           setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
//         }
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <HomeScreen />
//     // <NavigationContainer>
//     //   <Stack.Navigator initialRouteName={initialRoute}>
//     //     <Stack.Screen name="Home" component={HomeScreen} />
//     //     <Stack.Screen name="Settings" component={SettingsScreen} />
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//   );
// }