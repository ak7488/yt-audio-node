const express = require('express');
const ytdl = require('ytdl-core');
const path = require('path');
const axios = require('axios')

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

        if(!id) return res.status(400).send();

        const info = await ytdl.getInfo(`https://www.youtube.com/watch?v=${id}`);

        const contentLength = info.formats.filter(e => e.itag === 140)[0].contentLength;

        res.setHeader('Accept-Ranges', "bytes");
        res.setHeader('Content-Length', contentLength.toString());

        ytdl.downloadFromInfo(info, {quality: '140'}).pipe(res);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
});

app.get('/video-info/:id', async (req, res) => {
    try {
        const id = req.params.id;

        if(!id) return res.status(400).send();

        const {related_videos, videoDetails} = await ytdl.getBasicInfo(`https://www.youtube.com/watch?v=${id}`);

        res.send({related_videos, videoDetails})
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
})

const getVideo = async (pageToken = '', id, t) => {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${id}&key=${process.env.YT_API_KEY}${pageToken === '' ? "" : `&pageToken=${pageToken}`}`

    const {data} = await axios(url)

    if(t >= data.pageInfo.totalResults) return {items: [], totalResults: data.pageInfo.totalResults}

    const obj = await getVideo(data.nextPageToken, id, t + 50)

    return {
        items: [...data.items, ...obj.items],
        totalResults: data.pageInfo.totalResults
    }
}

app.get('/video-from-list/:id', async (req, res) => {
    try {
        const id = req.params.id;

        if(!id) return res.status(400).send();

        const info = await getVideo('', id, 0);
        
        res.send(info)
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
})

app.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
})

//aqz-KE-bpKQ