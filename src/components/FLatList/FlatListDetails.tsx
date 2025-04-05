import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export const FlatListDetails = () => {
  const FLAT_DATA = Array.from({ length: 20 }, (_, i) => ({
    id: i.toString(), // Ensure it's a string for keyExtractor
    title: `Item ${i + 1}`,
  }));

  const renderItem = ({ item }: { item: { id: string; title: string } }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FlatList Example</Text>
      <FlatList
        data={FLAT_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <Text style={styles.subHeading}>List Header</Text>
        )}
        ListFooterComponent={() => (
          <Text style={styles.subHeading}>List Footer</Text>
        )}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subHeading: {
    fontSize: 22,
    fontWeight: '600',
    paddingVertical: 10,
    color: '#444',
    textAlign: 'center',
  },
  flatListContainer: {
    paddingBottom: 40,
    width: '100%',
  },
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 20,
    backgroundColor: '#FF7F50',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
});
