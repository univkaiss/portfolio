/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/image.png',
		title: 'Site d adéquation',
		skills: ['JavaScript','Python','SQL','PHP','IA'],
		descripcion:
			'Ce site utilise l’intelligence artificielle pour analyser les CV et les offres d’emploi, puis calculer un score d’adéquation. Grâce à des algorithmes avancés de traitement du langage naturel, il compare compétences, expériences et exigences pour offrir des recommandations personnalisées. Une solution innovante pour faciliter le recrutement et optimiser les candidatures.',
		demoURL: '',
		repoURL: 'https://github.com/univkaiss/Adequation-CV-Offre',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/dikj.webp',
		title: 'Algo de Dikjtra',
		skills: ['TypeScript', 'Git'],
		descripcion:
			'L’objectif de ce projet était d’importer un graphique et d’appliquer l’algorithme de Dijkstra pour déterminer le chemin le plus court, un principe similaire à celui utilisé par Google Maps.',
		demoURL: '',
		repoURL: 'https://github.com/univkaiss/algo-Dikjtra',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/jeuxC.webp',
		title: 'Jeu X',
		skills: ['C'],
		descripcion:
			'Le jeu X consiste à placer des pions numérotés sur un plateau. À la fin, une case reste vide et le joueur avec le score le plus bas autour de cette case vide gagne la partie.',
		demoURL: '',
		repoURL: 'https://github.com/univkaiss/Jeu-X',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/green.png',
		title: 'Site de mini golf',
		skills: ['HTML', 'CSS', 'JavaScript'],
		descripcion:
			'Le site met en avant le mini-golf Green Cube avec ses parcours uniques et son engagement écoresponsable. Vous y trouverez les horaires, tarifs, et une galerie photos pour découvrir l’univers du lieu. L’objectif est d’informer et d’attirer les visiteurs dans une ambiance conviviale et ludique.',
		demoURL: '',
		repoURL: 'https://www.greencubegolf.fr',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/infraction.png',
		title: 'Site de gestion d infraction',
		skills: ['Node','TypeScript','HTML','CSS'],
		descripcion:
			'Ce site web permet de gérer une liste d’infractions tout en assurant sa fiabilité grâce à des tests effectués avec Jest.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	HTML: 'skill-icons:html',
	C: 'skill-icons:c',
	Python: 'logos:python',
	Java: 'skill-icons:java',
	SQL: 'logos:mysql',
	Git: 'skill-icons:git',
	Node: 'logos:nodejs-icon',
	TypeScript: 'skill-icons:typescript',
	PHP: 'logos:php',
	IA: 'mdi:robot',
	
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
