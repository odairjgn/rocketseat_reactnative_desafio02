import React, { useState } from 'react';
import { View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  function handleAddTask(newTaskTitle: string) {

    if (!newTaskTitle)
      return;

    let newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    };

    setTasks(oldTasks => [...oldTasks, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    let target = tasks.find(x => x.id === id);

    if (target) {
      target.done = !target.done;
      setTasks([...tasks]);
    }
  }

  function handleRemoveTask(id: number) {
    setTasks(tasks.filter(x => x.id !== id));
  }

  function handleDarkMode(darkModeState: boolean) {
    setDarkMode(darkModeState);
  }

  return (
    <View style={{ backgroundColor: darkMode ? "#1F1F1F" : "#FFF", height: '100%' }}>
      <Header onDarkMode={handleDarkMode} darkModeState={darkMode} />

      <TodoInput addTask={handleAddTask} darkModeState={darkMode} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
        darkModeState={darkMode}
      />
    </View>
  )
}