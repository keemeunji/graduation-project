//NavigationContainer 추가
import { NavigationContainer } from '@react-navigation/native';

//Stack에서 작동하는 Navigator와 Screen를 위해 함수 추가
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//아이콘 패키지 중 Ionicons추가
import Ionicons from 'react-native-vector-icons/Ionicons';

//네비게이션에서 사용할 화면 가져오기
//여기서 화면은 우리가 흔히 볼 수 있는 컴포넌트 이다.
import {MainScreen} from '../'
import HomeTab from './AppTabNavigator/HomeScreen';
import VideoCamTab from './AppTabNavigator/VideoCamScreen';
import ResultReportTab from './AppTabNavigator/ResultReportScreen';
import ChatTab from './AppTabNavigator/ChatScreen';

//Stack Navigation만들기
const Tab = createBottomTabNavigator();

const MainScreen = ({}) => {
  <NavigationContainer>
      <Tab.Navigator
      	screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if(route.name == "Home"){
            iconName = "home-outline";
          }else if(route.name == "Video"){
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
        <Tab.Screen 
        	name="Home" 
        	component={HomeTab}
        	options={{
          		tabBarVisible: false,
        	}} 
        />
        <Tab.Screen 
        	name="video" 
        	component={VideoCamTab}
        />
      </Tab.Navigator>
  </NavigationContainer>
}

export default MainScreen;