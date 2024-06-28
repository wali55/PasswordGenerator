import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import * as Yup from 'yup';
import {Formik} from 'formik';

const TaskSchema = Yup.object().shape({
  task: Yup.string().required('This field is required.'),
});

export default function PageThree() {
  const [tasks, setTasks] = useState([]);
  return (
    <ScrollView>
      <SafeAreaView>
        <Text>ToDo List</Text>
        <Formik
          initialValues={{task: ''}}
          validationSchema={TaskSchema}
          onSubmit={(values, {resetForm}) => {
            setTasks([...tasks, values.task]);
            resetForm();
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isValid,
            /* and other goodies */
          }) => (
            <>
              <View>
                <Text>Add Task</Text>
                <TextInput
                  style={styles.inputStyle}
                  value={values.task}
                  onChangeText={handleChange('task')}
                  onPress={() => handleSubmit()}
                  placeholder="Enter Task"
                  keyboardType="ascii-capable"
                />
                {touched.task && errors.task && <Text>{errors.task}</Text>}
                <TouchableOpacity onPress={() => handleSubmit()}>
                  <Text>Add Task</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>

        <FlatList
          data={tasks}
          renderItem={({item}) => <Text>{item}</Text>}
        />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 2
    }
});
