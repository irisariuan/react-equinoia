import '@/app/globals.css'
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import { Noto_Serif_HK, Playfair_Display } from 'next/font/google'
import { Providers } from '@/app/providers'

const playfair = Playfair_Display({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-playfair',
	display: 'swap'
})
const notoSerif = Noto_Serif_HK({
	weight: '500',
	subsets: ['latin'],
	variable: '--font-notoSerif',
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Equinoia',
	description: 'Propose Students‘ Union Candidate Cabinet No.1 of MCKLN - Equinoia',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`${playfair.className} ${notoSerif.className} scrollbar`}>
			<link rel='icon' href='/icon.ico' sizes='any' />
			<meta name='theme-color' content='#fdf9ee' />
			<body className="transition-all m-0 p-0 w-screen overflow-x-hidden font-serif">
				<Providers>
					{children}
				</Providers>
				<Analytics />
			</body>
		</html>
	)
}
