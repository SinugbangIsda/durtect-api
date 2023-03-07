import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { SheetProvider } from 'react-native-actions-sheet';
import { Styles } from '../../constants';
import useDarkMode from '../../hooks/useDarkMode';
import { LayoutProps } from '../../interfaces/Interfaces';
import tw from '../../utils/tw';
import Card from '../Card';

const Layout = ({ children, twStyles, noSpacing }: LayoutProps ) => {
  const { theme, renderTheme } = useDarkMode();
  renderTheme();

  return (
    <SheetProvider>
      <StatusBar style = { theme  === "dark" ? "light" : "dark"} />
      <SafeAreaView style = {[ Styles.AndroidSafeArea, tw `${twStyles}`]}>
        { noSpacing ?
          <Card>
            { children }
          </Card>
        :
          <Card twStyles =  "mx-4">
            { children }
          </Card>
        }
      </SafeAreaView>
    </SheetProvider>
  )
}

export default Layout;