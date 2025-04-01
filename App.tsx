import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function App(): React.JSX.Element {
  const [input, setInput] = useState<string>('');
  const [todo, setTodo] = useState<string[]>([]);

  const handleTodo = () => {
    if (input.trim()) {
      setTodo(prev => [...prev, input]);
      setInput('');
    }
  };

  const handleDelete = (index: number) => {
    setTodo(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <ScrollView nestedScrollEnabled={true} style={styles.appContainer}>
      <View style={styles.container}>
        <Text style={styles.head}>🚀 Todo App</Text>

        {/* Input and Add Button */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your todo.."
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

        {/* Todo List */}
        <View style={styles.todoList}>
          {todo.map((item, index) => (
            <View key={index} style={styles.todoItem}>
              <Text style={styles.todoText}>{item}</Text>
              <TouchableOpacity onPress={() => handleDelete(index)} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>✖</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#121212', // Dark background
    flex: 1,
  },
  container: {
    padding: 20,
    paddingTop: 50,
  },
  head: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 12,
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
    backgroundColor: '#555', // Disabled button color
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  todoList: {
    marginTop: 20,
  },
  todoItem: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '500',
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
