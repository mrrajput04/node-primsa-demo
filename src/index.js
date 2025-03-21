import express from 'express';
import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

// Write API: Store data in PostgreSQL
app.post('/data', async (req, res) => {
    try {
        const { name, email } = req.body;
        const newData = await prisma.user.create({
            data: { name, email },
        });
        res.json(newData);
    } catch (error) {
        res.status(500).json({ error: 'Error storing data' });
    }
});

// Read API: Retrieve data from PostgreSQL
app.get('/data', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        console.log(users)
        res.json(users);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error fetching data' });
    }
});

const PORT = process.env.PORT || 3012;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
