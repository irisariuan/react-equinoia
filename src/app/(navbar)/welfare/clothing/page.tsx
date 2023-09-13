import { ParagraphTitle } from "@/components/ui/paragraph/title"
import Separator from "@/components/ui/separator"
import Store from "@/components/welfare/store"
import { readWelfare } from "@/lib/read/readWelfare"

export default function () {
    const welfare = readWelfare(process.cwd() + '/src/private/welfare/clothing.json')

    return (
        <div className="p-2">
            <ParagraphTitle>Clothing</ParagraphTitle>
            <Separator alignCenter={false} />
            <div className="mt-4 lg:mt-12">
                {
                    welfare.map((v, i) => {
                        return (
                            <div key={i}>
                                <Store name={v.name} igName={v.igName} description={v.description} caution={v.caution} location={v.location} link={v.link} isOnline={v.isOnline} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}