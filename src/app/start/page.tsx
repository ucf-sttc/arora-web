'use client';
import Image from 'next/image';
const StartPage = () => {
	return (
		<main className="flex flex-col items-center justify-start">
			<div className="flex flex-col max-w-5xl">
				<div className="flex flex-wrap mb-4">
					<div className="flex flex-col w-1/2">
						<h2 className="mb-4 mt-4 font-bold text-yellow-400">
							Getting started with ARORA
						</h2>
						<p className="mb-2 mt-2 text-justify">
							You can use ARORA in two ways: by downloading the code from the
							repository and building it yourself with unity or by downloading
							the binary build. The code repository is avaialable at the
							following link:{' '}
							<a
								className=" text-blue-600 dark:text-blue-500 hover:underline"
								href="https://github.com/ucf-sttc/ARORA"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://github.com/ucf-sttc/ARORA
							</a>
							, and the binary build is available at the following link:{' '}
							<a
								className=" text-blue-600 dark:text-blue-500 hover:underline"
								href="https://github.com/ucf-sttc/ARORA/releases"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://github.com/ucf-sttc/ARORA/releases
							</a>
							.
						</p>
						<p>
							ARORA Simulator is best when used with navsim, described below, or
							you can also use it with your own reinforcement learning
							framework.
						</p>
						<h2 className="mb-4 mt-4 font-bold text-yellow-400">
							Getting started with navsim
						</h2>
						<p className="mb-2 mt-2 text-justify">
							ARORA comes with a python based framework to train reinforcement
							learning based AI agents. You can download navsim from the following link:
							<a
								className=" text-blue-600 dark:text-blue-500 hover:underline"
								href="https://github.com/ucf-sttc/navsim"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://github.com/ucf-sttc/navsim
							</a>{' '}
							and find the instructions for quick start in the README or the
							documentation. The documentation for navsim is provided at the
							following link:
							<a
								className=" text-blue-600 dark:text-blue-500 hover:underline"
								href="https://docs.navsim.ai"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://docs.navsim.ai
							</a>
						</p>
					</div>
					<div className="flex flex-col w-1/2 justify-start px-4">
						<Image
							src="/images/seg1.png"
							width={800}
							height={100}
							alt="ARORA Sim"
						/>
						<Image
							src="/images/seg2.png"
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
							<a
								className=" text-blue-600 dark:text-blue-500 hover:underline"
								href="https://github.com/ucf-sttc/ARORA"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://github.com/ucf-sttc/ARORA
							</a>
						</li>
						<li>
							<a
								className=" text-blue-600 dark:text-blue-500 hover:underline"
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
