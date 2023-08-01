import './globals.css'
import type { Metadata } from 'next'
import { Inter, Righteous } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import {Providers} from '@/app/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Equinoia',
	description: 'Cabinet No. 1',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className + ' transition-all'}>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
