import News1 from "./News/News1"
import News2 from "./News/News2"
import News3 from "./News/News3"

const News = () => {
  return (
    <div className="">
      <News1 />
      <hr className="border-t-2  border-zinc-800" />
      <div className=" flex items-center">
        <div className=" text-8xl  font-Canopee text-center bg-zinc-800 w-full my-10 text-[#E9E4DB] p-2">
          <p>I hate being Bi-polar, It's Awesome</p>
        </div>
      </div>
      <hr className="border-t-2 mb-6 border-zinc-800" />

      <News2 />
      <hr className="border-t-2 my-6 border-zinc-800" />

      <News3 />
      <hr className="border-t-2 my-4 border-zinc-800" />
    </div>
  )
}

export default News