import Link from "next/link";

const Card = ({ job }) => {
    const { logo, title, id, company_name, source } = job;
    // console.log(job.company_name)

    return (
        <div className="px-4 py-7 justify-between flex bg-white dark:bg-darkBg rounded-lg mb-4">
            <div className="flex w-[100%]  justify-between">
                <div className="flex flex-col  justify-between">
                    <h1 className="font-bold py-1">{company_name}</h1>
                    <p className="text-xs opacity-80">{title}</p>
                    <p className="text-xs opacity-80">3 Days ago</p>
                </div>
                <div className="text-right flex flex-col justify-between font-extralight">
                    <p className="text-xs opacity-80">{source}</p>
                    <Link href={`/findJobs/${id}`} className="text-xs opacity-80 text-red-500 font-bold self-end">View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;