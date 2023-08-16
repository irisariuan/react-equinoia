import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter, Righteous } from 'next/font/google'
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
		<html lang="en" className='bg-rice-content'>
			<body className={inter.className + ' transition-all scrollbar'}>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	)
}
