import 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Routes } from "./src/routes";
import { AppProvider } from './src/context/app';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <Routes />
      </AppProvider>
    </SafeAreaProvider>
  );
}
