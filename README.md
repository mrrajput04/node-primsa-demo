# Express, PostgreSQL, and Prisma

🚀 A simple Express.js project using PostgreSQL with Prisma ORM for database management.

## 📂 Project Structure
```sh
.
├── index.js        # Main entry point
├── prisma/        # Prisma schema and migrations
├── routes/        # API routes
├── controllers/   # Business logic for APIs
├── middlewares/   # Middleware functions
├── config/        # Configuration files (e.g., database connection)
├── package.json   # Project metadata and dependencies
└── README.md      # Documentation
```

## 🛠 Tech Stack
- **Backend:** Express.js
- **Database:** PostgreSQL with Prisma ORM
- **Environment Variables:** dotenv
- **Validation:** body-parser
- **Type Safety:** TypeScript (with @types)

## 🚀 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR_GITHUB_USERNAME/express-postgres-prisma.git
   cd express-postgres-prisma
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up the Prisma schema and database:
   ```sh
   npx prisma migrate dev --name init
   ```
4. Start the application:
   ```sh
   npm start
   ```

## 🛠 Dependencies
```json
{
  "@prisma/client": "^6.5.0",
  "body-parser": "^1.20.3",
  "dotenv": "^16.4.7",
  "express": "^4.21.2"
}
```

## 🛠 Dev Dependencies
```json
{
  "@types/express": "^5.0.1",
  "@types/node": "^22.13.10",
  "ts-node": "^10.9.2",
  "typescript": "^5.8.2"
}
```

## 📜 License
This project is licensed under the **ISC License**.

