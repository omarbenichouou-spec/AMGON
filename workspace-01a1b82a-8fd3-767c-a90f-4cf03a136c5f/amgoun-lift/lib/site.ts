export const site = {
  name: "AMGOUN LIFT",
  slogan: "Votre sécurité, notre engagement.",
  description:
    "Maintenance, dépannage, réparation et installation d’ascenseurs à Marrakech, Casablanca, Mohammedia, Rabat et Bouznika.",
  phoneDisplay: "06 90 82 26 44",
  phoneInternational: "+212690822644",
  email: "amgounlift@gmail.com",
  facebookName: "Amgounlift",
  instagramName: "Amgounlift",
  availability: "Intervention 24h/24 et 7j/7",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
};

export const cities = ["Marrakech", "Casablanca", "Mohammedia", "Rabat", "Bouznika"] as const;
export type CityName = (typeof cities)[number];

export const requestTypes = [
  "Maintenance",
  "Contrat de maintenance",
  "Dépannage d’urgence",
  "Réparation",
  "Installation",
  "Autre",
] as const;

export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Nos services", href: "/services" },
  { label: "Contrats de maintenance", href: "/contrats-maintenance" },
  { label: "Zones d’intervention", href: "/zones-intervention" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export type Faq = { question: string; answer: string };

export const generalFaqs: Faq[] = [
  {
    question: "Quels services propose AMGOUN LIFT ?",
    answer:
      "AMGOUN LIFT propose la maintenance, le dépannage d’urgence, la réparation et l’installation d’ascenseurs, ainsi que des contrats de maintenance à étudier selon les besoins de chaque installation.",
  },
  {
    question: "Dans quelles villes intervenez-vous ?",
    answer:
      "Les zones d’intervention confirmées sont Marrakech, Casablanca, Mohammedia, Rabat et Bouznika. Pour une autre localisation, vous pouvez sélectionner « Autre » dans le formulaire afin de demander si votre besoin peut être étudié.",
  },
  {
    question: "Comment demander un devis ?",
    answer:
      "Utilisez le formulaire de contact en précisant votre ville, le type de demande et les informations utiles sur votre installation. Vous pouvez également appeler le 06 90 82 26 44 ou écrire à amgounlift@gmail.com.",
  },
  {
    question: "Comment demander un contrat de maintenance ?",
    answer:
      "Choisissez « Contrat de maintenance » dans le formulaire et décrivez votre ascenseur et vos attentes. AMGOUN LIFT pourra alors échanger avec vous sur une proposition adaptée. Les conditions sont définies après étude, sans formule préétablie sur ce site.",
  },
  {
    question: "Que faire en cas de panne d’ascenseur ?",
    answer:
      "Si une personne est bloquée, utilisez le moyen d’alerte de la cabine et contactez les secours ou l’assistance prévue par le bâtiment. Demandez-lui de rester calme et de ne pas tenter de sortir seule. Signalez ensuite la panne à AMGOUN LIFT au 06 90 82 26 44. N’entrez jamais dans la gaine et ne tentez pas de réparation vous-même.",
  },
  {
    question: "Comment contacter AMGOUN LIFT ?",
    answer:
      "Par téléphone au 06 90 82 26 44, par e-mail à amgounlift@gmail.com ou via le formulaire de contact. La disponibilité annoncée pour les interventions est 24h/24 et 7j/7.",
  },
  {
    question: "Où trouver des conseils sur l’entretien des ascenseurs ?",
    answer:
      "Le blog « Conseils et actualités sur les ascenseurs » propose des articles en français sur la maintenance, le dépannage, l’installation, la sécurité et les réflexes pratiques. Ces contenus sont informatifs et ne remplacent pas l’examen de votre installation par un professionnel.",
  },
];

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  navTitle: string;
  icon: "maintenance" | "contract" | "emergency" | "repair" | "installation";
  description: string;
  cta: string;
  requestType: (typeof requestTypes)[number];
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  introduction: string;
  sections: { title: string; text: string }[];
  points: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "maintenance-ascenseurs",
    title: "Maintenance des ascenseurs",
    shortTitle: "Maintenance",
    navTitle: "Maintenance des ascenseurs",
    icon: "maintenance",
    description:
      "Un entretien adapté aux caractéristiques de vos installations pour contribuer à leur bon fonctionnement et à leur suivi.",
    cta: "Demander un devis",
    requestType: "Maintenance",
    metaTitle: "Maintenance d’ascenseurs au Maroc | AMGOUN LIFT",
    metaDescription:
      "Confiez vos besoins de maintenance d’ascenseurs à AMGOUN LIFT à Marrakech, Casablanca, Mohammedia, Rabat et Bouznika. Demandez un devis.",
    image: "/images/maintenance-ascenseur.jpg",
    imageAlt: "Technicien contrôlant l’armoire de commande d’un ascenseur depuis le palier",
    eyebrow: "Suivre votre installation avec méthode",
    introduction:
      "La maintenance accompagne la vie de votre ascenseur. AMGOUN LIFT étudie vos besoins d’entretien en tenant compte des caractéristiques de l’installation, de son environnement et des prestations souhaitées, sans appliquer une formule identique à tous les équipements.",
    sections: [
      {
        title: "Une demande de maintenance construite autour de votre ascenseur",
        text: "Un ascenseur de résidence, d’immeuble professionnel ou d’établissement recevant du public ne présente pas nécessairement les mêmes conditions d’utilisation. Lors de votre prise de contact, les informations disponibles sur l’équipement, son usage et son historique permettent de cadrer la demande. Les opérations précises sont ensuite définies avec l’entreprise selon l’installation concernée.",
      },
      {
        title: "Suivi, entretien et continuité d’usage",
        text: "L’objectif d’une démarche de maintenance est d’organiser le suivi de l’ascenseur et de repérer les besoins d’intervention adaptés. Elle ne se limite pas à une visite ponctuelle : les observations faites sur l’équipement et les échanges avec le responsable du bâtiment contribuent à une meilleure connaissance de son état d’usage.",
      },
    ],
    points: [
      "Prise en compte des caractéristiques de l’ascenseur",
      "Échange sur l’usage et les besoins du bâtiment",
      "Organisation du suivi de maintenance",
      "Possibilité d’étudier un contrat adapté",
    ],
    faqs: [
      {
        question: "La maintenance et le dépannage sont-ils identiques ?",
        answer: "Non. La maintenance organise le suivi et l’entretien de l’équipement, tandis que le dépannage répond à un dysfonctionnement signalé. Les deux demandes peuvent être liées, mais elles ne correspondent pas au même besoin initial.",
      },
      {
        question: "Quelles informations transmettre pour une demande ?",
        answer: "Indiquez la ville, le type de bâtiment, le nombre d’ascenseurs concernés et toute information disponible sur l’équipement. Ne communiquez pas de documents sensibles dans le premier message.",
      },
      {
        question: "Proposez-vous une fréquence d’entretien standard ?",
        answer: "Aucune fréquence unique n’est affichée sur ce site. Le suivi doit être étudié selon l’installation, son contexte et les prescriptions applicables à l’équipement.",
      },
    ],
  },
  {
    slug: "contrats-de-maintenance",
    title: "Contrats de maintenance",
    shortTitle: "Contrats",
    navTitle: "Contrats de maintenance",
    icon: "contract",
    description:
      "Des solutions contractuelles de maintenance à étudier selon les besoins de votre installation et les prestations souhaitées.",
    cta: "Demander un contrat",
    requestType: "Contrat de maintenance",
    metaTitle: "Contrat de maintenance d’ascenseur | AMGOUN LIFT",
    metaDescription:
      "Échangez avec AMGOUN LIFT sur un contrat de maintenance adapté à votre ascenseur au Maroc. Décrivez votre installation et demandez une proposition.",
    image: "/images/cabine-ascenseur.jpg",
    imageAlt: "Cabine d’ascenseur moderne aux finitions métalliques et bois",
    eyebrow: "Un cadre de suivi à définir ensemble",
    introduction:
      "Un contrat de maintenance permet de formaliser les prestations et le cadre de suivi convenus pour un ascenseur. AMGOUN LIFT vous invite à présenter votre installation et vos attentes afin d’étudier une proposition adaptée, sans conditions commerciales génériques préétablies.",
    sections: [
      {
        title: "Clarifier le périmètre du suivi",
        text: "Avant toute souscription, il est utile d’identifier les équipements concernés et de discuter des prestations attendues. Le contenu de la proposition doit permettre de comprendre ce qui est prévu, comment les demandes sont traitées et quelles sont les responsabilités de chaque partie.",
      },
      {
        title: "Une proposition lisible, pas une formule automatique",
        text: "Le site ne présente ni prix, ni durée, ni nombre de visites, ni couverture de pièces. Ces éléments ne doivent pas être supposés : ils doivent figurer clairement dans les documents contractuels remis au client et faire l’objet d’un échange avant engagement.",
      },
    ],
    points: [
      "Organisation de l’entretien",
      "Suivi des besoins de maintenance",
      "Prise en compte des caractéristiques de l’installation",
      "Possibilité de demander une proposition adaptée",
    ],
    faqs: [
      {
        question: "Puis-je demander une proposition sans connaître tous les détails techniques ?",
        answer: "Oui. Décrivez le bâtiment et l’usage de l’ascenseur, puis joignez les informations dont vous disposez. Les éléments complémentaires nécessaires pourront être précisés lors des échanges.",
      },
      {
        question: "Les pièces de remplacement sont-elles incluses ?",
        answer: "Aucune couverture de pièces n’est présumée. Ce point, comme les autres conditions, doit être vérifié explicitement dans la proposition qui vous est remise.",
      },
      {
        question: "Comment comparer plusieurs propositions ?",
        answer: "Comparez le périmètre des prestations, les modalités d’intervention, les exclusions, les documents de suivi et les conditions de résiliation ou de renouvellement, plutôt que le seul intitulé du contrat.",
      },
    ],
  },
  {
    slug: "depannage-urgence",
    title: "Dépannage d’urgence",
    shortTitle: "Dépannage",
    navTitle: "Dépannage d’urgence",
    icon: "emergency",
    description:
      "Contactez AMGOUN LIFT pour signaler un dysfonctionnement et demander une intervention.",
    cta: "Appeler maintenant",
    requestType: "Dépannage d’urgence",
    metaTitle: "Dépannage d’ascenseurs 24h/7j au Maroc | AMGOUN LIFT",
    metaDescription:
      "Signalez une panne d’ascenseur à AMGOUN LIFT au 06 90 82 26 44. Disponibilité annoncée 24h/24 et 7j/7 dans les cinq villes desservies.",
    image: "/images/securite-ascenseur.jpg",
    imageAlt: "Portes fermées et boutons d’appel d’un ascenseur moderne",
    eyebrow: "Disponibilité annoncée 24h/24 et 7j/7",
    introduction:
      "Une porte qui ne fonctionne plus, un arrêt inhabituel ou une cabine indisponible doivent être signalés avec des informations claires. AMGOUN LIFT reçoit vos demandes de dépannage afin d’examiner le dysfonctionnement et de définir l’intervention à mener. Aucune durée d’arrivée n’est promise sans confirmation directe.",
    sections: [
      {
        title: "La sécurité des occupants avant toute manipulation",
        text: "Si des personnes sont bloquées dans la cabine, utilisez l’alarme ou le dispositif d’appel et contactez l’assistance prévue par le bâtiment ou les secours. Les occupants doivent rester calmes, suivre les consignes sûres et ne jamais tenter de forcer les portes ou de sortir par leurs propres moyens. Seuls les professionnels habilités doivent intervenir sur l’équipement.",
      },
      {
        title: "Les informations utiles lors de votre appel",
        text: "Communiquez la ville, la localisation précise transmise directement à l’interlocuteur, le nombre de personnes éventuellement concernées et les signes observés depuis l’extérieur. Ne vous exposez pas à la gaine, aux machineries ou aux parties électriques pour chercher la cause de la panne.",
      },
    ],
    points: [
      "Réception des demandes de dépannage 24h/24 et 7j/7",
      "Un numéro unique : 06 90 82 26 44",
      "Prise en compte des informations signalées",
      "Orientation vers une prise en charge adaptée",
    ],
    faqs: [
      {
        question: "Faut-il ouvrir les portes pour aider les occupants ?",
        answer: "Non. N’essayez pas de débloquer une cabine ou de forcer les portes. Contactez l’assistance et les secours appropriés, et suivez leurs consignes. Une mauvaise manipulation peut aggraver le danger.",
      },
      {
        question: "Un délai d’arrivée est-il garanti ?",
        answer: "Le site annonce une disponibilité 24h/24 et 7j/7, mais ne promet aucun délai d’arrivée. Toute estimation doit être confirmée directement lors de l’échange, selon la situation.",
      },
      {
        question: "Puis-je rester près de l’ascenseur en panne ?",
        answer: "Vous pouvez aider à empêcher son utilisation et transmettre les informations utiles depuis une zone sûre. N’ouvrez aucun accès technique et ne tentez pas de diagnostic vous-même.",
      },
    ],
  },
  {
    slug: "reparation-ascenseurs",
    title: "Réparation des ascenseurs",
    shortTitle: "Réparation",
    navTitle: "Réparation des ascenseurs",
    icon: "repair",
    description:
      "Une prise en charge des demandes de réparation afin d’identifier les dysfonctionnements et de proposer les actions adaptées.",
    cta: "Contacter notre équipe",
    requestType: "Réparation",
    metaTitle: "Réparation d’ascenseurs au Maroc | AMGOUN LIFT",
    metaDescription:
      "Décrivez le dysfonctionnement de votre ascenseur à AMGOUN LIFT. Demandes de réparation à Marrakech, Casablanca, Mohammedia, Rabat et Bouznika.",
    image: "/images/maintenance-ascenseur.jpg",
    imageAlt: "Contrôle technique d’une armoire d’ascenseur avec appareil de mesure",
    eyebrow: "Comprendre le dysfonctionnement avant d’agir",
    introduction:
      "Une demande de réparation commence par les faits observés : bruit inhabituel, arrêt, fonctionnement irrégulier ou difficulté au niveau des portes. AMGOUN LIFT recueille ces informations pour examiner la situation et proposer les actions adaptées à l’installation.",
    sections: [
      {
        title: "Décrire les signes sans poser soi-même le diagnostic",
        text: "Plusieurs causes peuvent produire des symptômes proches. Notez ce qui s’est passé, quand le problème est apparu et s’il se reproduit, sans intervenir sur les organes techniques. Les messages affichés peuvent être relevés s’ils sont visibles depuis un espace accessible au public.",
      },
      {
        title: "Des actions définies après examen",
        text: "La nature d’une réparation et les pièces éventuellement nécessaires ne peuvent être déterminées sérieusement à partir d’une description générique. Après prise en charge de la demande, les observations permettent d’orienter la solution et de préciser les travaux à envisager.",
      },
    ],
    points: [
      "Recueil des signes de dysfonctionnement",
      "Examen de la demande selon l’installation",
      "Proposition d’actions adaptées",
      "Échange sur les suites à donner",
    ],
    faqs: [
      {
        question: "Un bruit inhabituel justifie-t-il un appel ?",
        answer: "Oui, tout changement notable peut être signalé. Évitez d’utiliser un équipement dont le comportement paraît anormal et demandez conseil sans démonter ni inspecter vous-même les parties techniques.",
      },
      {
        question: "Pouvez-vous annoncer le coût avant examen ?",
        answer: "Aucun prix n’est publié sur ce site. Une réparation dépend du constat et des actions nécessaires ; les conditions doivent être précisées directement après étude de la demande.",
      },
      {
        question: "Faut-il redémarrer l’ascenseur soi-même ?",
        answer: "Non. Ne manipulez pas les commandes techniques ou l’alimentation. Signalez le comportement observé au prestataire et suivez uniquement les consignes sûres qui vous sont données.",
      },
    ],
  },
  {
    slug: "installation-ascenseurs",
    title: "Installation des ascenseurs",
    shortTitle: "Installation",
    navTitle: "Installation des ascenseurs",
    icon: "installation",
    description:
      "Des prestations d’installation adaptées aux caractéristiques du projet et aux besoins du client.",
    cta: "Demander un devis",
    requestType: "Installation",
    metaTitle: "Installation d’ascenseurs au Maroc | AMGOUN LIFT",
    metaDescription:
      "Présentez votre projet d’installation d’ascenseur à AMGOUN LIFT. Une approche adaptée aux caractéristiques du projet et à vos besoins. Demandez un devis.",
    image: "/images/installation-ascenseur.jpg",
    imageAlt: "Professionnels examinant une installation de portes palières d’ascenseur",
    eyebrow: "Étudier le projet dans son ensemble",
    introduction:
      "Un projet d’ascenseur se prépare à partir du bâtiment, des usages attendus et des contraintes techniques du site. AMGOUN LIFT reçoit votre demande afin d’étudier une prestation d’installation adaptée aux informations du projet, sans configuration standard imposée.",
    sections: [
      {
        title: "Partir des usages et des contraintes du bâtiment",
        text: "Le nombre de niveaux, les flux attendus, l’accessibilité, les espaces disponibles et les interfaces avec le gros œuvre sont autant d’éléments à examiner avec les acteurs du projet. Les caractéristiques définitives de l’équipement doivent être établies sur la dossier technique approprié.",
      },
      {
        title: "Coordonner le projet et préparer les échanges",
        text: "Plans, calendrier de construction et besoins d’aménagement peuvent être réunis pour faciliter l’étude. La solution et les conditions de réalisation sont ensuite précisées avec le client. Aucune compatibilité technique ne doit être supposée sans examen du projet.",
      },
    ],
    points: [
      "Analyse des informations disponibles sur le projet",
      "Prise en compte de l’usage et du bâtiment",
      "Présentation d’une prestation adaptée",
      "Échanges sur les conditions de réalisation",
    ],
    faqs: [
      {
        question: "Quels documents envoyer pour un projet d’installation ?",
        answer: "Vous pouvez indiquer la ville, le type de bâtiment, le nombre de niveaux et l’état d’avancement du projet. Les plans ou documents techniques utiles peuvent être transmis après le premier contact de manière appropriée.",
      },
      {
        question: "Pouvez-vous installer un ascenseur dans un bâtiment existant ?",
        answer: "Chaque demande doit être étudiée selon le bâtiment et les possibilités techniques du site. Le formulaire permet de présenter votre projet ; aucune faisabilité n’est présumée en ligne.",
      },
      {
        question: "Le choix de la cabine suffit-il pour définir le projet ?",
        answer: "Non. L’esthétique est un élément parmi d’autres. L’usage, l’espace, la structure, la sécurité et les contraintes techniques doivent être examinés dans une approche globale.",
      },
    ],
  },
];

