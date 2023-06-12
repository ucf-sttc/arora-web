'use client';
import Image from 'next/image';
export default function Home() {
	return (
		<main className="flex flex-col items-center justify-start">
			<div className="flex flex-col max-w-5xl">
				<div className="flex flex-wrap mb-4">
					<div className="flex flex-col w-1/2">
						<h2 className="mb-4 mt-4 font-bold text-yellow-400">
							Introduction
						</h2>
						<p className="mb-2 mt-2 text-justify">
							ARORA stands for A Realistic Open environment for Rapid Agent
							training. ARORA is a geospecific simulator for training agents
							using Reinforcment Learning ARORA is developed to train agents to
							complete navigational tasks in a large-scale city environment with
							the complexities of physics-based movement, vehicle modelling, and
							a continuous action space.
						</p>
						<p className="mb-2 mt-2 text-justify">
							The goal of ARORA is to provide an open-source platform where
							scientists can explore AI tasks that simulate agents and the real
							world with high fidelity. ARORA is built on top of the Unity game
							engine, allows for headless training (i.e., without any graphical
							interface), and provides a flexible application programming
							interface (API) with several sensors.
						</p>
					</div>
					<div className="flex flex-col w-1/2 justify-center px-4">
						<Image
							src="/images/home_splash.png"
							width={800}
							height={100}
							alt="ARORA Sim"
						/>
					</div>
				</div>

				<div>
					<h2 className="mb-4 mt-4 font-bold text-yellow-400">Video</h2>
					<div className="flex flex-col items-center">
						<iframe
							width="800"
							height="315"
							src="https://www.youtube.com/embed/3T0EErlVOLE"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						></iframe>
					</div>
				</div>
				<div>
					<h2 className="mb-4 mt-4 font-bold text-yellow-400">Publications</h2>
					<ul className="ml-4 mb-2 mt-2 list-disc">
						<li>
							Comparing Physics Effects through Reinforcement Learningin the
							ARORA Simulator, by Troyle Thomas, Armando Fandango, Dean Reed,
							Clive Hoayun, Jonathan Hurter, Alexander Gutierrez, and Keith
							Brawner, at EMSS 21
						</li>
						<li>
							ARORA & NavSim: a simulator system for training autonomous agents
							with geospecific data, by Armando Fandango, Alexander Gutierrez,
							Clive Hoayun, Jonathan Hurter, Dean Reed, at SPIE 22
						</li>
					</ul>
				</div>
			</div>
		</main>
	);
}
