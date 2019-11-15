import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID f7d10a0c456143e628e122bbe55c72943b5f4bbba0c83f575668899d328ca674'
  }
});

