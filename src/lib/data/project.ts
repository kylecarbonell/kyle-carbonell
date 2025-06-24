import UcdMobile from '$lib/assets/projects/UcdMobile.png';

//Jerky Republic
import JerkyRepublic from '$lib/assets/projects/JerkyRepublicHome.jpg';
import JerkyRepublicAdmin from '$lib/assets/projects/gallery/JerkyRepublicAdmin1.jpg';
import JerkyRepublicLogin from '$lib/assets/projects/gallery/JerkyRepublicLogin.jpg';
import JerkyRepublicShop from '$lib/assets/projects/gallery/JerkyRepublicShop.jpg';

//AggieLink
import AggieLinkLogin from '$lib/assets/projects/gallery/AggieLinkLogin.png';
import AggieLink from '$lib/assets/projects/AggieLink.png';

//Clubly
import ClublyAdminpanel from '$lib/assets/projects/gallery/ClublyAdminPanel.png';
import ClublyHomePage from '$lib/assets/projects/gallery/ClublyHomePage.png';
import ClublyHome from '$lib/assets/projects/ClublyHome.png';

export type Project = {
	title: string;
	image: string;
	description: string;
	frontend_stack?: string[];
	backend_stack: string[];
	url?: string;
	github?: string;
	date?: string;
	type: string;
	href: string;
	gallery?: string[];
	organization: string;
};

export let projects: Record<string, Project> = {
	aggielink: {
		title: 'AggieLink',
		image: AggieLink,
		description:
			"AggieLink was built to address a common frustration among UC Davis students: the lack of a centralized, easy-to-use hub for finding on-campus jobs and internships. Traditional platforms were either cluttered or outdated, making it difficult for students to discover relevant opportunities tailored to their experience and interests.The platform curates campus employment listings in a clean, intuitive interface—allowing students to browse open roles, filter by department or job type, and apply directly from their device. It removes much of the friction from student hiring by reducing the time and effort required to navigate university employment portals.Whether you're a freshman looking for research work or a graduating senior seeking internships, AggieLink makes the job search process feel more accessible, reliable, and student-friendly.",
		frontend_stack: ['React', 'TailwindCSS'],
		backend_stack: ['TypeScript', 'MongoDB', 'Express'],
		url: 'https://aggielink.vercel.app/',
		type: 'Web Application',
		href: 'aggielink',
		gallery: [AggieLink, AggieLinkLogin],
		organization: 'Personal'
	},

	jerkyrepublic: {
		title: 'Jerky Republic',
		image: JerkyRepublic,
		description:
			'Jerky Republic is a full-featured online storefront built to help a local artisanal jerky brand expand its reach beyond farmers markets and small retailers. With bold visuals and an emphasis on product storytelling, the site brings the spirit of the brand to life for a national audience. Customers can browse through curated jerky collections, read about flavor profiles, and place secure orders through a simple checkout flow. Built with growth in mind, the platform also allows for easy product management and inventory updates from the admin side. At its core, Jerky Republic bridges the gap between small business craftsmanship and modern digital retail—giving a handcrafted product the platform it deserves.',

		frontend_stack: ['React'],
		backend_stack: ['TypeScript', 'MongoDB', 'Express'],
		url: 'https://aggielink.vercel.app/', // update this if incorrect
		type: 'Web Application',
		href: 'jerkyrepublic',
		organization: 'Jerky Republic',
		gallery: [JerkyRepublicAdmin, JerkyRepublicLogin, JerkyRepublicShop]
	},

	clubly: {
		title: 'Clubly',
		image: ClublyHome,
		description:
			'Clubly was created to help students at UC Davis get involved more easily with campus life. With over 800 registered organizations and countless events each quarter, finding the right communities or staying updated on club activities can quickly become overwhelming. Clubly serves as a centralized space where students can explore clubs based on interests, view upcoming events, and manage their involvement—all in one place. For club leaders, it provides admin tools to publish updates, track engagement, and host applications, streamlining the recruitment process. The platform empowers students to take initiative in their campus experience—whether they’re looking to try something new, meet people, or take on leadership roles within existing communities.',
		frontend_stack: ['Svelte', 'TailwindCSS', 'TypeScript'],
		backend_stack: ['Hono', 'PostgreSQL', 'Drizzle ORM', 'Docker'],
		url: 'https://clubly.org',
		github: 'https://github.com/kylecarbonell/clubly',
		date: '2025-06',
		type: 'Full Stack Platform',
		href: 'clubly',
		organization: 'AggieWorks',
		gallery: [ClublyHome, ClublyAdminpanel, ClublyHomePage]
	},

	ucdmobile: {
		title: 'UCD Mobile',
		image: UcdMobile,
		description:
			'UCD Mobile is a student-centered utility app designed to make navigating life at UC Davis a little easier. It originated from a simple idea: what if students could see where their classes are—on a map—and never walk into the wrong building again? The app now features a live campus map with personalized overlays for your class schedule, event listings happening in real time, and even location-aware exploration of student resources. It brings together key tools for time management, discovery, and navigation into a single mobile interface. By putting UC Davis in your pocket, UCD Mobile helps students stay grounded, organized, and connected in a large and fast-moving campus environment.',
		frontend_stack: ['React Native', 'NativeWind', 'TypeScript'],
		backend_stack: ['React Native', 'Zod', 'Drizzle', 'Bun'],
		date: '2025-06',
		type: 'Mobile Application',
		href: 'ucdmobile',
		organization: 'ASUCD Innovation and Research Lab'
	}
};
