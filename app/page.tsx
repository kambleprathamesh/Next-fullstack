
// "use client"
import axios from "axios";
// import { useState } from "react";



export default async function Home() {

  // interface User {
  //   email: string,
  //   name: string
  // }
  // const [userData, setUserdData] = useState<User>()
  // const [loading, setLoading] = useState(true);



  // const getUserDetails = async () => {
  //   await new Promise((r) => setTimeout(r, 5000));
  //   // const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  //   const response = await axios.get("http://localhost:3000/api/user");
  //   console.log("RESPONSE", response.data);
  //   return response.data;
  //   //  .then(response => {
  //   //   setUserdData(response.data);
  //   //   setLoading(false);
  //   // })
  // }

  // const data = await getUserDetails();
  // console.log("DATA", data);

  // if (loading) {
  //   return <Skeleton />
  // }

  return (
    <div className="w-screen h-screen flex justify-center items-center border-2 border-black ">
      <div className="w-sm  p-4 border-2 border-gray-500 rounded-md ">
        <div className="text-lg h-8 p-1  text-black font-semibold mb-2">
          Username
        </div>
        <div className="text-lg h-8 p-1  text-black font-semibold">
          Email
        </div>
      </div>
    </div>
  );
}



export function Skeleton() {
  return (<>
    <div className="w-full h-screen flex justify-center items-center border-2 border-black">
      <div role="status" className="w-sm animate-pulse p-4 border-2 border-gray-500 rounded-md ">
        <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-400 max-w-[360px] mb-2.5"></div>
        <div className="h-8 bg-gray-200 rounded-lg dark:bg-gray-400 mb-2.5"></div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>


  </>)
}
