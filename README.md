# Transaction Tracker - React Native App

A simple React Native app built with Expo to track personal expenses and income, designed as a practice project to build skills in React Native development. Uses Clerk for user authentication.

## ✨ Features

- 📱 **React Native with Expo** - Cross-platform mobile app development
- 🔐 **Clerk Authentication** - Secure user sign-up, login, and session management
- 💸 **Transaction Tracking** - Add, view, and categorize expenses and income
- 🖥️ **Simple UI** - Clean and intuitive interface for managing transactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Expo CLI: `npm install -g expo-cli`
- Expo Go app (for mobile testing)

### Installation

1. Clone or download this repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure Clerk:
   - Set up a Clerk account at [clerk.com](https://clerk.com)
   - Add your Clerk API keys to a `.env` file (see `.env.example`)

4. Start the development server:

   ```bash
   npx expo start
   ```

5. Scan the QR code with the Expo Go app or run on an emulator


## 🛠 Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in browser (if supported)

## 📦 Customization

- **Styling**: Uses React Native's StyleSheet or your preferred styling library
- **Clerk Auth**: Customize auth flows in `components/auth`
- **Transaction Logic**: Edit `screens/Transactions.tsx` for custom features

## 🚀 Deployment

Build the app using Expo EAS:

```bash
eas build
```

Follow Expo's documentation for submitting to App Store or Google Play.

## 📄 License

MIT License
