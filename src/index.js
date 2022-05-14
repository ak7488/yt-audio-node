const express = require('express');
const ytdl = require('ytdl-core');
const ffmpegPath = require('ffmpeg-static');
const ffmpeg = require('ffmpeg');
const path = require('path')

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/ok', (req, res) => res.send('ok'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.get('/audio/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const info = await ytdl.getInfo(`https://www.youtube.com/watch?v=${id}`);

        const contentLength = info.formats.filter(e => e.itag === 140)[0].contentLength;

        res.setHeader('Accept-Ranges', "bytes");
        res.setHeader('Content-Length', contentLength.toString());

        ytdl.downloadFromInfo(info, {quality: '140'}).pipe(res);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
})

app.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
})

//aqz-KE-bpKQ