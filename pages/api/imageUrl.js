const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  console.log(req)
    if (req.method === 'POST') {
        let obj = req.body
        const response = await openai.createImage({
            prompt: obj.prompt,
            n: parseInt(obj.n),
            size: obj.size,
        });
        const url = response.data
        res.status(201).json(url)
    }
  }