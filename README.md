# Admin Dashboard – Next.js + NextAuth + MUI
A modern Admin Dashboard built using Next.js App Router, NextAuth (Credentials Provider), Material UI (MUI), and DummyJSON API.
It includes authentication, users listing with pagination & search, and detailed user views.

## 🚀 Features
🔐 Authentication

Admin login using NextAuth Credentials Provider

Authenticated sessions with JWT

Custom login page (/admin/login)

Redirect authenticated users to dashboard

## 👥 Users Management

Users List Page

Fetch users from DummyJSON API

Pagination (limit & skip)

Search users

Responsive MUI Table UI

View user details

Single User Details Page

Full user profile

Company & address info

Clean MUI card layout

Back to users navigation

## 🧰 Tech Stack

Next.js 16 (App Router)

NextAuth.js

Material UI (MUI)

DummyJSON API

TypeScript

Turbopack

## 📂 Project Structure
src/
 ├── app/
 │   ├── admin/
 │   │   ├── login/
 │   │   │   └── page.tsx
 │   │   ├── users/
 │   │   │   ├── page.tsx
 │   │   │   └── [id]/
 │   │   │       └── page.tsx
 │   └── api/
 │       └── auth/
 │           └── [...nextauth]/route.ts
 ├── components/
 └── styles/

🔑 Demo Credentials (DummyJSON)

Use these credentials on the login page:

Username: kminchelle
Password: 0lelplR


These credentials are provided by DummyJSON API

## 🌐 APIs Used
Authentication
POST https://dummyjson.com/auth/login

Users
GET https://dummyjson.com/users?limit=10&skip=0
GET https://dummyjson.com/users/search?q=...
GET https://dummyjson.com/users/{id}

🛠️ Installation & Setup
## 1️⃣ Clone the repo
git clone https://github.com/your-username/admin-dashboard-nextjs.git
cd admin-dashboard-nextjs

## 2️⃣ Install dependencies
npm install

3️⃣ Environment Variables

Create a .env.local file:

NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

4️⃣ Run the project
npm run dev


App runs at 👉 http://localhost:3000

🔒 Protected Routes

/admin/users

/admin/users/[id]

Only authenticated users can access these pages.

## 🎯 Future Improvements working on

Role-based access (Admin / User)

Server-side pagination

User edit & delete

Dark mode support

API error handling & skeleton loaders

## the login page
<img width="1919" height="1079" alt="Screenshot 2026-01-14 171651" src="https://github.com/user-attachments/assets/473daf58-cc65-47a2-98b3-30097e078482" />
## the dashboard after logging in
<img width="1726" height="917" alt="Screenshot 2026-01-14 171637" src="https://github.com/user-attachments/assets/3708f6d4-f414-4828-b5b0-4df08a095801" />
## the users page
<img width="1919" height="1079" alt="Screenshot 2026-01-14 171702" src="https://github.com/user-attachments/assets/00a929bf-4f5c-4ce0-99b1-bff26b084e13" />
## searching the users
<img width="1919" height="1071" alt="Screenshot 2026-01-14 171722" src="https://github.com/user-attachments/assets/ef486b8c-234b-4fd7-b1bf-8ced5e234a2a" />
## viewing the user
<img width="1919" height="1079" alt="Screenshot 2026-01-14 171731" src="https://github.com/user-attachments/assets/f05be473-f29e-4184-be36-1c03ddc194d2" />



