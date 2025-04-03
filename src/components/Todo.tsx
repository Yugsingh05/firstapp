import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';

function Todo(): React.JSX.Element {
  const [input, setInput] = useState<string>('');
  const [todo, setTodo] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState<number[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null); // ✅ Store index instead of boolean
  const [editText, setEditText] = useState<string>('');

  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodo((prev) => [...prev, input]);
      setInput('');
      showToast('Task Added ✅');
    }
  };

  const handleDelete = (index: number) => {
    setTodo((prev) => prev.filter((_, i) => i !== index));
    setIsCompleted((prev) => prev.filter((i) => i !== index));
    showToast('Task Deleted ❌');
  };

  const handleComplete = (index: number) => {
    setIsCompleted((prev) => [...prev, index]);
    showToast('Task Completed 🎉');
  };

  const handleEdit = (index: number) => {
    setIsEditing(index);
    setEditText(todo[index]); // Set current text in input field
  };

  const handleSaveEdit = (index: number) => {
    const updatedTodos = [...todo];
    updatedTodos[index] = editText; // Update the specific task
    setTodo(updatedTodos);
    setIsEditing(null); // Exit edit mode
    showToast('Task Updated ✏️');
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.head}>🚀 Todo App</Text>

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
          onPress={handleAddTodo}
          style={[styles.button, !input.trim() && styles.disabledButton]}
          activeOpacity={0.8}
        >
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
            ]}
          >
            {isEditing === index ? (
              // Edit Mode UI
              <View style={styles.editContainer}>
                <TextInput
                  style={styles.editInput}
                  value={editText}
                  onChangeText={setEditText}
                />
                <TouchableOpacity
                  onPress={() => handleSaveEdit(index)}
                  style={styles.saveButton}
                >
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            ) : (
              // Normal View Mode UI
              <>
                <Text
                  style={[
                    styles.todoText,
                    isCompleted.includes(index) && {
                      textDecorationLine: 'line-through',
                      color: '#aaa',
                    },
                  ]}
                  numberOfLines={2}
                >
                  {item}
                </Text>

                <View style={styles.buttonContainer}>
                  {!isCompleted.includes(index) && (
                    <TouchableOpacity
                      onPress={() => handleComplete(index)}
                      style={styles.completeButton}
                    >
                      <Text style={styles.completeButtonText}>✔</Text>
                    </TouchableOpacity>
                  )}

                 {!isCompleted.includes(index) &&  <TouchableOpacity
                    onPress={() => handleEdit(index)}
                    style={styles.editButton}
                  >
                    <Text style={styles.editButtonText}>✏️</Text>
                  </TouchableOpacity>}

                  <TouchableOpacity
                    onPress={() => handleDelete(index)}
                    style={styles.deleteButton}
                  >
                    <Text style={styles.deleteButtonText}>✖</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
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
  editButton: {
    backgroundColor: '#ffa500',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 10,
  },
  editButtonText: {
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
  editContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  editInput: {
    flex: 1,
    backgroundColor: '#444',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Todo;
