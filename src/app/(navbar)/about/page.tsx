import { Box } from "@/components/ui/box"
import { ParagraphContent } from "@/components/ui/paragraph/content"
import { ParagraphTitle } from "@/components/ui/paragraph/title"

export default async function () {
    await new Promise(r => setInterval(r, 2000))
    return (
        <div className="w-screen flex flex-col items-center justify-center mt-2 p-2">
            <Box>
                <ParagraphTitle>About Equinoia</ParagraphTitle>
                <ParagraphContent>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, tempora molestias, deserunt aspernatur repellendus et assumenda commodi magnam est sunt fugit quas aliquid animi optio iure ipsa eum nesciunt eveniet! Harum temporibus ex praesentium impedit repellat cumque nesciunt quasi fugiat eum. Omnis quisquam non molestias libero exercitationem dolores, eos nam a perspiciatis beatae repellendus cum est aut magni nostrum suscipit voluptates cupiditate et nesciunt. Delectus, voluptate laborum laboriosam, fuga consequuntur ipsum suscipit quos recusandae nihil eveniet aliquid cupiditate rem quasi!
                </ParagraphContent>
            </Box>
            <ParagraphTitle>What is Equinoia</ParagraphTitle>
            <ParagraphContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, tempora molestias, deserunt aspernatur repellendus et assumenda commodi magnam est sunt fugit quas aliquid animi optio iure ipsa eum nesciunt eveniet! Harum temporibus ex praesentium impedit repellat cumque nesciunt quasi fugiat eum. Omnis quisquam non molestias libero exercitationem dolores, eos nam a perspiciatis beatae repellendus cum est aut magni nostrum suscipit voluptates cupiditate et nesciunt. Delectus, voluptate laborum laboriosam, fuga consequuntur ipsum suscipit quos recusandae nihil eveniet aliquid cupiditate rem quasi!
            </ParagraphContent>
        </div>
    )
}