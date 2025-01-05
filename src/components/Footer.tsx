
const Footer = () => {
    return (
        <>
            <div className=" marquee-container">
                <div className="marquee">
                    I made{" "}
                    <span className="bg-black text-[#D5D1C8] font-bold p-1">Jesus Walks</span>, I&apos;m never going to Hell.
                </div>
            </div>
            <div className="flex items-center my-8">
                <div className="flex-grow space-y-0.5">
                    <hr className="border-t-[5px] border-black/85" />
                    <hr className="border-t-[2px] border-black/90" />
                </div>
                <span className="mx-2 text-7xl font-OldLondon  ">The End</span>

                <div className="flex-grow space-y-0.5">
                    <hr className="border-t-[5px] border-black/85" />
                    <hr className="border-t-[2px] border-black/90" />
                </div>
            </div>
            <div className="py-7 font-Canopee text-2xl  flex flex-row justify-between px-6 ">
                <a target="_blank" href="https://chinmayn00bwrites.vercel.app/">
                    chinmayn00b ©
                </a>

                <div className=" flex gap-2 ">
                    <a target="_blank" href="https://x.com/Chinmay0408">
                        Twitter
                    </a>
                    <span>•</span>
                    <a target="_blank" href="https://github.com/ChinmayNoob">
                        Github
                    </a>
                    <span>•</span>
                    <a target="_blank" href="https://www.linkedin.com/in/chinmay-sawant0408/">
                        LinkedIn
                    </a>
                    <span>•</span>
                    <a target="_blank" href="mailto:chinmaypvt04@gmail.com">
                        Email
                    </a>

                </div>
            </div>
        </>
    )
}

export default Footer