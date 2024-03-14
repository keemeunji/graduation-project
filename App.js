import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? require('./assets/adaptive-icon.png')
                  : require('./assets/adaptive-icon.png');
              } else if (route.name === 'Ranking') {
                iconName = focused
                  ? require('./assets/favicon.png')
                  : require('./assets/favicon.png');
              } else if (route.name === 'Statisctics') {
                iconName = focused
                  ? require('./assets/icon.png')
                  : require('./assets/icon.png');
              } else if (route.name === 'MyPage') {
                iconName = focused
                  ? require('./assets/splash.png')
                  : require('./assets/splash.png');
              }

              return (
                <Image source={iconName} style={{width: 25, height: 25}} />
              );
            },
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Ranking" component={ResultReportScreen} />
          <Tab.Screen name="Statisctics" component={VideoCamScreen} />
          <Tab.Screen name="MyPage" component={ChatScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};