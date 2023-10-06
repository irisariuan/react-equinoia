import { ParagraphTitle } from "@/components/ui/paragraph/title"
import Separator from "@/components/ui/separator"
import Store from "@/components/welfare/store"
import { readWelfare } from "@/lib/fs/welfare"

export default function () {
    const welfare = readWelfare(process.cwd() + '/src/private/welfare/food.json')

    return (
        <div className="p-2">
            <ParagraphTitle>Catering</ParagraphTitle>
            <Separator alignCenter={false} />
            <div className="mt-6 lg:mt-12"></div>
            {
                welfare.map((v, i) => {
                    return (
                        <div key={i}>
                            <Store store={v} />
                        </div>
                    )
                })
            }
        </div>
    )
}