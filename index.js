import express, { json } from "express";
import cors from "cors";

import { tweets } from "./tweets.js";

const app = express();

app.use(cors());
app.use(express.json());

const signUp = [];



app.post("/sign-up", (req, res) => {

	const {username, avatar} = req.body;

	const user = {
		username,
		avatar
	};

	if(!username || !avatar){
		return res.status(400).send("Todos os campos são obrigatórios");
	}

	signUp.push(user);

	res.status(201).send("OK, logado com sucesso!!");
});


app.post("/tweets", (req,res) => {
	const {username, tweet} = req.body;

	if(!username || !tweet){
		return res.status(400).send("Todos os campos são obrigatórios")
	}

	let obj = signUp.find((item) => item.username === username);

	const post = {
		avatar: obj.avatar,
		username,
  		tweet
	}

	tweets.unshift(post);
	
	res.status(201).send("OK, você fez um tweet");
	
});

 
app.get("/tweets", (req, res) => {

	let newTweets = [];

	for(let i = 0; i < 10; i++){
		newTweets.push(tweets[i]);
	}

	res.send(newTweets);
	
});


app.listen(5000, () => {
    console.log("servidor ativo na porta 5000")
});
