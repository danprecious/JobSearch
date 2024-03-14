export const GetPost = async () =>{
    try {
        const data = await fetch('/data.json')
        const response = await data.json()
        const jobsArray = response.jobs
        console.log(jobsArray)
        return jobsArray;
    }
    catch(error){
        // console.log(error)
    }
}
