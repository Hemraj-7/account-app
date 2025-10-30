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


## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Hemraj-7/react-account-app.git
