'use client';
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
	return (
		<main className="flex min-h-screen flex-col p-8 content-center justify-between mx-auto lg:max-w-7xl">
			<div className="grid grid-cols-3 gap-4 place-content-stretch ">
				<div>
					<p className="mb-2 mt-2">
						ARORA stands for A Realistic Open environment for Rapid Agent
						training. ARORA is a geospecific simulator for training agents using
						Reinforcment Learning ARORA is developed to train agents to complete
						navigational tasks in a large-scale city environment with the
						complexities of physics-based movement, vehicle modelling, and a
						continuous action space. 
            </p>
            <p className="mb-2 mt-2">
            The goal of ARORA is to provide an
						open-source platform where scientists can explore AI tasks that
						simulate agents and the real world with high fidelity. ARORA is
						built on top of the Unity game engine, allows for headless training
						(i.e., without any graphical interface), and provides a flexible
						application programming interface (API) with several sensors.
					</p>
					<h2 className="mb-2 mt-2">Publications:</h2>
					<ul className="mb-2 mt-2 list-disc">
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
				<div>
					<Image
						src="/images/about_arora_1.png"
						width={300}
						height={200}
						alt="ARORA Sim"
					/>
				</div>
				<div>
					<Image
						src="/images/about_arora_2.png"
						width={300}
						height={100}
						alt="ARORA Sim"
					/>
				</div>
			</div>
		</main>
	);
};
export default AboutPage;
