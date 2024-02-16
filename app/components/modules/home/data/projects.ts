export interface Project {
	name: string;
	img_link?: string;
	description: string;
	demo_link: string;
	github_link: string;
}

export const projects: Project[] = [
	{
		name: 'Share Leaf',
		description:
			'Plant watering fullstack app built with React, ASP.NET Web API and Entity Framework in less than 2 weeks.',
		demo_link: 'https://plantapp-salt.azurewebsites.net/',
		github_link: 'https://github.com/dila1001/H2Oasis',
	},
	{
		name: 'Personal Website',
		img_link: '/images/portfolio.jpg',
		description:
			'Personal website & blog crafted with NextJS, TypeScript, Framer Motion, Tailwind CSS, Tailwind Variants & Figma.',
		demo_link: 'http://adilarazmi.com',
		github_link: 'https://github.com/dila1001/portfolio',
	},
	{
		name: 'Contacts App',
		description:
			'A contacts app that fetches contacts data from API and displays in list/grid view, featuring lazy-loading.',
		demo_link: 'https://dila1001-contacts.netlify.app/',
		github_link: 'https://github.com/dila1001/contacts-app',
	},
];
