import Link from "next/link";

const Card = ({job}) => {
    const {logo,title, id, company_name} = job;
    console.log(job.company_name)

    return (
        <div className="p-4 flex bg-white dark:bg-darkBg rounded-lg mb-4">
            <div className="w-[15%] flex  text-xs  pr-3 items-center">Logo</div>
            <div className="w-[85%] flex justify-between">
                <div className="flex flex-col justify-between">
                    <h1 className="font-bold">{company_name}</h1>
                    <p className="text-xs">{title}</p>
                    <p className="text-xs">3 Days ago</p>
                </div>
                <div className="text-right flex flex-col justify-between font-extralight">
                    <p className="text-xs">Singapore</p>
                    <Link href='#' className="text-xs self-end">View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;