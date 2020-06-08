import axios from 'axios'

const KEY = "AIzaSyBa6Lm3PExsrmPpVAEGJ-BOT66sB2sg_ls"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});

export const baseParams = {
  part: "snippet",
  maxResults: 200,
  key: KEY
};

