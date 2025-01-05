import { FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa6"
import ClickableWord from "../ClickableWord"


const News1 = () => {
    return (
        <div className="flex flex-row justify-between gap-5 ,y-8">
            <div className="flex flex-col gap-4 basis-1/2 my-5">
                <img src="img/front-page.jpg" alt="front cover" className="h-full object-cover" />
                <div className=" flex gap-4 text-justify">
                    <div className=" flex-1 flex flex-col gap-1.5">
                        <div>
                            <h1 className="text-3xl">
                                808's & Heartbreak turns out to be most influential album in Modern Day Hip Hop
                            </h1>
                        </div>
                        <div className=" flex flex-col gap-0.5">
                            <p>

                                Kanye West's{" "}
                                <ClickableWord
                                    word="808s & Heartbreak"
                                    soundFile="/sounds/Heartless.mp3"
                                />
                                , released in 2008, marked a pivotal moment in the evolution of hip-hop and music at large. The album, characterized by its heavy use of Auto-Tune and electronic production, blended elements of rap, R&B, and avant-garde soundscapes, breaking away from traditional genre boundaries. At the time, critics and fans were divided over its unconventional approach, but its impact became undeniable as it influenced countless artists in the years that followed, especially in the realms of emo rap and experimental hip-hop. 808s & Heartbreak was West's great pivot: He had promised since 2005 that his fourth album would be called Good Ass Job, the capper to his premeditated hip-hop takeover. But then he evidently threw out this life script. "Hip-hop is over for me now,"" he started saying, dismissively, in interviews. "From now on, I want to be seen alongside only the musicians you see in the old black-and-white photographs—Jimi Hendrix, the Rolling Stones, the Beatles."
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-0.5">
                        <p>
                            Without this album, we wouldn't have artists such as Travis Scott, who owe large parts of their careers to the mastery of autotune. It opens the way for so many new possibilities in music that previously had not been adequately explored. The immense creativity of songs like "90210" wouldn't have been possible without West paving the way for this type of track.Additionally, the autotune amplifies his sound and fits it with the beat. Because of Kanye's style on "808s," artists grew to see autotune as a way to meld their voices and fit them with many different kinds of moods and beats. It wasn't a cop-out or something to be ashamed of, but a skill to conquer. Through "808s and Heartbreak" West welcomed the rap game into a new world—one of greater intimacy, vulnerability and creativity. Without this album, who knows whether the genre would have grown the way that it did. The current state of rap would undoubtedly be incredibly different. With musicians as impactful as West, I often find it hard to pick out their precise influence on the industry. While an in-depth listen to "808s" provided some clarity, often the best way to analyze the reach of these artists is to simply consider the evolution and typifying aspects of the modern style, knowing that the way things are is as good of an indication of someone's genius as anything.
                        </p>
                    </div>
                </div>
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
                    <div className="font-Helvetica text-3xl font-bold">I no Longer have a manager.I can't be managed</div>
                    <div>
                        <span>10:01AM - 25 Apr 2018</span>
                    </div>
                    <hr className="border-t-[2px] border-black/90" />
                    <div className="flex gap-2 my-2">
                        <div className="font-EditorialNew gap-4 flex">
                            <div>
                                <span className="font-bold">48,876</span>{" "}Retweets
                            </div>
                            <div>
                                <span className="font-bold">220,781</span>{" "}Likes
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
                                49k
                            </div>
                            <div className="flex items-center gap-1">
                                <FaRegHeart size={20} />
                                220k

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-1/2">
                <div className="pb-3">
                    <h1 className="text-7xl  font-Canopee text-center bg-zinc-800 w-full text-[#E9E4DB] p-2 my-5">
                        The Greatest Discography in Music
                    </h1>
                </div>
                <div className="flex flex-row gap-3 text-justify text-sm">
                    <div className="flex-1 flex flex-col gap-1">
                        <div className="flex flex-col gap-0.5">
                            <p>
                                <span className="high">Ye</span>
                                , formerly known as Kanye West, is a cultural icon whose journey from Chicago's South Side to global stardom is nothing short of extraordinary. Born on June 8, 1977, Ye's early love for music and art, fostered by his educator mother, Donda, shaped his path. He revolutionized hip-hop with The College Dropout in 2004, blending soulful beats and introspective lyrics. Beyond music, Ye became a trailblazing fashion designer, entrepreneur, and provocateur, known for his unfiltered opinions and groundbreaking ideas. Despite controversies, his influence transcends industries, leaving an indelible mark on modern culture as a creative visionary and polarizing figure.
                            </p>
                            <p>
                                Ye, a visionary artist and cultural pioneer, redefined boundaries across music, fashion, and art. Known for his unyielding ambition, he turned personal struggles into creative triumphs, shaping albums like 808s & Heartbreak and My Beautiful Dark Twisted Fantasy into masterpieces. His bold ventures into fashion with Yeezy revolutionized the sneaker industry, solidifying his role as a style icon. Despite controversies, Ye’s ability to innovate remains unmatched. From provocative interviews to arena-shaking performances, his influence permeates every corner of culture. A polarizing figure, Ye’s legacy continues to inspire and challenge perceptions, embodying the spirit of relentless self-expression and reinvention.
                            </p>
                        </div>
                        <div>
                            <h1 className="text-xl">
                                Ye Announces New Album "Bully", Debuts Song Beauty and the Beast at China Listening Event                            </h1>
                        </div>
                        <div className=" flex justify-center my-2">
                            <img src="/img/ye.gif" />
                        </div>
                        <div>
                            <p>
                                The superstar rapper — formerly known as Kanye West — announced a new album, titled Bully, and debuted the song "Beauty and the Beast" during a listening event at China&apos;s Wuyuan River Stadium in Haikou on Saturday (Sept. 28).
                                "I got a new album coming out," Ye told the crowd toward the end of his performance, as heard in fan-captured video from the show. "The album's called 'Bully' and this song is called 'Beauty and the Beast.'"
                                Earlier in the month, Ye made his return to China for his first performance in 16 years alongside Ty Dolla $ign to promote their Vultures collaborative albums. During the Sept. 15 appearance, Ye revealed plans for his next solo album and debuted a heavenly new song titled "Preacher Man."
                            </p>
                        </div>
                    </div>
                    <div className=" flex-1 flex flex-col gap-3  ">
                        {/* <div className=" flex justify-center">
                            <img src="/img/praying.png" />
                        </div> */}
                        <div className="flex flex-col gap-0.5">
                            <p>
                                Ye and Ty have released two Vultures albums this year. The long-delayed first Vultures set arrived in February, debuting at No. 1 on the Billboard 200 albums chart for back-to-back weeks. It marked the first time Ye held the top spot for more than a week since 2011's Watch the Throne. Vultures 2, which arrived in early August, reached No. 2 on the Billboard 200.
                            </p>
                        </div>
                        <div>
                            <div className="border-2 border-black p-2 flex flex-col gap-2">
                                <div className="text-2xl  font-Canopee text-center bg-red-900 w-full text-[#E9E4DB] p-2">The College Trilogy</div>
                                <p>
                                    Kanye West's College Trilogy—comprising The College Dropout (2004), Late Registration (2005), and Graduation (2007)—is a groundbreaking body of work that defined an era in hip-hop. Through these albums, Kanye crafted a narrative about ambition, self-doubt, and societal pressures, blending deeply personal themes with sharp social commentary. The College Dropout challenged traditional rap tropes, emphasizing vulnerability with tracks like "Through the Wire" and "Jesus Walks". Late Registration elevated his artistry further, incorporating lush orchestration, as seen in "Gold Digger" and{" "} 
                                    "<ClickableWord
                                    word="Touch the Sky"
                                    soundFile="/sounds/TouchTheSky.mp3"
                                    />". By the time Graduation arrived, Kanye was ready to embrace a global sound, merging rap with electronic influences in anthems like "Stronger" and "Good Life". The trilogy represents his evolution from a hungry, underestimated producer to a worldwide cultural icon. With its soulful beats, introspective lyrics, and experimental production, the College Trilogy cemented Kanye's place as one of music's most innovative creators.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col gap-0.5">
                                <div className="text-xl">
                                    The end of gangsta&apos;s Hip Hop
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>
                                        The 50 Cent vs. Kanye West rivalry in 2007 marked a turning point in hip-hop. Both artists released albums on September 11—Kanye's Graduation and 50 Cent's Curtis—sparking a media-fueled sales battle. 50 Cent, known for his gangsta rap persona, even claimed he would retire if Kanye outsold him. The clash highlighted a shift in the genre, contrasting 50's gritty sound with Kanye's innovative and introspective approach.

                                    </p>
                                    <p>
                                        Graduation, with hits like "Stronger", appealed to a broader audience, while Curtis stuck to traditional rap themes. When the first-week sales came in, Kanye's Graduation sold 957,000 copies, far surpassing Curtis' 691,000. Kanye's victory symbolized a major cultural shift in hip-hop, paving the way for more experimental, emotionally rich music to dominate the mainstream, while signaling the decline of gangsta rap's dominance. This battle remains a pivotal moment that reshaped the future of the genre.
                                    </p>
                                    <p className="font-bold">
                                        "Go listen to all my music,it's the code to self esteem.It's the code of who you are.If you're a kanye west fan,you're not a fan of me,you're a fan of yourself."
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className=" flex-1 flex flex-col gap-0.5  ">
                        <h1 className="text-xl">Kanye West: A History of Unforgettable Interview Moments</h1>
                        <p>
                            Kanye West, known as much for his bold personality as his artistic genius, has delivered some of the most memorable moments in interview history. From thought-provoking insights to controversial statements, his words have consistently sparked headlines and public debate.
                            One of his earliest iconic moments came in 2005 during a live Hurricane Katrina telethon. Kanye veered off script, declaring, "George Bush doesn't care about Black people," a statement that shocked viewers and ignited a national conversation on racial inequality.
                            In 2013, during an impassioned interview with BBC Radio 1's Zane Lowe, Kanye famously proclaimed, "I am a god," defending his creative ambitions beyond music. The interview, intense and deeply personal, cemented his status as a cultural provocateur.
                            Fast forward to 2018, Kanye stirred controversy during a TMZ interview by suggesting that slavery was a "choice." The remark led to widespread backlash and a heated exchange with staff members.
                            From coining himself the "Louis Vuitton Don" in 2007 to reflecting on the infamous 2009 Taylor Swift VMAs interruption, Kanye's interviews consistently capture public attention. Love him or loathe him, West's unfiltered approach ensures that his voice continues to shape cultural conversations.
                        </p>
                        <h1 className=" text-xl">
                            Kanye West&apos;s Donda Album Rollout: A Theatrical Journey

                        </h1>
                        <div className=" flex flex-col gap-0.5">
                            <p>
                                Kanye West's <ClickableWord word="Donda" soundFile="/sounds/OffTheGrid.mp3"/> album rollout in 2021 was nothing short of a cultural spectacle, blending music, performance art, and high anticipation. Named after his late mother, Donda became one of the most highly awaited projects in recent memory, fueled by West's enigmatic approach.

                                The rollout featured three massive listening events held in stadiums, each evolving into an elaborate performance. The first two events at Atlanta's Mercedes-Benz Stadium saw Kanye unveil versions of the album while living in the venue to finish it. The final event in Chicago, staged at Soldier Field, recreated his childhood home and included guest appearances from artists like Marilyn Manson and DaBaby, sparking both praise and controversy.

                                Despite delays, fans eagerly followed the rollout, dissecting every detail. When Donda finally released on August 29, 2021, its sprawling tracklist and ambitious production reaffirmed Kanye's reputation as a musical innovator.
                            </p>
                        </div>
                        <div className=" flex justify-center my-2">
                            <img src="/img/dondarollout.png" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default News1