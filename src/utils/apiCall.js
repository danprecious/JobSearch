import axios from "axios";



export const getJobs = async () => {
  try {
    const response = await axios("http://localhost:3000/jobs");
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error)
  }
};

// export async function fetchJobs({q, page, country, city}) {
//   const options = {
//     method: "GET",
//     url: "https://job-search-api1.p.rapidapi.com/v1/job-description-search",
//     params: {
//       q: "software engineer",
//       page: "1",
//       country: "us",
//       city: "Seattle",
//     },
//     headers: {
//       "x-rapidapi-key": "be74f51373msh9fc0904a9077b69p1cd112jsn538e2d4c2965",
//       "x-rapidapi-host": "job-search-api1.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);

//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function fetchJobs2(query){
  const options = {
    method: 'GET',
    url: 'https://job-search-api1.p.rapidapi.com/v1/job-description-search',
    params: {
      q: 'software engineer',
      page: '2',
      country: 'us',
      city: 'Seattle'
    },
    headers: {
      'x-rapidapi-key': 'd44b55a8bdmsh52855733e8bfc42p175d80jsn435772d43d75',
      'x-rapidapi-host': 'job-search-api1.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }

}








