export const JobDetail = ({ paramsId }) => {
    // console.log(params)
  
    const jobData = jobs.find((job) => job.id === paramsId);
    console.log(jobData);
  
    const { company_name, title, application_url, source, salary, html_description, publication_time, plain_text_description } = jobData;
  
    return (
      <div className="w-[100%] md:w-[50%] py-5 px-4  rounded-3xl mx-2 hidden md:relative md:flex flex-col  bottom-0 h-[80%] md:rounded-none rounded-t-[2em] overflow-scroll md:overflow-hidden  dark:bg-darkShade md:dark:bg-darkBg ">
        <div className="flex justify-center flex-col items-center">
          {/* <p>"..."</p> */}
          <h2 className="text-[1.5rem] font-bold">{company_name}</h2>
        </div>
        <div className="flex justify-center flex-col my-10 items-center">
          <h2 className="text-[1.2rem] font-bold">{title}</h2>
          <p className="">{plain_text_description}</p>
        </div>
        <div className="flex justify-end p-2">
          <div className="font-bold text-right">{source}</div>
        </div>
        <div className="flex justify-center">
          <Link href={application_url} className="bg-purple-700 text-white rounded-[1.3em] py-4 px-8">
            Apply Now
          </Link>
        </div>
      </div>
    );
  };
  
  