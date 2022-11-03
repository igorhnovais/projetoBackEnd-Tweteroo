import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const tweets = [
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
		tweet: "eu amo o hub"
	}
]


app.get("/tweets", (req, res) => {
    res.send(tweets);
} )

app.listen(5000, () => {
    console.log("servidor ativo na porta 5000")
})
