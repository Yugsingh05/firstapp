import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';

const ModalDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>🎉 Modal Demo</Text>
      <Text style={styles.statusText}>
        Modal is <Text style={{ fontWeight: 'bold' }}>{open ? 'Open' : 'Closed'}</Text>
      </Text>

      <TouchableOpacity onPress={() => setOpen(true)} style={styles.openButton}>
        <Text style={styles.openButtonText}>Open Modal</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        visible={open}
        transparent
        onRequestClose={() => setOpen(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setOpen(false)}>
          <Pressable style={styles.modalCard} onPress={() => {}}>
            <Text style={styles.modalTitle}>🚀 Welcome to the Modal</Text>
            <Text style={styles.modalContent}>
              This is a beautiful modal with a sleek design.
            </Text>

            <TouchableOpacity onPress={() => setOpen(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close Modal</Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      paddingTop: 60,
      paddingHorizontal: 20,
      backgroundColor: '#F0F4F8',
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 15,
      color: '#333',
    },
    statusText: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 30,
      color: '#555',
    },
    openButton: {
      backgroundColor: '#4CAF50',
      paddingVertical: 14,
      paddingHorizontal: 24,
      borderRadius: 10,
      alignItems: 'center',
      alignSelf: 'center',
      elevation: 4,
    },
    openButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.4)',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    modalCard: {
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 25,
      alignItems: 'center',
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 10,
    },
    modalTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 15,
      color: '#333',
    },
    modalContent: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 25,
      color: '#666',
    },
    closeButton: {
      backgroundColor: '#4A90E2',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
    },
    closeButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
  });
  

export default ModalDemo;
