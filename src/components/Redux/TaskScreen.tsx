import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from './store/store';
import {AddTask, DeleteTask, fetchTasks, ToggleComplete} from './store/TaskSlice';

const TaskScreen: React.FC = () => {
  const [isVisible, setIsvisible] = useState(false);
  const [Task, setTask] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const status = useSelector((state: RootState) => state.tasks.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  const HandleNewTask = () => {
    if (Task.trim()) {
      dispatch(
        AddTask({
          title: Task.trim(),
          iscompleted: false,
        }),
      );
      setTask('');
      setIsvisible(false);
    }
  };

  const handledeleteTask = (id: string) => {
    dispatch(DeleteTask(id));
  };

  const ToggleComplet = (id: string) => {
   dispatch(ToggleComplete(id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TaskScreen</Text>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id }
        renderItem={({item}) => (
          <TouchableOpacity style={[styles.taskCard, {backgroundColor: item.iscompleted ? 'green' : '#fff'}]}  onPress={() => ToggleComplet(item.id)}>
            <View style={{flex: 1}}>
              <Text style={[styles.taskTitle, {color : item.iscompleted ? 'white' : 'black'}]}>{item.title}</Text>
              <Text style={[styles.taskStatus,{color : item.iscompleted ? 'white' : 'black'}]}>
                {item.iscompleted ? '✅ Completed' : '⌛ Not Completed'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => handledeleteTask(item.id)}
              style={styles.deleteButton}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.btnCont}
        onPress={() => setIsvisible(true)}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsvisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCont}>
            <View style={styles.HeaderCont}>
              <Text style={styles.modalTitle}>Add new Task</Text>
              <TouchableOpacity onPress={() => setIsvisible(false)}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Enter your task"
              value={Task}
              onChangeText={text => setTask(text)}
            />

            <TouchableOpacity
              style={styles.addButton}
              onPress={HandleNewTask}>
              <Text style={styles.addButtonText}>Add Task</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#F9F9F9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#333',
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  taskStatus: {
    fontSize: 14,
    color: '#666',
  },
  deleteButton: {
    backgroundColor: '#FF4C4C',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 12,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  btnCont: {
    backgroundColor: '#6A0DAD',
    paddingVertical: 14,
    paddingHorizontal: 28,
    position: 'absolute',
    bottom: 30,
    right: 30,
    borderRadius: 50,
    elevation: 5,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCont: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    elevation: 10,
  },
  HeaderCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  closeText: {
    color: '#FF4C4C',
    fontWeight: '600',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#6A0DAD',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TaskScreen;
