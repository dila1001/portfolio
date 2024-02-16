'use client';
import { FaGithub, FaLaptop } from 'react-icons/fa';
import { Project } from './data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const ProjectCard = ({
	name,
	img_link,
	description,
	demo_link,
	github_link,
}: Project) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
			className='flex flex-col max-w-[450px] h-[420px]'
		>
			<div className='w-[450px] h-[263px]'>
				{img_link ? (
					<Image
						src={img_link}
						width={450}
						height={263}
						alt={name}
						priority={true}
						className='object-cover'
					/>
				) : (
					<div className='bg-[#EEEFF1] w-full h-full'></div>
				)}
			</div>
			<div className='flex flex-col items-center justify-center w-[368px] h-[208px] mt-[-50px] bg-white mx-auto p-[22px] text-center'>
				<div className='font-caslon text-[34px] leading-none mb-[11px]'>
					{name}
				</div>
				<div className='mb-[11px]'>{description}</div>
				<div className='flex justify-center gap-[30px]'>
					<Link
						className='text-blue-gray hover:text-gray-light'
						href={demo_link}
					>
						<FaLaptop size={24} />
					</Link>
					<Link
						className='text-blue-gray  hover:text-gray-light'
						href={github_link}
					>
						<FaGithub size={24} />
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
