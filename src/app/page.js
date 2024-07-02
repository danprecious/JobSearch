import { getServerSession } from "next-auth";
import {authOptions} from './api/auth/[...nextauth]/route'; 


const Page = async () => {
    const session = await getServerSession(authOptions)
  
  return (
    <div className="mt-40">
      Home
       <br></br>
      {/* {JSON.stringify(session)} */}
      
      
    </div>
  );
};

export default Page;
