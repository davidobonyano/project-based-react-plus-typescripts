import React from 'react'
import { useState } from 'react'

const FormValidation: React.FC = () => {

   const [formData, setFormData] = useState({
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
   const { username, email, password, confirmPassword } = formData;
   
  if (!username || !email || !password || !confirmPassword) {
    alert("All fields are required!");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  if (username.length < 3){
    alert("username must be at least 3 characters.")
      return; 
  }
  
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }
    alert("Signup successful!")
  

  console.log("Login Data:", formData);
};

  return (
<form onSubmit={handleSubmit}>
  <div>
    <label>Username</label>
    <input 
      type="text" 
      name="username" 
      value={formData.username} 
      onChange={handleChange} 
    />
  </div>
  <div>
    <label>Email</label>
    <input 
      type="email" 
      name="email" 
      value={formData.email} 
      onChange={handleChange} 
    />
  </div>
  <div>
    <label>Password</label>
    <input 
      type="password" 
      name="password" 
      value={formData.password} 
      onChange={handleChange} 
    />
  </div>
  <div>
    <label>Confirm Password</label>
    <input 
      type="password" 
      name="confirmPassword" 
      value={formData.confirmPassword} 
      onChange={handleChange} 
    />
  </div>
  <button type="submit">Sign Up</button>
</form>

  )
}

export default FormValidation