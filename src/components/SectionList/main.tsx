import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const SecTionListData: { title: string; data: string[] }[] = [
  {
    title: 'Men',
    data: ['Men Shirt', 'Men Pant', 'Men Trousers'],
  },
  {
    title: 'Women',
    data: ['Women Shirt', 'Women Pant', 'Women Trousers'],
  },
  {
    title: 'Kids',
    data: ['Kids Shirt', 'Kids Pant', 'Kids Trousers'],
  },
];

const SectionListDemo: React.FC = () => {
  const handleRenderHeader = ({ section }: { section: { title: string } }) => {
    return <Text style={styles.sectionHeader}>{section.title}</Text>;
  };

  const handleRenderItem = ({ item }: { item: string }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛍️ Fashion Categories</Text>
      <SectionList
        sections={SecTionListData}
        renderItem={handleRenderItem}
        renderSectionHeader={handleRenderHeader}
        keyExtractor={(item, index) => item + index}
        contentContainerStyle={styles.listContent}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8FC',
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
      textAlign: 'center',
    },
    sectionHeader: {
      fontSize: 22,
      fontWeight: 'bold',
      backgroundColor: '#4A90E2',
      color: '#fff',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 8,
      marginTop: 10,
    },
    card: {
      backgroundColor: '#ffffff',
      marginVertical: 6,
      padding: 16,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    itemText: {
      fontSize: 18,
      color: '#333',
    },
    listContent: {
      paddingBottom: 20,
    },
  });
  

export default SectionListDemo;
