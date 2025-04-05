import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { FlatListNavigationProps } from './main';

type HomeScreenNavigationProp = StackNavigationProp<FlatListNavigationProps, 'Home'>;

const Pages = [
  { id: '1', title: 'Details', path: 'Details' },
  { id: '2', title: 'Section List', path: 'SectionList' },
  { id: '3', title: 'Pressable Demo', path: 'PressableDemo' },
];

const FlatListHome = () => {
  const navigate = useNavigation<HomeScreenNavigationProp>();

  const handleRenderList = ({ item }: { item: { id: string; title: string; path: string } }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigate.navigate(item.path as keyof FlatListNavigationProps)}
        activeOpacity={0.8}
      >
        <Text style={styles.cardText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FlatList Home</Text>
      <FlatList
        data={Pages}
        renderItem={handleRenderList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F4F8',
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
      textAlign: 'center',
    },
    listContainer: {
      paddingBottom: 20,
    },
    card: {
      backgroundColor: '#4A90E2',
      paddingVertical: 20,
      paddingHorizontal: 25,
      marginVertical: 10,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 4,
    },
    cardText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
    },
  });
  

export default FlatListHome;
