// Script pentru inițializarea bazei de date SQLite local
const Database = require('better-sqlite3');
const db = new Database('costelbanden.db');

// Tabel pentru date de contact
// (doar un singur rând, id=1)
db.exec(`
CREATE TABLE IF NOT EXISTS contact (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  telefon TEXT,
  email TEXT,
  whatsapp TEXT,
  adresa TEXT,
  program TEXT,
  pretUrgenta TEXT,
  instructiuniProgramari TEXT
);
INSERT OR IGNORE INTO contact (id) VALUES (1);
`);

// Tabel pentru servicii
// (id unic, restul câmpurilor text)
db.exec(`
CREATE TABLE IF NOT EXISTS servicii (
  id TEXT PRIMARY KEY,
  icon TEXT,
  nume TEXT,
  pret TEXT,
  descriere TEXT
);
`);

console.log('Baza de date SQLite a fost inițializată cu succes!');
