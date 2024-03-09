import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex">
      <div className="h-[40px] w-[40px] overflow-hidden flex justify-center items-center mx-2 rounded-lg bg-zinc-500">
        <Image width={1040} height={1040} className="" src="/assets/images/profile-image.jpeg"/>
      </div>
      <div className="flex-col md:flex justify-center hidden">
        <p className="text-xs font-extralight">Hello</p>
        <p className="text-sm font-semibold">Robin Sharma</p>
      </div>
    </div>
  )
}

export default Profile;
