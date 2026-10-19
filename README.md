
<div align="center">

# 💸 FundFlow

### Personal Finance Management Application

A cross-platform mobile application designed to help users manage their income, expenses, and savings.

**University Group Project | Fontys ICT**

</div>

---

## 📖 About the Project

FundFlow is a personal finance management application developed as part of a university group project at Fontys University of Applied Sciences.

The goal is to help users understand their financial activity and manage their budgets through an intuitive mobile interface.

The project combines mobile development, Back-End services, database management, and authentication.

---

## ✨ Project Features & Goals

### Core Functionality

- Income and expense tracking
- Personal transaction management
- User authentication and account management
- Financial overview and budgeting

### Features Under Development

- Weekly and monthly spending dashboards
- Savings goals and progress tracking
- Custom notifications
- Real-time data synchronization
- Research into banking API integration

> Some features are still under development or were explored during the research phase.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Mobile Development | React Native, Expo |
| Language | JavaScript |
| Back-End | Node.js, Express.js |
| Database | PostgreSQL, Neon |
| Authentication | Clerk |
| Styling | NativeWind / Tailwind CSS |
| UI/UX Design | Figma |
| Version Control | Git, GitHub |

**Additional Research:** Redis for real-time state management.

---

## 🏗️ Project Architecture

FundFlow separates the mobile application from the Back-End.

### Mobile Application

`mobile/`

Responsible for the user interface, navigation, authentication flow, and communication with the Back-End.

### Back-End API

`backend/`

Provides server-side functionality and API endpoints for managing application data.

### Database

PostgreSQL hosted on Neon is used for relational data storage.

### Authentication

Clerk is used for authentication and session management.

---

## 📂 Repository Structure

```text
FundFlow/
├── mobile/       # React Native / Expo app
├── backend/      # Node.js / Express API
└── README.md     # Project documentation
```

---

## 🤝 Team Collaboration

FundFlow was developed as a collaborative university project.

The team worked on different aspects of the application, including:

- Requirements analysis
- UI/UX design and prototyping
- Front-End development
- Back-End development
- Database integration
- Technical research and documentation
- Git-based collaboration

The project provided experience working as part of a software development team.

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- Expo Go or an Android/iOS emulator
- PostgreSQL database
- Required environment variables

### 1. Clone the Repository

```bash
git clone https://github.com/barreirafds/FundFlow.git
cd FundFlow
```

### 2. Back-End Setup

```bash
cd backend
npm install
npm run dev
```

Configure the database connection and required environment variables before starting the server.

### 3. Mobile Application Setup

Open another terminal:

```bash
cd mobile
npm install
npx expo start
```

Configure the API URL in `mobile/.env`:

```env
EXPO_PUBLIC_API_URL=http://localhost:8080
```

Replace the address with the appropriate reachable Back-End URL when testing on a physical device.

### 4. Run the App

Use Expo Go or an emulator to launch the application.

> Never commit database passwords, authentication secrets, or other sensitive credentials.

---

## 🎨 UI/UX Design

The interface was designed with a focus on simplicity, accessibility, and clear financial information.

Figma was used for prototyping and exploring the application's visual identity and user experience.

---

## 🎓 Academic Context

**University:** Fontys University of Applied Sciences  
**Programme:** ICT — Software Development  
**Project Type:** Group Academic Project

---

## 👨‍💻 Project Repository

Maintained as a university group project.

[GitHub Repository](https://github.com/barreirafds/FundFlow)

---

<div align="center">

*Learning through collaboration, experimentation, and practical software development.*

</div>
