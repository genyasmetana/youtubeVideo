import axios from 'axios';

const KEY = 'AIzaSyBSufgeLzFNApho-7mECstbbcpodAomi34';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
