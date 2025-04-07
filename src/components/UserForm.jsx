import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://localhost:7227/User/CriarUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        alert('Usuário cadastrado com sucesso!');
        console.log('Resposta da API:', result);
  
        // limpa o formulário
        setFormData({
          id: '',
          name: '',
          username: '',
          password: '',
          email: '',
        });
      } else {
        const errorData = await response.json();
        alert(`Erro ao cadastrar: ${errorData.message || response.statusText}`);
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro na conexão com o servidor.');
    }
  }; 

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.title}>Cadastro de Usuário</h2>

      <label>ID:</label>
      <input type="text" name="id" value={formData.id} onChange={handleChange} disabled />

      <label>Nome:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      <label>Username:</label>
      <input type="text" name="username" value={formData.username} onChange={handleChange} required />

      <label>Senha:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <button type="submit" style={styles.button}>Cadastrar</button>
    </form>
  );
};

const styles = {
  form: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
    gap: '10px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  button: {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default UserForm;

