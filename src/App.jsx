import React from 'react';
import UserForm from './components/UserForm';

function App() {
  return (
    <div style={styles.container}>
      <UserForm />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#1e1e1e',
  },
};

export default App;



