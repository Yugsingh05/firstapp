import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid, // ✅ Import Toast for Android
} from 'react-native';

function App(): React.JSX.Element {
  const [input, setInput] = useState<string>('');
  const [todo, setTodo] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState<number[]>([]);

  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT); // 🔥 Show toast notification
  };

  const handleTodo = () => {
    if (input.trim()) {
      setTodo(prev => [...prev, input]);
      setInput('');
      showToast('Task Added ✅'); // 🔥 Show toast
    }
  };

  const handleDelete = (index: number) => {
    setTodo(prev => prev.filter((_, i) => i !== index));
    setIsCompleted(prev => prev.filter(i => i !== index));
    showToast('Task Deleted ❌'); // 🔥 Show toast
  };

  const handleComplete = (index: number) => {
    setIsCompleted(prev => [...prev, index]);
    showToast('Task Completed 🎉'); // 🔥 Show toast
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.head}>🚀 Todo App</Text>

      {/* Input and Add Button */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your task..."
          placeholderTextColor="#aaa"
          style={styles.input}
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity
          disabled={!input.trim()}
          onPress={handleTodo}
          style={[styles.button, !input.trim() && styles.disabledButton]}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Todo List */}
      <ScrollView contentContainerStyle={styles.todoList}>
        {todo.map((item, index) => (
          <View
            key={index}
            style={[
              styles.todoItem,
              isCompleted.includes(index) && styles.completedTask,
            ]}>
            <Text style={styles.todoText} numberOfLines={2}>
              {item}
            </Text>

            <View style={styles.buttonContainer}>
              {!isCompleted.includes(index) && (
                <TouchableOpacity
                  onPress={() => handleComplete(index)}
                  style={styles.completeButton}>
                  <Text style={styles.completeButtonText}>✔</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                onPress={() => handleDelete(index)}
                style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>✖</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  head: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#444',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 15,
    color: '#fff',
    fontSize: 16,
    backgroundColor: '#2a2a2a',
  },
  button: {
    backgroundColor: '#ff9800',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#555',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  todoList: {
    paddingBottom: 20,
  },
  todoItem: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
  },
  completedTask: {
    backgroundColor: '#1f7a1f',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  completeButton: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  completeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  deleteButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;
