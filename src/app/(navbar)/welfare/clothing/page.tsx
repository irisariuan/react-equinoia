import Store from "@/components/welfare/store"
import { readWelfare } from "@/lib/read/readWelfare"

export default function () {
    const welfare = readWelfare(process.cwd() + '/src/private/welfare/clothing.json')

    return (
        <div>
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
    )
}