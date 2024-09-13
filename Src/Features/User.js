import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const User = () => {
  const [user, setUser] = useState([]);
  const tasks = useSelector(state => state.todo.tasks);

  useEffect(() => {
    setUser(tasks);
  }, [tasks]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>User Information</Text>
      <FlatList
        data={user}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.label}>First Name:</Text>
              <Text style={styles.value}>{item.text.firstName}</Text>

              <Text style={styles.label}>Last Name:</Text>
              <Text style={styles.value}>{item.text.lastName}</Text>

              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{item.text.email}</Text>

              <Text style={styles.label}>Password:</Text>
              <Text style={styles.value}>{item.text.password}</Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No users available</Text>
        )}
      />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  label: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
    marginBottom: 5,
  },
  value: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
    marginTop: 50,
  },
});
