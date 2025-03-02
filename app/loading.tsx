
export default function Skeleton() {
    return (<>
        <div className="w-full h-screen flex justify-center items-center border-2 border-black">
            <div role="status" className="w-sm animate-pulse p-4 border-2 border-gray-500 rounded-md ">
                <div className="h-8 bg-gray-200 rounded-lg dark:bg-yellow-400 max-w-[360px] mb-2.5"></div>
                <div className="h-8 bg-gray-200 rounded-lg dark:bg-green-400 mb-2.5"></div>

                <span className="sr-only">Loading...</span>
            </div>
        </div>


    </>)
}
