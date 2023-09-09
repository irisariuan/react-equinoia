import '@/app/globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import { Providers } from '@/app/providers'

const inter = Playfair_Display({ subsets: ['latin'], weight: '400' })

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
			<link rel='icon' href='/icon.ico' sizes='any' />
			<meta name='theme-color' content='#fdf9ee' />

			<body className={inter.className + ' transition-all m-0 p-0 w-screen overflow-x-hidden'}>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	)
}
