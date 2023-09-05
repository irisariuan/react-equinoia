import { Box } from "@/components/ui/box"
import { ParagraphContent } from "@/components/ui/paragraph/content"
import { ParagraphTitle } from "@/components/ui/paragraph/title"

export default async function () {
    await new Promise(r => setInterval(r, 2000))
    return (
        <div className="w-screen flex flex-col items-center justify-center mt-2 p-2">
            <div className="w-4/5">
                <Box>
                    <ParagraphTitle>About Equinoia</ParagraphTitle>
                </Box>
                <ParagraphContent marginY={2}>
                    Equinoia is composed of the words “equinox” and “eunoia’’.
                    “Equinox” refers to the turning point, which divides the day and the night.
                </ParagraphContent>
                <ParagraphContent marginY={2}>
                    At this turning point, we have overcome all the pain and suffering of the night,
                    meanwhile, are embracing the dawn and a brand new day. We hope to become the beacon of faith, bringing hope to our school and all our fellow schoolmates. In addition, unlike the night, morning gives a sense of hope, motivation and freshness. We would spare no effort to serve our schoolmates and provide them an innovative and unique experience. Instead of working the same as other counterparts, we would think out of the box and break new ground, so as to open a new era.
                    Being the companion of our schoolmates, we would step hand in hand into the sunshine and the new era with them together.
                </ParagraphContent>
                <ParagraphContent marginY={2}>
                    “Eunoia” not only refers to the goodwill towards each other, which shows tolerance, kindness and helpfulness, but it also refers to the friendliness and respect between the presenter and the listener. From the perspective of students, the Students’ Union serves as a bridge between them and the college, allowing them to express their views and opinions. Therefore, we would maintain an approachable attitude and at pains to listen to the voices and opinions of every student. Regarding constructive criticism, in order to boost our work and make improvements, we would remain a broad-minded, inclusive attitude and reflect on ourselves. At the same time, when it comes to the implementation of school policies, we would uphold the principle of “Caring”  in serving all our schoolmates in a quest to build stronger and tighter bonds between us.
                </ParagraphContent>
                <ParagraphContent marginY={2}>
                    All in all, as the combination of “equinox” and “eunoia”, we, Equinoia, aim to be a good association. Embodying friendliness and goodwill, It is our earnest hope to lead all the MCers to embark on a new journey, providing them a unique experience and new opportunities in the year ahead.
                </ParagraphContent>
            </div>
            <div>
                <Box>
                    <ParagraphTitle>What is Equinoia</ParagraphTitle>
                </Box>
                <ParagraphContent marginY={2}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, tempora molestias, deserunt aspernatur repellendus et assumenda commodi magnam est sunt fugit quas aliquid animi optio iure ipsa eum nesciunt eveniet! Harum temporibus ex praesentium impedit repellat cumque nesciunt quasi fugiat eum. Omnis quisquam non molestias libero exercitationem dolores, eos nam a perspiciatis beatae repellendus cum est aut magni nostrum suscipit voluptates cupiditate et nesciunt. Delectus, voluptate laborum laboriosam, fuga consequuntur ipsum suscipit quos recusandae nihil eveniet aliquid cupiditate rem quasi!
                </ParagraphContent>
            </div>
        </div>
    )
}