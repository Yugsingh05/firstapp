import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

const INITIAL_DATA: { id: string; title: string }[] = Array.from({ length: 20 }, (_, i) => ({
  id: i.toString(),
  title: `Item ${i + 1}`,
}));

const TopToRefresh: React.FC = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setData(INITIAL_DATA); // Reset to original data
      setIsRefreshing(false);
    }, 2000);
  };

  const handleLoadMore = () => {
    if (isLoadingMore || isRefreshing) return;

    setIsLoadingMore(true);
    setTimeout(() => {
      const newData: { id: string; title: string }[] = Array.from({ length: 10 }, (_, i) => ({
        id: (data.length + i).toString(),
        title: `Item ${data.length + i + 1}`,
      }));
      setData((prevData) => [...prevData, ...newData]);
      setIsLoadingMore(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top To Refresh + Load More</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.2}
        ListFooterComponent={() =>
          isLoadingMore ? (
            <ActivityIndicator style={{ marginVertical: 16 }} size="small" color="#007AFF" />
          ) : null
        }
      />
    </View>
  );
};

export default TopToRefresh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 12,
    textAlign: 'center',
    color: '#1e1e1e',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 6,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});
