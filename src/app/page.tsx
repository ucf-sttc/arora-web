'use client';
import Image from 'next/image';
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start p-8">
			<Image
				src="/images/arora_logo.png"
				width={600}
				height={100}
				alt="ARORA Sim"
			/>

			<h2 className="mb-2 mt-2 font-bold text-yellow-400">Publications:</h2>
			<ul className="mb-2 mt-2 list-disc">
				<li>
					Comparing Physics Effects through Reinforcement Learningin the ARORA
					Simulator, by Troyle Thomas, Armando Fandango, Dean Reed, Clive
					Hoayun, Jonathan Hurter, Alexander Gutierrez, and Keith Brawner, at
					EMSS 21
				</li>
				<li>
					ARORA & NavSim: a simulator system for training autonomous agents with
					geospecific data, by Armando Fandango, Alexander Gutierrez, Clive
					Hoayun, Jonathan Hurter, Dean Reed, at SPIE 22
				</li>
			</ul>
		</main>
	);
}
