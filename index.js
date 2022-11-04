import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const signUp = [];

const tweets = [
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		tweet: "eu amo o hub"
	}
]

app.post("/sign-up", (req, res) => {

	const {username, avatar} = req.body;

	const user = {
		username,
		avatar
	};

	signUp.push(user);

	res.send(signUp);
});


app.post("/tweets", (req,res) => {
	const {username, tweet} = req.body;

	let obj = signUp.find((item) => item.username === username);

	const post = {
		avatar: obj.avatar,
		username,
  		tweet
	}

	tweets.push(post);

	res.send(tweets);
});


app.get("/tweets", (req, res) => {
    res.send(tweets);
});

app.listen(5000, () => {
    console.log("servidor ativo na porta 5000")
});
