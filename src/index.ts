import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";

const app = express();

app.use(express.json());
const prismaClient  = new PrismaClient();

app.get("/", async (req, res) => {

    const data = await prismaClient.user.findMany();
    res.json({
        data
    })
})

app.post("/", async (req,res) => {
    await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    res.json({
        "message": "Post endpont"
    })
})

app.listen(3000);