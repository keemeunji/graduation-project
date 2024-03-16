import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../../constants/colors';
import Button from '../../components/Button';

const Welcome = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.white, COLORS.babyblue]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../../assets/chick.png")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 10,
                            transform: [
                                { translateX: 20 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../../assets/chick.png")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: -30,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-5deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../../assets/chick.png")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 130,
                            left: -50,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "15deg" }
                            ]
                        }}
                    />

                    <Image
                        source={require("../../assets/chick.png")}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 110,
                            left: 100,
                            transform: [
                                { translateX: 50 },
                                { translateY: 50 },
                                { rotate: "-15deg" }
                            ]
                        }}
                    />
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 50,
                        fontWeight: 800,
                        color: COLORS.blue
                    }}>Peep</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 800,
                        color: COLORS.sapphireblue
                    }}>- Peep</Text>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.blue,
                            marginVertical: 4
                        }}>하루를 함께하는 삐약삐약 시간</Text>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.blue,
                        }}>아이의 속마음을 들어볼까요?</Text>
                    </View>

                    <Button
                        title="회원가입"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 22,
                            width: "100%"
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 17,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>이미 계정이 있으세요?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: COLORS.blue,
                                fontWeight: "bold",
                                marginLeft: 4,
                                marginTop: 1.5,
                            }}>로그인하기</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome