export interface Work {
	period: string;
	position: string;
	company: string;
	description: string;
	tech: string[];
}

export const works: Work[] = [
	{
		period: '2023 - present',
		position: 'C# .NET Fullstack Developer Consultant',
		company: 'School of Applied Technology </salt>',
		description:
			'Intensive three month training program for full stack web development with a focus on TDD, mob programming, and applied learning. Acquired solid foundation in C# and frameworks such as ASP.NET Core and NextJS. Hands-on experience utilizing Docker, Github Actions and Azure. Built a fullstack plant watering app with C#, .NET Web API, Entity Framework, Typescript, React, Azure (Azure SQL, Azure App Service, Azure Blob Storage)',
		tech: [
			'C#',
			'TypeScript',
			'Javascript',
			'Tailwind CSS',
			'xUnit',
			'React',
			'ASP.NET Core',
			'Entity Framework',
			'Azure',
		],
	},
	{
		period: '2022 - 2023',
		position: 'Frontend Developer',
		company: 'Devoteam Creative Tech',
		description:
			'Collaborated within a team of 10 to develop a lock configuration app for Assa Abloy, replacing a previously outdated solution. Responsible for web design implementation and functionality of UI components as well as unit testing and the frontend architecture.',
		tech: [
			'React',
			'Angular 2',
			'TypeScript',
			'Javascript',
			'Tailwind CSS',
			'RxJS',
			'Jasmine',
			'Angular Material',
		],
	},
	{
		period: '2021 - 2022',
		position: 'Software Engineer',
		company: 'The Upskill Company',
		description:
			'Consulted for H&M Group as a SAP techno-functional consultant and performed planning, development, testing and implementation of IT solutions related to OTC/RTC flows.',
		tech: ['SAP ECC', 'SAP SD', 'ABAP'],
	},
	{
		period: 'Jan - May 2020',
		position: 'Frontend Developer',
		company: 'Johanna Sawalha Executive Coaching Inc.',
		description:
			'Planned and implemented site design, functionality and navigation, along with audience funnels and data capture points.',
		tech: ['WordPress', 'HTML', 'CSS', 'UI/UX'],
	},
	{
		period: 'Sep - Dec 2019',
		position: 'Fullstack Developer',
		company: 'SmartCoding',
		description:
			'Developed an interactive React web game application in a team of 10, following agile methodology, for Banki AB.',
		tech: [
			'JavaScript',
			'HTML',
			'CSS',
			'React',
			'Python',
			'Django',
			'Styled Components',
			'PostgreSQL',
		],
	},
];
