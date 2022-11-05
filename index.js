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

	signUp.push(user);

	res.send("OK");
});


app.post("/tweets", (req,res) => {
	const {username, tweet} = req.body;

	let obj = signUp.find((item) => item.username === username);

	const post = {
		avatar: obj.avatar,
		username,
  		tweet
	}

	tweets.unshift(post);
	
	res.send("OK");
	
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
