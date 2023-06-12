'use client';
import Image from 'next/image';
const StartPage = () => {
	return (

		<main className="flex flex-col items-center justify-start">

			<div className="flex flex-col max-w-5xl">
				<div className="flex flex-wrap mb-4">
					<div className="flex flex-col w-1/2">
						<h2 className="mb-4 mt-4 font-bold text-yellow-400">
							Introduction
						</h2>
						<p className="mb-2 mt-2 text-justify">
							You can use ARORA in two ways: by downloading the code from the
							repository and building it yourself or by downloading the binary
							build.
						</p>
						<p className="mb-2 mt-2 text-justify">
							ARORA comes with a python based framework to train reinforcement
							learnign agents. You can use navsim from the repository below. The
							documentation for navsim is provided at the following link:{' '}
							<a className=" text-blue-600 dark:text-blue-500 hover:underline"
								href="https://docs.navsim.ai"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://docs.navsim.ai
							</a>
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
					<h2 className="mb-4 mt-4 font-bold text-yellow-400">Repositories</h2>
					<ul className="ml-4 mb-2 mt-2 list-disc">
						<li>
							<a className=" text-blue-600 dark:text-blue-500 hover:underline"
								href="https://github.com/ucf-sttc/ARORA"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://github.com/ucf-sttc/ARORA
							</a>
						</li>
						<li>
							<a className=" text-blue-600 dark:text-blue-500 hover:underline"
								href="https://github.com/ucf-sttc/navsim"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://github.com/ucf-sttc/navsim
							</a>
						</li>
					</ul>
				</div>
			</div>
		</main>
	);
};
export default StartPage;