export type City = {
  slug: string;
  name: CityName;
  number: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  introduction: string;
  contextTitle: string;
  context: string[];
  situationsTitle: string;
  situations: { title: string; text: string }[];
  faqs: Faq[];
  relatedArticles: string[];
};

export const cityPages: City[] = [
  {
    slug: "marrakech",
    name: "Marrakech",
    number: "01",
    metaTitle: "Maintenance et dépannage d’ascenseurs à Marrakech",
    metaDescription:
      "AMGOUN LIFT répond à vos besoins de maintenance, dépannage, réparation et installation d’ascenseurs à Marrakech. Appelez le 06 90 82 26 44.",
    h1: "Maintenance et dépannage d’ascenseurs à Marrakech",
    introduction:
      "À Marrakech, AMGOUN LIFT reçoit les demandes de maintenance, dépannage, réparation et installation d’ascenseurs. Résidence, bâtiment professionnel ou projet en cours : chaque demande commence par la description de l’installation et de l’usage attendu afin d’orienter une réponse adaptée.",
    contextTitle: "Un suivi pensé pour le rythme d’utilisation de votre bâtiment",
    context: [
      "Dans une ville où les bâtiments peuvent connaître des usages résidentiels, professionnels ou touristiques variés, les sollicitations d’un ascenseur ne se résument pas à son nombre d’étages. Les périodes de forte fréquentation, la gestion des accès et la disponibilité attendue sont des informations utiles à transmettre lors de la demande.",
      "AMGOUN LIFT ne présente pas de formule locale standard. Les échanges portent sur l’équipement réellement présent, son environnement et le niveau de suivi recherché. Pour un projet d’installation, les contraintes architecturales et la coordination avec les autres corps de métier sont également à préciser.",
    ],
    situationsTitle: "Vos besoins d’ascenseur à Marrakech",
    situations: [
      { title: "Organiser l’entretien", text: "Présentez votre équipement et le fonctionnement du bâtiment pour demander une maintenance ou une proposition de contrat adaptée à votre situation." },
      { title: "Signaler une panne", text: "Décrivez les signes visibles sans manipuler l’équipement. En cas de personnes bloquées, contactez d’abord l’assistance ou les secours et demandez-leur de ne pas tenter de sortir seules." },
      { title: "Préparer une installation", text: "Communiquez le type de bâtiment, le nombre de niveaux et l’avancement du projet afin d’engager une étude cohérente avec les contraintes du site." },
    ],
    faqs: [
      { question: "Intervenez-vous dans toute la ville de Marrakech ?", answer: "Marrakech fait partie des zones confirmées d’AMGOUN LIFT. Lors de votre appel, précisez l’emplacement exact et l’accessibilité du bâtiment afin que la demande puisse être correctement examinée." },
      { question: "Peut-on demander un contrat pour une résidence à Marrakech ?", answer: "Oui, une demande peut être présentée pour une résidence. Le représentant du bâtiment peut décrire les équipements et les attentes de suivi ; les prestations et conditions sont ensuite précisées dans une proposition." },
      { question: "Comment préparer un projet d’ascenseur à Marrakech ?", answer: "Rassemblez les informations sur les niveaux desservis, l’usage du bâtiment et les plans disponibles. La faisabilité et la solution ne sont déterminées qu’après étude du projet, pas à partir d’un simple formulaire en ligne." },
    ],
    relatedArticles: ["maintenance-reguliere-ascenseur", "installation-ascenseur-points-a-etudier", "choisir-prestataire-maintenance-maroc"],
  },
  {
    slug: "casablanca",
    name: "Casablanca",
    number: "02",
    metaTitle: "Maintenance et dépannage d’ascenseurs à Casablanca",
    metaDescription:
      "Maintenance, dépannage, réparation et installation d’ascenseurs à Casablanca avec AMGOUN LIFT. Décrivez votre besoin ou appelez le 06 90 82 26 44.",
    h1: "Maintenance et dépannage d’ascenseurs à Casablanca",
    introduction:
      "AMGOUN LIFT propose ses services d’ascenseurs à Casablanca pour les besoins d’entretien, de dépannage, de réparation et d’installation. La prise en charge s’appuie d’abord sur des informations concrètes : équipement concerné, contexte du bâtiment, usage quotidien et difficultés rencontrées.",
    contextTitle: "Coordonner l’ascenseur avec la gestion du bâtiment",
    context: [
      "À Casablanca, une copropriété, un immeuble de bureaux ou un local professionnel peuvent avoir des organisations très différentes. Il est donc utile d’identifier dès le départ l’interlocuteur qui suit l’équipement, centralise les observations et peut faciliter l’accès autorisé aux zones concernées lors d’une intervention.",
      "Cette organisation aide à éviter les demandes incomplètes, notamment lorsque plusieurs personnes constatent un même dysfonctionnement. AMGOUN LIFT étudie les besoins exprimés sans présumer de la configuration de l’ascenseur ni des prestations nécessaires avant examen.",
    ],
    situationsTitle: "Des réponses à formuler selon votre situation",
    situations: [
      { title: "Copropriétés et résidences", text: "Centralisez les observations des occupants, les périodes d’apparition du problème et les informations disponibles sur l’équipement avant de contacter le prestataire." },
      { title: "Immeubles professionnels", text: "Précisez les horaires d’accès au bâtiment et les contraintes d’accueil afin d’organiser les échanges liés à la demande, sans annoncer de délai non confirmé." },
      { title: "Projets et équipements existants", text: "Qu’il s’agisse d’une installation nouvelle ou d’une réparation, les caractéristiques du site et les observations techniques orientent la proposition." },
    ],
    faqs: [
      { question: "Comment signaler une panne d’ascenseur à Casablanca ?", answer: "Appelez le 06 90 82 26 44 en précisant la localisation et ce qui est observé. Si des occupants sont bloqués, utilisez le dispositif d’alarme et sollicitez l’assistance appropriée sans forcer les portes." },
      { question: "Qui peut demander un devis pour un immeuble à Casablanca ?", answer: "Le formulaire est ouvert à toute personne souhaitant présenter une demande. Pour avancer efficacement, indiquez votre rôle dans le bâtiment et l’interlocuteur à contacter pour les informations complémentaires." },
      { question: "La maintenance peut-elle tenir compte des contraintes d’accès ?", answer: "Oui, les modalités d’accès et l’organisation du bâtiment sont des éléments à signaler. Leur prise en compte se discute lors de la définition du suivi, sans engagement automatique sur des horaires particuliers." },
    ],
    relatedArticles: ["signes-ascenseur-intervention", "contrat-maintenance-elements-verifier", "suivi-regulier-equipements-ascenseur"],
  },
  {
    slug: "mohammedia",
    name: "Mohammedia",
    number: "03",
    metaTitle: "Maintenance et dépannage d’ascenseurs à Mohammedia",
    metaDescription:
      "Confiez vos demandes d’ascenseurs à Mohammedia à AMGOUN LIFT : maintenance, dépannage, réparation et installation. Contact : 06 90 82 26 44.",
    h1: "Maintenance et dépannage d’ascenseurs à Mohammedia",
    introduction:
      "À Mohammedia, AMGOUN LIFT vous permet de signaler un dysfonctionnement, de demander un suivi de maintenance ou de présenter un projet d’installation. L’objectif du premier échange est de réunir les informations utiles pour comprendre l’ascenseur concerné et la réponse à envisager.",
    contextTitle: "Préserver la lisibilité du suivi au fil des demandes",
    context: [
      "Pour un petit immeuble comme pour un bâtiment accueillant une activité professionnelle, les informations sur l’ascenseur sont parfois dispersées entre plusieurs occupants ou gestionnaires. Conserver les observations, les demandes précédentes et les documents disponibles dans un même espace facilite les échanges avec le prestataire.",
      "AMGOUN LIFT invite les responsables de bâtiment à Mohammedia à transmettre les faits observés et à faire part des besoins de suivi. Aucun diagnostic ne doit être improvisé par un occupant : les parties électriques, la gaine et les espaces techniques restent réservés aux professionnels compétents.",
    ],
    situationsTitle: "Entretien, panne ou projet : quel premier réflexe ?",
    situations: [
      { title: "Pour un suivi régulier", text: "Décrivez l’installation, son usage et vos attentes de maintenance. La possibilité d’un contrat et son contenu sont examinés lors d’un échange dédié." },
      { title: "Pour un comportement inhabituel", text: "Notez les circonstances du problème et évitez de poursuivre l’usage si la situation semble présenter un risque. Demandez une prise en charge sans intervenir vous-même." },
      { title: "Pour un nouvel équipement", text: "Présentez les caractéristiques du bâtiment et du projet pour que les contraintes techniques soient étudiées avant toute décision d’équipement." },
    ],
    faqs: [
      { question: "Quelles informations envoyer depuis Mohammedia ?", answer: "Indiquez la ville, le type de bâtiment, le service souhaité et une description factuelle du besoin. Les coordonnées exactes et documents techniques peuvent être communiqués directement lors de la prise en charge." },
      { question: "Un occupant peut-il rechercher la cause d’une panne ?", answer: "Non, il doit se limiter à constater et transmettre les signes visibles depuis les zones accessibles au public. Il ne doit pas ouvrir les trappes, accéder à la gaine ou manipuler une armoire électrique." },
      { question: "Comment demander un contrat à Mohammedia ?", answer: "Sélectionnez « Contrat de maintenance » dans le formulaire. Décrivez vos attentes et l’équipement ; une proposition pourra être étudiée et ses conditions devront être lues avant toute souscription." },
    ],
    relatedArticles: ["entretien-ascenseur-fonctionnement", "maintenance-preventive-depannage-differences", "ascenseur-bloque-bons-reflexes"],
  },
  {
    slug: "rabat",
    name: "Rabat",
    number: "04",
    metaTitle: "Maintenance et dépannage d’ascenseurs à Rabat",
    metaDescription:
      "AMGOUN LIFT propose maintenance, dépannage, réparation et installation d’ascenseurs à Rabat. Demandez un devis ou appelez le 06 90 82 26 44.",
    h1: "Maintenance et dépannage d’ascenseurs à Rabat",
    introduction:
      "AMGOUN LIFT accompagne les demandes liées aux ascenseurs à Rabat : organisation de la maintenance, signalement d’une panne, réparation ou étude d’installation. Chaque situation est abordée à partir de ses propres caractéristiques, sans promesse technique ou commerciale standardisée.",
    contextTitle: "Formaliser les besoins pour mieux suivre l’équipement",
    context: [
      "Dans un bâtiment administratif, une résidence ou un espace professionnel, les attentes peuvent porter autant sur la continuité d’usage que sur la clarté du suivi. Identifier une personne de contact et conserver les informations transmises permet d’éviter les descriptions contradictoires lorsqu’un problème survient.",
      "Pour une demande de maintenance à Rabat, il est utile de distinguer les besoins d’entretien des demandes de réparation déjà identifiées. Cette distinction aide à formuler une demande précise et à discuter du périmètre des prestations sans supposer qu’un contrat couvre automatiquement toutes les situations.",
    ],
    situationsTitle: "Les services disponibles à Rabat",
    situations: [
      { title: "Maintenance et contrat", text: "Échangez sur l’organisation du suivi et le contenu souhaité. Les prestations, limites et conditions doivent apparaître clairement dans la proposition remise." },
      { title: "Dépannage et réparation", text: "Signalez les symptômes observés et les circonstances de leur apparition. La nature des actions à mener est déterminée après examen de la situation." },
      { title: "Installation", text: "Présentez les plans et les usages attendus pour engager une étude qui tienne compte de l’ensemble du projet, et pas seulement de la cabine." },
    ],
    faqs: [
      { question: "Puis-je demander une intervention urgente à Rabat ?", answer: "Oui, le numéro 06 90 82 26 44 permet de signaler une demande de dépannage. La disponibilité annoncée est 24h/24 et 7j/7 ; le délai éventuel doit être confirmé directement selon la situation." },
      { question: "Un contrat couvre-t-il automatiquement une réparation à Rabat ?", answer: "Non, aucune couverture ne doit être supposée. Le périmètre des réparations, des pièces et des autres prestations dépend du contrat effectivement convenu et doit être vérifié dans ses conditions écrites." },
      { question: "Comment préparer une réunion pour un projet d’ascenseur ?", answer: "Rassemblez les plans disponibles, le nombre de niveaux, les besoins d’accessibilité et le calendrier envisagé. Ces éléments servent de base à l’étude sans préjuger de la faisabilité technique." },
    ],
    relatedArticles: ["contrat-maintenance-elements-verifier", "panne-ascenseur-que-faire", "installation-ascenseur-points-a-etudier"],
  },
  {
    slug: "bouznika",
    name: "Bouznika",
    number: "05",
    metaTitle: "Maintenance et dépannage d’ascenseurs à Bouznika",
    metaDescription:
      "Maintenance, dépannage, réparation et installation d’ascenseurs à Bouznika : contactez AMGOUN LIFT au 06 90 82 26 44 ou demandez un devis en ligne.",
    h1: "Maintenance et dépannage d’ascenseurs à Bouznika",
    introduction:
      "AMGOUN LIFT reçoit à Bouznika les demandes de maintenance, dépannage, réparation et installation d’ascenseurs. Que vous soyez responsable d’une résidence, d’un bâtiment ou d’un projet, le premier échange sert à préciser l’équipement, les besoins et les conditions d’accès au site.",
    contextTitle: "Anticiper les échanges pour les résidences et projets locaux",
    context: [
      "Dans une résidence occupée toute l’année ou selon les périodes, il est important de savoir qui peut signaler un problème et qui conserve les informations de l’ascenseur. Un contact identifié facilite le recueil des observations, notamment lorsque les occupants ne sont pas toujours présents.",
      "Pour un projet à Bouznika, transmettez les informations dès que les grandes caractéristiques du bâtiment sont connues. Pour un équipement existant, décrivez simplement son usage et les difficultés rencontrées. AMGOUN LIFT étudie ensuite la demande sans revendiquer d’agence ou d’adresse locale sur ce site.",
    ],
    situationsTitle: "Une prise de contact simple, des informations concrètes",
    situations: [
      { title: "Entretenir une résidence", text: "Présentez le nombre d’équipements, leur usage et l’interlocuteur responsable afin d’étudier l’organisation d’un suivi de maintenance." },
      { title: "Réagir à un arrêt", text: "Évitez toute manipulation technique et contactez le 06 90 82 26 44. En présence d’occupants bloqués, l’assistance et les consignes de sécurité sont prioritaires." },
      { title: "Étudier un projet", text: "Indiquez la destination du bâtiment et les niveaux à desservir. Les caractéristiques définitives doivent être examinées avec les informations techniques du site." },
    ],
    faqs: [
      { question: "AMGOUN LIFT dispose-t-il d’une agence à Bouznika ?", answer: "Bouznika est une zone d’intervention confirmée, mais aucune adresse d’agence locale n’est publiée. Utilisez le numéro national indiqué sur ce site ou le formulaire pour transmettre votre demande." },
      { question: "Qui contacter si l’ascenseur s’arrête pendant une absence du gestionnaire ?", answer: "Un occupant peut appeler le 06 90 82 26 44 et décrire les faits. Il ne doit pas tenter de réparer. En cas de personnes bloquées, utilisez l’alarme de la cabine et contactez l’assistance ou les secours appropriés." },
      { question: "Peut-on planifier une demande de maintenance à Bouznika ?", answer: "Vous pouvez présenter vos disponibilités et les contraintes du site dans le formulaire. Toute organisation ou date doit ensuite être convenue directement avec AMGOUN LIFT." },
    ],
    relatedArticles: ["maintenance-reguliere-ascenseur", "ascenseur-bloque-bons-reflexes", "choisir-prestataire-maintenance-maroc"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getCity(slug: string) {
  return cityPages.find((city) => city.slug === slug);
}

export function absoluteUrl(path = "") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
