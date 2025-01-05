import { FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa6"
import ClickableWord from "../ClickableWord"


const News2 = () => {
  return (
    <div>
      <div className="flex gap-2">
        <div className="basis-1/3 text-justify border-r-2 border-zinc-800 pr-2 flex flex-col gap-2">
          <div>
            <h1 className="text-3xl text-center">
              A Deepdive into Kanye's Album
            </h1>
          </div>
          <div className="flex items-center justify-center">
            {/* <img src="/img/kanye-lp.jpg" alt="" className="grayscale" /> */}
            <img src="/img/albums.gif" alt="" className="grayscale border-4 border-black p-2 items-center" />
          </div>
          <div className="flex flex-col gap-0.5">
            <p>
              West's debut studio album, The College Dropout (2004), debuted at number two on the US Billboard 200, and was certified double-platinum by the Recording Industry Association of America (RIAA) in June 2004. West's second studio album, Late Registration (2005), debuted at number one on the Billboard 200, with first-week sales of 860,000 copies. The album was the ninth best-selling album of 2005 in the United States. West's third studio album, Graduation (2007), debuted at number one on the Billboard 200, selling 957,000 units in its first week, becoming the fastest-selling album in the US since Late Registration, and breaking the record for most digital albums sold in a week. West's fourth studio album, 808s & Heartbreak (2008), became his third consecutive number one release on the Billboard 200.
            </p>
            <p>
              West's fifth studio album, My Beautiful Dark Twisted Fantasy (2010), debuted at number one on the Billboard 200, with the fourth-highest digital first-week sales ever. Watch the Throne (2011), a collaborative album with fellow American rapper Jay-Z, broke the US iTunes first-week sales record. West's sixth studio album, Yeezus (2013), debuted at number one in the United States. West's seventh studio album,
              <ClickableWord word="The Life of Pablo" soundFile="/sounds/NoMorePartiesInLA.mp3" />{" "} (2016), made history by becoming the first album to top the Billboard 200, predominantly from streaming, while also having the second-highest total of first-week streams for an album. In June 2018, West released both his eighth studio album, Ye, and his second collaborative album, Kids See Ghosts (with Kid Cudi). His ninth studio album, Jesus Is King (2019), became West's first to top the Top Christian Albums, and Top Gospel Albums charts. His tenth solo studio album, Donda (2021), recorded the second-biggest first week performance in Spotify's history. Donda 2, a demo album, was released in February 2022 via the Stem Player. In February 2024, he released the collaborative album Vultures 1 with Ty Dolla Sign, which became his 11th consecutive album to debut at No. 1 on the Billboard 200, the most of any artist.
            </p>
          </div>
        </div>
        <div className="basis-1/3 flex gap-5">
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="text-4xl text-justify">
                Kanye West announces his biopic entering in theatres in October 2025
              </h1>
            </div>
            <div className="flex gap-3 text-sm text-justify">
              <div className="flex-1 flex flex-col gap-1.5">
                <p>
                  Ye, formerly known as Kanye West, is working on his next documentary, In Whose Name?— this time with a billion dollar budget, per a press release through Variety. He's reuniting with "Come to Life" director Nicolas Ballesteros to tell the unfiltered aspects of celebrity life that confront the provocative opinions, grand visions and bold contrarianism that defined him as the world's most controversial artist.Again, this is all directly from the press release. The film takes place over a "six-year journey" and would be Ye's second documentary; in 2022, the rapper released a three-part docu-series on Netflix, jeen-yuhs, with Coodie Simmons and Chike Ozah, who also started out working with Ye through music videos. Goodfellas and Utopia produced the doc, and a promo reel will be shared at this week's American Film Market in Las Vegas. It's co-produced by Jack M. Russell and Shy Ranje, with Justin Staple as co-executive producer and David Bullock as associate producer. There's no specific release date right now, but if it wants to make next year's Vulture Movies Fantasy League, it's gotta be out after next October.</p>
                <p>
                  "The film follows Ye's ascent to becoming the richest Black man in American history while uncovering why the superstar risked everything he had built in the name of freedom. Examining the culture that birthed the star, 'In Whose Name?' explores the overlapping influences of corporate exploitation, racial complexities and psychological struggles inherent in the American dream."
                </p>
                <p>
                  Ballesteros posted a picture from the doc and a text exchange with Ye on Instagram, along with the caption, Coming to Theaters Worldwide 2025.” In the text exchange,
                  Ye apparently told the young filmmaker, “The doc was very deep. It was like being dead and looking back on my life,” to which Ballesteros answered, “This is the most profound text message I have ever received. I love you brother.”
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="mt-5 flex flex-col border-2 border-black p-2 bg-red-900 text-[#E9E4DB]">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-Impact text-xl">KANYE WEST</div>
                      <div className="text-[#E9E4DB]">@kanyewest</div>
                    </div>
                    <div className="text-sm font-bold border-2 border-[#E9E4DB] p-1 rounded-lg text-[#E9E4DB]">
                      Following
                    </div>
                  </div>
                  <div className="font-Helvetica text-sm font-bold mb-2">
                    Have you ever thought you were in love with someone but then realized you were just staring in a mirror for 20 minutes?</div>
                  <div>
                    <span>1:03PM - 10 Feb 2014</span>
                  </div>
                  <hr className="border-t-[2px] border-[#E9E4DB]" />
                  <div className="flex gap-2 my-2">
                    <div className="font-EditorialNew gap-4 flex">
                      <div>
                        <span className="font-bold">50,981</span>{" "}Retweets
                      </div>
                      <div>
                        <span className="font-bold">360,641</span>{" "}Likes
                      </div>
                    </div>
                  </div>
                  <hr className="border-t-[2px] border-[#E9E4DB]" />
                  <div className="flex gap-2 my-2">
                    <div className="font-EditorialNew gap-4 flex">
                      <div className="flex items-center gap-1">
                        <FaRegComment size={20} />
                        5.2k
                      </div>
                      <div className="flex items-center gap-1">
                        <FaRetweet size={20} />
                        51k
                      </div>
                      <div className="flex items-center gap-1">
                        <FaRegHeart size={20} />
                        360k

                      </div>
                      <div>

                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  During the filming of the Netflix documentary Jeen-yuhs, Kanye West’s journey from struggling artist to global icon was captured in real-time. The footage, filmed by longtime friend Coodie Simmons, shows Kanye’s raw ambition and determination to break through the music industry. It chronicles his early struggles, moments of self-doubt, and eventual triumphs, offering an intimate glimpse into the life of one of the most influential figures in modern music. Kanye’s vulnerability, confidence, and relentless pursuit of greatness are central themes throughout the documentary.
                  Kanye West’s passion for music was evident even before his rise to fame. Early on, he faced rejection from the music industry, but his unrelenting drive led him to produce his own beats, eventually earning him a record deal and worldwide recognition. His breakthrough came with The College Dropout, a genre-defining album that showcased his innovative sound. Kanye’s unique style and fearless creativity pushed boundaries, propelling him to stardom and making him one of the most influential artists of his generation.
                </p>
                <div>
                  <img src="/img/kanye-lp.jpg" alt="" className="grayscale" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3 text-justify border-2 border-zinc-700 p-2 flex flex-col gap-4">
          <img src="/img/donda.png" alt="" className="object-cover grayscale mt-0.5" />
          <div className="text-[2.5rem] bg-[#222222] text-[#d3cfc6] font-bold font-TimesNewRoman text-center">
            Ye and Donda's Relation
          </div>
          <div className="flex flex-col gap-2">
            <p>
              It's no secret that Kanye West always had a special relationship with his mother. Ye's newest album, "Donda 2," is the second consecutive one he's named after the late, great Donda West. But even as outspoken as the musician has been about how important his mother was to him, the absolute power and poise that she brought to his life simply has to be seen to be believed.
            </p>
            <p>
              Luckily, thanks to the first act of "Jeen-yuhs: A Kanye Trilogy," titled "Vision," fans can finally discover just how much of an impact Donda West had on her son at a very pivotal time in his early career. Directed by Coodie & Chike, the documentary takes audiences all the way back to Ye's earliest days forming beats for and with other artists, all while desperately working to secure his own recording contract as a rapper.
              This intimate, never-before-seen footage was initially recorded by Coodie, aka Clarence Simmons Jr., after he got a firsthand glimpse of Kanye West's talents and determination to succeed before anyone ever knew his name. The film follows Kanye as he moves to the East Coast to produce music for New York City artists, pitching his own songs along the way, and after experiencing a few crushing letdowns, he returns home to Chicago where he gets a confidence boost that changes everything.

            </p>
            <p>
              Throughout the film, the then-up-and-coming Kanye West often reveals how much of an influence his mother had on his rapping style, especially thanks to her own history as an English teacher and cultivating his obvious love of vocabulary (he even plays favorites with words, such as "fruition"). We also learn from fellow Chicago-based producer Dug Infinite, who was one of the artists who first taught Kanye how to record beats, that it was Donda herself who helped them form this critical connection. As Dug recalls amid a joyous reunion, Donda was his teacher at Chicago State and told him that her son had gotten some "equipment" and "needed to be in the mix."
            </p>
            <p>Some of the tracks which specifically talk about his relationship with his mother are{" "}"
              <ClickableWord
                word="Hey Mama"
                soundFile="/sounds/HeyMama.mp3" />","Come to Life"</p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default News2