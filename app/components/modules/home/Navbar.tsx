'use client';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '@ui/Button';
import { motion } from 'framer-motion';

const navVariants = {
	hidden: { y: -250, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			delay: 0.2,
			stiffness: 100,
		},
	},
};

const logoVariants = {
	hidden: {
		y: 250,
	},
	visible: {
		y: 0,
		fontSize: 53,
	},
};

const Navbar = ({ blog }: { blog?: boolean }) => {
	return (
		<nav
			className={`flex justify-center border-t-[5px] border-yellow h-[137px] w-full relative items-center ${
				!blog ? ' bg-white text-blue-black' : 'bg-navy-blue text-white'
			}`}
		>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={navVariants}
				className='w-full flex justify-between items-center gap-[10px] desktop:w-3/4'
			>
				<div className='hidden tablet-large:flex grow justify-between pl-5'>
					<NavItem href='https://adilarazmi.com/'>Home</NavItem>
					<NavItem href='/#about-section'>About</NavItem>
					<NavItem href='/#experience-section'>Experience</NavItem>
				</div>
				<div className='flex grow justify-center'>
					<div className='flex flex-col'>
						<Link href='/'>
							<h1 className='font-caslon text-[53px] leading-none hover:text-blue-gray lowercase'>
								Adila Razmi
							</h1>
						</Link>
						<span className='font-halisMedium uppercase tracking-wider text-[13px] text-center'>
							Fullstack Developer
						</span>
					</div>
				</div>
				<div className='hidden tablet-large:flex grow justify-between items-center pr-5'>
					<NavItem href='/blog'>Blog</NavItem>
					<NavItem href='/#projects-section'>Projects</NavItem>
					<Link href='#contact-section'>
						<Button type='secondary' whiteText={blog ? true : false}>
							Contact
						</Button>
					</Link>
				</div>
			</motion.div>
			<div className='desktop:flex items-center gap-4 absolute right-4 hidden '>
				<Link
					className='text-green-light hover:text-gray-light'
					href='https://www.linkedin.com/in/adila-razmi-878a01177/'
				>
					<FaLinkedin size={19} />
				</Link>
				<Link
					className='text-green-light hover:text-gray-light'
					href='https://github.com/dila1001'
				>
					<FaGithub size={19} />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;

const NavItem = ({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) => {
	return (
		<motion.div whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}>
			<Link
				href={href}
				className='uppercase tracking-widest text-[11px] hover:text-blue-gray'
			>
				{children}
			</Link>
		</motion.div>
	);
};
