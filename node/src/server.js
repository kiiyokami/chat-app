const express = require('express');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
const key = process.env.CHAT_ENGINE_PRIVATE_KEY;

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": key } }
            );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
  });

app.listen(port);
