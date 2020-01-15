# Android_CodePush-example
Android Microsoft CodePush Demo

## Creating the project in ReactNative

` npx react-native init AndroidCodePushExmple `

Ref: [More about React Native](https://facebook.github.io/react-native/docs/getting-started)

## Installing React Navigation

````
yarn add react-navigation
yarn add react-navigation-stack
yarn add react-native-safe-area-context
yarn add @react-native-community/masked-view`
yarn add react-native-gesture-handler
yarn add react-native-reanimated
yarn add react-native-screens
````

## Installing codePush

`yarn add react-native-code-push`

## Installing/Using AppCenter

**Appcenter-CLI**

`npm install -g appcenter-cli `

**Create an Account**

Follow the instructions in [AppCenter](https://appcenter.ms/apps)

**Login**

`appcenter login`
> Follow the instructions

Ref: [Account Management](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/cli#account-management)

**Create an app**

`appcenter apps create -d AndroidCodePushExample -o Android -p React-Native`

**List Apps**

`appcenter apps list`

**Set current App**

`appcenter apps delete -a <ownerName>/<appName>`

## Create deployments

With the original CodePush, apps automatically had two deployments (Staging and Production). 
In App Center, you'll have to create them yourself using the following commands

````
appcenter codepush deployment add -a <ownerName>/<appName> Staging
appcenter codepush deployment add -a <ownerName>/<appName> Production

````

After create the deployments, list the keys for both deployments

`appcenter codepush deployment list --displayKeys `

Ref: [App Management](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/cli#app-management)

## Adding CodePush on Android

In MainApplication import codePush

`import com.microsoft.codepush.react.CodePush; `

**In `strings.xml`add**

`<string name="CodePushDeploymentKey">DEPLOYMENT_KEY</string> `

**Update `MainApplication.java` file to use CodePush**

````
public class MainApplication extends Application implements ReactApplication {
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    ...
  	// 2. Override the getJSBundleFile method in order to let
    // the CodePush runtime determine where to get the JS
    // bundle location from on each app start
    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }
  };
}

````

**In `android/app/build.gradle ` add at the end**

`apply from: "../../node_modules/react-native-code-push/android/codepush.gradle" `


Ref: [Android Setup](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/react-native#android-setup)

## CodePush Plugin Usage in JS

> By default, CodePush will check for updates on every app start. If an update is available, it will be silently downloaded, 
and installed the next time the app is restarted (either explicitly by the end user or by the OS), which ensures the least 
invasive experience for your end users. If an available update is mandatory, then it will be installed immediately, ensuring 
that the end user gets it as soon as possible.

In `App.js`:

**Import CodePush**

`import codePush from 'react-native-code-push'; `

**Declare CodePushOptions**

````
let codePushOptions = {
  updateDialog: true,
  installMode: codePush.InstallMode.IMMEDIATE
};
````

**Replace App value**

`App = codePush(codePushOptions)(App);`

Ref: [Plugin Usage](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/react-native#plugin-usage)

## Create an APK and upload to AppCenter

Creating an APK with ReactNative: [Signed APK Android](https://facebook.github.io/react-native/docs/signed-apk-android)

After create a project in AppCenter

- Login on [AppCenter](https://appcenter.ms)
- Select the application created
- Create a new Release
- Upload de APK file generated from ReactNative and Follow the instructions

## Releasing updates in Appcenter with CodePush

After adding new changes in the project

**Create a release**

`appcenter codepush release-react -a <ownerName>/<appName> `

> After creating a new release to reflect the changes in the app is necessary use the promote command

**Promote**

`appcenter codepush promote -a <ownerName/<appName> -s <sourceDeploymentName> -d <destDeploymentName>`

Ref: [Releasing Updates](https://docs.microsoft.com/en-us/appcenter/distribution/codepush/react-native#releasing-updates)


## Running the project
- Download and install the application from AppCenter
- Open the Application

>If an update is available the application show a popup to install the latest update.
