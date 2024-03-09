import Link from "next/link";

const Card = () => {
    return (
        <div className="p-4 flex bg-white dark:bg-darkShade rounded-lg my-2">
            <div className="w-[15%] flex items-center justify-center p-5">Logo</div>
            <div className="w-[85%] flex justify-between">
                <div className="flex flex-col">
                    <h1 className="font-bold">Google</h1>
                    <p className="text-xs">Full Stack Developer</p>
                    <p className="text-xs">3 Days ago</p>
                </div>
                <div className="text-right flex flex-col ">
                    <p className="text-xs">Singapore</p>
                    <Link href='#' className="text-sm self-end">View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;