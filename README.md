# React Account Management App

A simple React application that allows users to **register, log in, view, and edit their profile**.  
Built for a React internship practical test using **React (v19.2.0)**, **Bootstrap**, and **React Router Dom**.

---

## Features

✅ **User Registration**
- Users can create an account by providing:
  - **Name**: Must contain only letters (A–Z, a–z) and be at least 3 characters long.
  - **Email**: Must be a valid email address (e.g., name@example.com).
  - **Password**: Must meet strength requirements (see below).
- Invalid input triggers custom alert messages for clear feedback.

✅ **User Login**
- Login requires valid credentials (email + password).
- Credentials are verified from localStorage.
- Invalid credentials show an error alert.

✅ **Profile Management**
- Logged-in users can view and edit their name, email, and password.
- Password updates follow the same strong validation rules.
- Logout clears session data.

✅ **Routing**
- Uses **React Router Dom v7** for navigation between pages.

✅ **Styling**
- Simple, clean layout built using **Bootstrap 5**.

---

## **Validation Rules**

### 🧍 Name Validation
- Must contain only letters (A–Z, a–z) and spaces.
- Must be at least **3 characters long**.
- Examples:
  - John Doe ✅
  - Alice ✅
  - A ❌ (too short)
  - John123 ❌ (numbers not allowed)

---

### ✉️ Email Validation
- Must follow a **standard email format** (e.g., `username@domain.com`).
- Cannot contain spaces or invalid characters.
- Validation is performed using the regex pattern: /^[^\s@]+@[^\s@]+.[^\s@]+$/
- Examples:
  - name@example.com ✅  
  - john.doe@gmail.com ✅  
  - user@domain ❌ (missing `.com`)  
  - user@@mail.com ❌ (invalid syntax)

---

### 🔒 Password Validation
The password must:
- Be **at least 6 characters long**.
- Contain **at least one letter (A–Z, a–z)**.
- Contain **at least one number (0–9)**.
- Contain **at least one special character** (`@$!%*?&`).
- Validation is performed using the regex pattern: /^(?=.[A-Za-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{6,}$/
- Examples of **valid passwords**:
  - React@123 ✅  
  - User!2025 ✅  
  - Hello$1 ✅  
- Examples of **invalid passwords**:
  - abc123 ❌ (no special character)  
  - password@ ❌ (no number)  
  - Pass12 ❌ (no special character)  

---


## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Hemraj-7/react-account-app.git
