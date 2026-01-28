-- Migration: 0001_init.sql
-- Create initial database schema for Proactive Physiotherapy

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE,
  password TEXT,
  createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
  updatedAt TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id TEXT PRIMARY KEY,
  userId TEXT,
  service TEXT,
  therapist TEXT,
  date TEXT,
  time TEXT,
  status TEXT DEFAULT 'confirmed',
  createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(userId) REFERENCES users(id)
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id TEXT PRIMARY KEY,
  firstName TEXT,
  lastName TEXT,
  email TEXT,
  subject TEXT,
  message TEXT,
  createdAt TEXT DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_appointments_userId ON appointments(userId);
