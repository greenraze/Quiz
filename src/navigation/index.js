import HomeScreen from './HomeScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation'

const RootStack = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
                gesturesEnabled: true,
                headerMode: 'screen',
                headerTitle: ""
            })
        },
    },
    {
        initialRouteName: 'HomeScreen',
        header: null,
    },
);

const Navigation = createAppContainer(RootStack);
export default Navigation;
