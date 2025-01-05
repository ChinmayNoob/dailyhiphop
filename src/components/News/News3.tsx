import { FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa6"
import ClickableWord from "../ClickableWord"

const News3 = () => {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <div className="mt-5 flex flex-col border-4 border-black p-2">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="font-Impact text-4xl">KANYE WEST</div>
                            <div className="text-gray-500">@kanyewest</div>
                        </div>
                        <div className="text-2xl font-bold border-4 border-gray-600 p-1 rounded-lg text-gray-600">
                            Following
                        </div>
                    </div>
                    <div className="font-Helvetica text-3xl font-bold py-2">you may be talented,but you're not kanye west</div>
                    <div>
                        <span>12:52AM - 6 Jul 2012</span>
                    </div>
                    <hr className="border-t-[2px] border-black/90" />
                    <div className="flex gap-2 my-2">
                        <div className="font-EditorialNew gap-4 flex">
                            <div>
                                <span className="font-bold">68,876</span>{" "}Retweets
                            </div>
                            <div>
                                <span className="font-bold">420,781</span>{" "}Likes
                            </div>
                        </div>
                    </div>
                    <hr className="border-t-[2px] border-black/90" />
                    <div className="flex gap-2 my-2">
                        <div className="font-EditorialNew gap-4 flex">
                            <div className="flex items-center gap-1">
                                <FaRegComment size={20} />
                                4.2k
                            </div>
                            <div className="flex items-center gap-1">
                                <FaRetweet size={20} />
                                68k
                            </div>
                            <div className="flex items-center gap-1">
                                <FaRegHeart size={20} />
                                421k
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="basis-2/3 text-justify border-r-2 border-zinc-800 pr-2 flex flex-col gap-2"
                    >
                        <div className=" text-9xl  font-Canopee text-center bg-red-900 w-full my-10 text-[#E9E4DB] p-2">
                            <p>The Richest Black Person Alive</p>
                        </div>
                        <div className="flex gap-3 text-sm text-justify">
                            <div className="flex-1 flex flex-col gap-1.5">
                                <div>
                                    <img src="/img/grammy.png" alt="" className="grayscale object-cover w-full" />
                                </div>
                                <p>
                                    Rapper-slash-fashion designer Kanye West is now the wealthiest Black American ever, according to an estimate from Bloomberg News that places his net worth at well beyond $6 billion.
                                    That figure includes West's Yeezy clothing and shoe deal with Adidas and Gap, which investment bank UBS valued at $3.2 billion to $4.7 billion. Bloomberg also estimated that West has $122 million in cash or stock, along with a $110 million music catalog and $1.7 billion in other investments. Sales of Yeezy's Adidas sneakers grew 31% during the coronavirus pandemic to annual revenue of nearly $1.7 billion last year, netting West $191 million in royalties, Bloomberg said in citing UBS.
                                    West's status as a billionaire is a far cry from where the Chicago-born college dropout found himself five years ago. West, 43, told BET News that he was $53 million in debt in 2016. About $16 million of that came from trying to get Yeezy up-and-running, West said.                                 </p>
                                <p>
                                    His fortunes finally turned after Yeezy launched. Forbes reported that West negotiated an 11% royalty on his Adidas Yeezy shoes. He eventually generated $150 million in income during Yeezy's first 12 months of existence, according to Forbes. West signed a 10-year deal with Gap for Yeezy clothes and shoes.As Yeezy continued to gain steam, its success caught the attention of West's then-wife Kim Kardashian. Kardashian tweeted about how proud she was of West turning around his fortune. Forbes declared West a billionaire last April, listing his net worth at $1.3 billion.
                                    Kanye West has earned 24 Grammy Awards, with wins across multiple categories, including Best Rap Album and Best Rap Song. His recognition spans a diverse range of genres and continues to solidify his legacy as one of the most influential artists in music history. With numerous nominations and awards, Kanye has made a significant impact on both the music industry and the cultural landscape. His contributions, innovative approach, and boundary-pushing music continue to resonate with fans and peers alike.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <div className="text-3xl font-EditorialNew font-bold">
                                    <p>
                                        <ClickableWord word="Everbody wanted to know what I would do if I didn't win.
                                        I guess we'll never know : Kanye after winning his first grammy" soundFile="/sounds/grammy.mp3" />

                                    </p>

                                </div>
                                <div>
                                    <img src="/img/henessy.png" alt="" className="grayscale object-cover w-full" />
                                </div>
                                <p>
                                    Kanye West's The College Dropout won Best Rap Album at the 2005 Grammy Awards, marking a major career milestone. The groundbreaking album, which blended introspection with innovative production, was a critical and commercial success, cementing West’s place in hip-hop history. Kanye delivered a breath taking winning speech which is claimed to be the best speech ever given in grammy's.
                                </p>
                                <p>
                                    Some of the best tracks from the album having chip{" "}munk soul type production were{" "}
                                    <ClickableWord word="All Falls Down" soundFile="/sounds/AllFallsDown.mp3" />
                                    ,"Slow Jamz", "Spaceship","Family Business","Jesus Walks" and many.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/3 text-justify flex flex-col gap-2">
                        <div>
                            <h1 className="text-3xl text-center font-EditorialNew my-2">
                                Ye's Streaming Numbers entering 2025
                            </h1>
                        </div>
                        <img src="/img/clgdropout.png" alt="" className="object-cover grayscale" />
                        <div className="border-2 border-black flex flex-col text-justify mt-2">
                            <div className="mx-2">
                                <div className="text-center text-2xl font-bold underline p-1">Albums</div>
                                <div className="flex justify-between items-center font-bold">
                                    <div>
                                        Name
                                    </div>
                                    <div>
                                        Streams
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        1. Graduation
                                    </div>
                                    <div>
                                        6,754,619,702
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        2. The Life of Pablo
                                    </div>
                                    <div>
                                        5,333,482,181
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        3. My Beautiful Dark Twisted Fantasy
                                    </div>
                                    <div>
                                        4,498,138,360
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        4. Watch the Throne
                                    </div>
                                    <div>
                                        3,199,791,494
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        5. Donda
                                    </div>
                                    <div>
                                        3,075,937,153
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        6. Yeezus
                                    </div>
                                    <div>
                                        2,641,008,508
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        7. Late Registration
                                    </div>
                                    <div>
                                        2,619,724,479
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        8. The College Dropout
                                    </div>
                                    <div>
                                        2,563,966,338
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        9. 808s & Heartbreak
                                    </div>
                                    <div>
                                        2,445,611,264
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p>
                                            10. <ClickableWord word="ye" soundFile="/sounds/GhostTown.mp3" />
                                        </p>
                                    </div>
                                    <div>
                                        2,410,038,773
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        11. Vultures 1
                                    </div>
                                    <div>
                                        1,706,883,370
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        12. JESUS IS KING
                                    </div>
                                    <div>
                                        1,302,493,386
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        12. Vultures 2
                                    </div>
                                    <div>
                                        312,341,376
                                    </div>
                                </div>
                            </div>
                            <div className="text-center text-2xl font-bold mt-2 underline p-1">Songs</div>
                            <div className="mx-2">
                                <div className="flex justify-between items-center font-bold">

                                    <div>
                                        Name
                                    </div>
                                    <div>
                                        Streams
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        1. Niggas in Paris
                                    </div>
                                    <div>
                                        1,555,421,749
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        2. Heartless
                                    </div>
                                    <div>
                                        1,538,050,153
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        3. Stronger
                                    </div>
                                    <div>
                                        1,511,785,310
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        4. Father Stretch My Hands Pt.1
                                    </div>
                                    <div>
                                        1,270,786,024
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        5. Gold Digger
                                    </div>
                                    <div>
                                        1,268,043,836
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p>6. <ClickableWord word="Flashing Lights" soundFile="/sounds/FlashingLights.mp3" /></p>
                                    </div>
                                    <div>
                                        1,249,825,296
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        7. FourFiveSeconds
                                    </div>
                                    <div>
                                        1,208,089,994
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p>8. <ClickableWord word="Bound 2" soundFile="/sounds/Bound2.mp3" /> </p>
                                    </div>
                                    <div>
                                        1,068,619,126
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        9. POWER
                                    </div>
                                    <div>
                                        998,809,859
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        10. Runaway
                                    </div>
                                    <div>
                                        844,213,401
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        11. I Wonder
                                    </div>
                                    <div>
                                        829,502,290
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        12. American Boy
                                    </div>
                                    <div>
                                        788,023,547
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default News3