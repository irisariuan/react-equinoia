'use client'
import '@/app/globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='flex flex-col'>
            <div className='flex-1'>
                {children}
            </div>
            <div className='flex flex-col m-2 lg:m-4'>
                <span>
                    *如有任何爭議，商家保留最終決定權
                </span>
                <span>
                    *以上福利在選舉結果公布後才會生效
                </span>
            </div>
        </div>
    )
}
