# Pokedex app developed using React Native with Expo

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.dev/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>

## How to use

- Install packages with `yarn` or `npm install`.
- Run `yarn start` or `npm run start` to start the bundler.
- Open the project in a React runtime to try it:
  - iOS: [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
  - Android: [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)

## Libraries Used

### 1. **lottie-react-native**
- **Purpose**: To enhance the user interface with high-quality, complex animations.
- **Usage**: Implemented for displaying animated loading screens, significantly improving the user experience during data loading phases.

### 2. **axios**
- **Purpose**: A promise-based HTTP client for making HTTP requests from JavaScript.
- **Usage**: Employed to consume the Pokémon REST API, enabling the app to efficiently request and receive data about Pokémon.

### 3. **styled-components**
- **Purpose**: A component-based styling library that facilitates the creation of styled components.
- **Usage**: Crucial for customizing the app’s visual presentation, allowing for the development of reusable styled components. This led to cleaner code and better separation between the app’s logic and its visual design.

### 4. **react-navigation**
- **Purpose**: To manage screen transitions and navigation within the app.
- **Usage**: Utilized for implementing a bottom tab navigation system, as well as facilitating navigation between different views and components within the app.

### 5. **react-native-webview**
- **Purpose**: To provide a way to display web content in a secure and customizable way within the native app.
- **Usage**: This library was used to embed a web view that could display external web pages or resources directly within the app. It was particularly useful for showing detailed information about Pokémon that was not natively rendered in the app.
