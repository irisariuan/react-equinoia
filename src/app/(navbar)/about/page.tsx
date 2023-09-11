import { Box } from "@/components/ui/box"
import { ParagraphContent } from "@/components/ui/paragraph/content"
import { ParagraphTitle } from "@/components/ui/paragraph/title"
import Separator from "@/components/ui/separator"

export default async function () {
    await new Promise(r => setInterval(r, 2000))
    return (
        <div className="w-screen flex flex-col items-center justify-center mt-2 p-2">
            <div className="w-4/5">
                <Box>
                    <ParagraphTitle>About Equinoia</ParagraphTitle>
                </Box>
                <ParagraphContent marginY={4}>
                    Equinoia is composed of the words “equinox” and “eunoia’’.
                </ParagraphContent>
                <Separator />
                <ParagraphTitle>'Equinox'</ParagraphTitle>
                <ParagraphContent marginY={4}>
                    “Equinox” refers to the turning point, which divides the day and the night.
                    At this turning point, we have overcome all the pain and suffering of the night,
                    meanwhile, are embracing the dawn and a brand new day. We hope to become the beacon of faith, bringing hope to our school and all our fellow schoolmates.
                </ParagraphContent>
                <Separator />
                <ParagraphContent marginY={4}>
                    In addition, unlike the night, morning gives a sense of hope, motivation and freshness. We would spare no effort to serve our schoolmates and provide them an innovative and unique experience. Instead of working the same as other counterparts, we would think out of the box and break new ground, so as to open a new era.
                </ParagraphContent>
                <Separator />
                <ParagraphContent marginY={4}>
                    Being the companion of our schoolmates, we would step hand in hand into the sunshine and the new era with them together.
                </ParagraphContent>
                <Separator />
                <ParagraphTitle>'Eunoia'</ParagraphTitle>
                <ParagraphContent marginY={4}>
                    “Eunoia” not only refers to the goodwill towards each other, which shows tolerance, kindness and helpfulness, but it also refers to the friendliness and respect between the presenter and the listener. From the perspective of students, the Students’ Union serves as a bridge between them and the college, allowing them to express their views and opinions. Therefore, we would maintain an approachable attitude and at pains to listen to the voices and opinions of every student.
                </ParagraphContent>
                <Separator />
                <ParagraphContent marginY={4}>
                    Regarding constructive criticism, in order to boost our work and make improvements, we would remain a broad-minded, inclusive attitude and reflect on ourselves. At the same time, when it comes to the implementation of school policies, we would uphold the principle of “Caring”  in serving all our schoolmates in a quest to build stronger and tighter bonds between us.
                </ParagraphContent>
                <Separator />
                <ParagraphTitle>'Equinoia'</ParagraphTitle>
                <ParagraphContent marginY={4}>
                    All in all, as the combination of “equinox” and “eunoia”, we, Equinoia, aim to be a good association. Embodying friendliness and goodwill, It is our earnest hope to lead all the MCers to embark on a new journey, providing them a unique experience and new opportunities in the year ahead.
                </ParagraphContent>
                <Separator />
            </div>
            <div className="w-4/5 mt-4">
                <div className="mb-6 lg:mb-10 mt-4">
                    <ParagraphTitle>
                        「Equinox」：
                    </ParagraphTitle>
                    <ParagraphContent marginY={4}>
                        Equinox為分界點，晝夜平分之意。在分界點，度過夜的煎熬，便迎來晨的篇章。本閣希望可以成為學校與同學們的一縷晨光。有別於夜，清晨予人希望；予人動力；予人耳目一新之感，本閣亦致力帶來與眾不同的體驗，在盡心盡力服務同學之餘，卻不會陳腔濫調，而是可以跨出新一步，如與前人分界一般，開啟全新的紀元。與同學一同走向豔陽天。
                    </ParagraphContent>
                    <Separator />
                </div>
                <div className="mb-6 lg:mb-10">
                    <ParagraphTitle>
                        「Eunoia」：
                    </ParagraphTitle>
                    <ParagraphContent marginY={4}>
                        Eunoia則指互相的善意，乃是人與人之間的包容和親切的態度；亦指意見發表者與聆聽者之間的尊重與友善，而學生會於學生，便是一個發表意見的橋樑。本閣秉持友善的態度，聆聽每一位同學的心聲；而對於本閣的批評，亦會海納百川，接受且據之而自省改過。同時，在施政上，本閣也會秉持循中人‘Caring’的宗旨服務大家，促進循中人之間的連繫。
                    </ParagraphContent>
                    <Separator />
                </div>
                <div className="mb-6 lg:mb-10">
                    <ParagraphTitle>
                        「Equinoia」：
                    </ParagraphTitle>
                    <ParagraphContent marginY={4}>
                        如此一來，Equinoia作為兩字的結合，本閣希望充滿善意地帶領各位循中同學一起走去新的紀元、新的開始，步入清晨之中，沐浴著新旅程的陽光。
                    </ParagraphContent>
                    <ParagraphContent marginY={4}>
                        而本閣的中文別稱——“<span className="font-bold">凝晞</span>”便有這個意思。
                    </ParagraphContent>
                    <Separator />
                    <Box>
                        <span className="text-5xl lg:text-6xl my-4 lg:my-6 font-extrabold">凝晞</span>
                    </Box>
                    <ParagraphTitle>「凝」</ParagraphTitle>
                    <ParagraphContent marginY={4}>
                        “凝”有凝聚同學，強化同學對學校的歸屬感，上下一心之意，與Eunoia 的意思相似。
                    </ParagraphContent>
                    <Separator />
                    <ParagraphTitle>「晞」</ParagraphTitle>
                    <ParagraphContent marginY={4}>
                        而“晞”字則和Equinox 類近，代表新的希望和光芒，意指同學們能勇於發掘自己；勇於面對各類事物；勇於成為那顆閃耀的星。
                    </ParagraphContent>
                    <Separator />
                    <ParagraphTitle>「凝晞」</ParagraphTitle>
                    <ParagraphContent marginY={4}>
                        總括而言，本閣的信念是懷著善意去幫助每一位循中人，友善地聆聽所有意見，團結一致地面對未來的學校生涯。
                    </ParagraphContent>
                </div>
            </div>
        </div>
    )
}