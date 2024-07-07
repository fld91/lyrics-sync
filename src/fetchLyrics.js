//import axios from 'axios';

const fetchLyrics = async (audioFile) => {
  const formData = new FormData();
  formData.append('file', audioFile);

  // Replace with your actual API endpoint
//   const response = await axios.post('YOUR_LYRICS_API_ENDPOINT', formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });

//   return response.data.lyrics;
// };
fetchLyrics=[
    { "time": 0, "text": "Line 1" },
    { "time": 5, "text": "Line 2" },
    { "time": 10, "text": "Line 3" }
  ]
}

export default fetchLyrics;
