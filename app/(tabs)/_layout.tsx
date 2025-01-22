import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }:{color:any}) => <TabBarIcon name="home" color={color} />,

                    // Modal in header code

                    // headerRight: () => (
                    //   <Link href="/modal" asChild>
                    //     <Pressable>
                    //       {({ pressed }:{pressed:boolean}) => (
                    //         <FontAwesome
                    //           name="info-circle"
                    //           size={25}
                    //           color={Colors[colorScheme ?? 'light'].text}
                    //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    //         />
                    //       )}
                    //     </Pressable>
                    //   </Link>
                    // ),
                }}
            />
            <Tabs.Screen
                name="map"
                options={{
                    title: 'Map',
                    tabBarIcon: ({ color }:{color:any}) => <TabBarIcon name="map" color={color} />,
                }}
            />
            <Tabs.Screen
                name='myevents'
                options={{
                    title: 'My Events',
                    tabBarIcon: ({color}:{color:any}) => <TabBarIcon name="list" color={color} />
                }}
            />
        </Tabs>
    );
}
