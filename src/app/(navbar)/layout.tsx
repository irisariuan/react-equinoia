import '@/app/globals.css'
import { Inter, Righteous } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Providers } from '@/app/providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex flex-col min-h-screen w-screen'>
			<Navbar />
			{children}
			<div className='flex-1 flex items-end'>
				<Footer />
			</div>
		</div>
	)
}
