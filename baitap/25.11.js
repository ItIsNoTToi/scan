import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Header } from "@react-navigation/stack";
import React from "react";
import { ScrollView } from "react-native";
import { View, Text, Image } from "react-native";
import Scan from './Scan';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () =>
{
    const yourinsight = [
        {
            img: require('./image/welcome.png'),
            name: 'Scan new',
            name2: 'Scanned 463',
            img1: require('./image/welcome.png'),
            name3: 'Scan new',
            name4: 'Scanned 463',
        },
        {
            img: require('./image/welcome.png'),
            name: 'Scan new',
            name2: 'Scanned 463',
            img1: require('./image/welcome.png'),
            name3: 'Scan new',
            name4: 'Scanned 463',
        },
    ]

    const Addyourinsight = () =>
    {
        return yourinsight.map((item,index) =>
        (
            <View style={{flexDirection: "row", justifyContent: 'space-around',}} key={index}>
                <View style={{flexDirection: 'column',  width: 120, height: 150, backgroundColor: 'lightgray', marginBottom: 10, borderRadius: 12,}}>
                    <View style={{ marginTop: 15,}}>
                        <View style={{ justifyContent: 'center',alignItems: 'center', }}>
                            <Image style={{width: 40, height: 40, borderRadius: 12,}} source={item.img}/>
                        </View>
                        <View>
                            <Text style={{textAlign: "center",}}>
                                {item.name}
                            </Text>
                            <Text style={{textAlign: "center", fontWeight: '200',}}>
                                {item.name2}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'column',  width: 120, height: 150, backgroundColor: 'lightgray', marginBottom: 10, borderRadius: 12,}}>
                    <View style={{ marginTop: 15,}}>
                        <View style={{ justifyContent: 'center',alignItems: 'center', }}>
                            <Image style={{width: 40, height: 40, borderRadius: 12,}} source={item.img}/>
                        </View>
                        <View>
                            <Text style={{textAlign: "center",}}>
                                {item.name}
                            </Text>
                            <Text style={{textAlign: "center",  fontWeight: '200',}}>
                                {item.name2}
                            </Text>
                        </View>
                    </View>
                </View>
                
            </View>
        ));
    }
    return(
        <ScrollView style={{marginLeft: 10,}}>
            <View style={{flexDirection: 'row',marginTop: 30, justifyContent: "space-between",}}>
                <View>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={{ marginTop: 10, fontWeight: '700', fontSize: 20,}}>
                            Hello
                        </Text>
                        <Icon name="home" color='red' size={30}/>
                    </View>
                    <View>
                        <Text style={{fontWeight: '300',}}>
                            Christie Doe
                        </Text>
                    </View>
                </View>
                
                <View style={{ width: 40, height: 40, marginTop: 10, marginRight: 10,}}>
                    <Image style={{width: '100%', height: '100%', borderRadius: 12,}} source={require('./image/welcome.png')}/>
                </View>
            </View>
            <View style={{marginTop: 40,}}>
                <Text style={{fontSize: 20,}}>
                    Your Insights
                </Text>
            </View>
            <View>
                {Addyourinsight()}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                <View>
                    <Text>
                        Explore More
                    </Text>
                </View>
                <View style={{marginTop: 5,}}>
                    <Icon name="home"/>
                </View>
            </View>
    </ScrollView>
    );
    
}
const bottomtab = createBottomTabNavigator();
const App = ()=>
{
    return(
        <NavigationContainer>
            <bottomtab.Navigator screenOptions={{ headerShown: false}}>
                <bottomtab.Screen name="home" options={
                {
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                }}  component={Home}/>
                <bottomtab.Screen name="scan" options={
                {
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="scan" size={size} color={color} />
                    ),
                }} component={Scan}/>
            </bottomtab.Navigator>
        </NavigationContainer>
    );
}

export default App;