import type { LanguageToolType } from "@/types/language-tool"

export const languageTools: LanguageToolType[] = [
  // Advanced tools for intensive learning
  {
    name: "Anki",
    description: {
      pl: "Zaawansowany system fiszek oparty na metodzie powtórek rozłożonych w czasie (SRS).",
      en: "Advanced flashcard system based on spaced repetition method (SRS).",
      fr: "Système avancé de cartes mémoire basé sur la méthode de répétition espacée (SRS).",
    },
    pricingModel: {
      pl: "Darmowa (PC, Android), płatna (iOS)",
      en: "Free (PC, Android), paid (iOS)",
      fr: "Gratuit (PC, Android), payant (iOS)",
    },
    category: "intensive-learning",
  },
  {
    name: "Quizlet",
    description: {
      pl: "Aplikacja do nauki poprzez fiszki; zawiera zestawy tworzone przez użytkowników oraz opcję tworzenia własnych.",
      en: "Learning app using flashcards; includes user-created sets and the option to create your own.",
      fr: "Application d'apprentissage utilisant des cartes mémoire; comprend des ensembles créés par les utilisateurs et la possibilité de créer les vôtres.",
    },
    pricingModel: {
      pl: "Freemium (wersja darmowa + płatna Premium)",
      en: "Freemium (free version + paid Premium)",
      fr: "Freemium (version gratuite + Premium payant)",
    },
    category: "intensive-learning",
  },
  {
    name: "Memrise",
    description: {
      pl: "Nauka słówek i zwrotów za pomocą skojarzeń, wideo z native speakerami i interaktywnych ćwiczeń.",
      en: "Learn vocabulary and phrases through associations, videos with native speakers, and interactive exercises.",
      fr: "Apprenez du vocabulaire et des phrases grâce à des associations, des vidéos avec des locuteurs natifs et des exercices interactifs.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "intensive-learning",
  },
  {
    name: "Clozemaster",
    description: {
      pl: "Nauka słownictwa w kontekście poprzez zdania z lukami; idealne uzupełnienie klasycznych metod.",
      en: "Learn vocabulary in context through fill-in-the-blank sentences; perfect complement to classical methods.",
      fr: "Apprenez du vocabulaire en contexte grâce à des phrases à trous; complément parfait aux méthodes classiques.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "intensive-learning",
  },
  {
    name: "LingQ",
    description: {
      pl: "Nauka języka poprzez autentyczne treści (artykuły, podcasty, e-booki) z opcją zaznaczania i zapamiętywania słów.",
      en: "Language learning through authentic content (articles, podcasts, e-books) with the option to highlight and memorize words.",
      fr: "Apprentissage des langues à travers du contenu authentique (articles, podcasts, e-books) avec la possibilité de surligner et mémoriser des mots.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "intensive-learning",
  },
  {
    name: "Readlang",
    description: {
      pl: "Narzędzie do czytania dowolnych tekstów online z funkcją tłumaczenia słów i ich zapisywania.",
      en: "Tool for reading any online texts with word translation and saving functions.",
      fr: "Outil pour lire n'importe quel texte en ligne avec des fonctions de traduction et de sauvegarde de mots.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "intensive-learning",
  },
  {
    name: "FluentU",
    description: {
      pl: "Platforma do nauki z materiałami wideo (filmy, wywiady, reklamy) z interaktywnymi napisami i fiszkami.",
      en: "Learning platform with video materials (movies, interviews, commercials) with interactive subtitles and flashcards.",
      fr: "Plateforme d'apprentissage avec des matériaux vidéo (films, interviews, publicités) avec des sous-titres interactifs et des cartes mémoire.",
    },
    pricingModel: {
      pl: "Płatna (dostępny okres próbny)",
      en: "Paid (trial period available)",
      fr: "Payant (période d'essai disponible)",
    },
    category: "intensive-learning",
  },
  {
    name: "Language Reactor",
    description: {
      pl: "Rozszerzenie do przeglądarki, które umożliwia naukę języka podczas oglądania filmów na YouTube i Netflix.",
      en: "Browser extension that enables language learning while watching videos on YouTube and Netflix.",
      fr: "Extension de navigateur qui permet l'apprentissage des langues tout en regardant des vidéos sur YouTube et Netflix.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "intensive-learning",
  },
  {
    name: "Glossika",
    description: {
      pl: "System oparty na ekspozycji na pełne zdania i wzorce gramatyczne z powtórkami w czasie.",
      en: "System based on exposure to complete sentences and grammatical patterns with timed repetitions.",
      fr: "Système basé sur l'exposition à des phrases complètes et des modèles grammaticaux avec des répétitions chronométrées.",
    },
    pricingModel: {
      pl: "Płatna (dostępny bezpłatny trial)",
      en: "Paid (free trial available)",
      fr: "Payant (essai gratuit disponible)",
    },
    category: "intensive-learning",
  },
  {
    name: "Speechling",
    description: {
      pl: "Trening wymowy z udziałem native speakerów; oferuje ocenę i korektę nagrań.",
      en: "Pronunciation training with native speakers; offers evaluation and correction of recordings.",
      fr: "Entraînement à la prononciation avec des locuteurs natifs; offre l'évaluation et la correction des enregistrements.",
    },
    pricingModel: {
      pl: "Freemium (ograniczona liczba nagrań miesięcznie) / Premium",
      en: "Freemium (limited number of recordings per month) / Premium",
      fr: "Freemium (nombre limité d'enregistrements par mois) / Premium",
    },
    category: "intensive-learning",
  },

  // Apps for speaking and contact with native speakers
  {
    name: "HelloTalk",
    description: {
      pl: "Platforma do wymiany językowej poprzez wiadomości tekstowe i głosowe z native speakerami.",
      en: "Language exchange platform through text and voice messages with native speakers.",
      fr: "Plateforme d'échange linguistique par messages texte et vocaux avec des locuteurs natifs.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "speaking",
  },
  {
    name: "Tandem",
    description: {
      pl: "Aplikacja umożliwiająca konwersacje z użytkownikami z całego świata w celu nauki języka.",
      en: "App enabling conversations with users from around the world for language learning.",
      fr: "Application permettant des conversations avec des utilisateurs du monde entier pour l'apprentissage des langues.",
    },
    pricingModel: {
      pl: "Freemium (opcjonalny Tandem Pro)",
      en: "Freemium (optional Tandem Pro)",
      fr: "Freemium (Tandem Pro optionnel)",
    },
    category: "speaking",
  },
  {
    name: "italki",
    description: {
      pl: "Serwis oferujący lekcje językowe z korepetytorami z całego świata.",
      en: "Service offering language lessons with tutors from around the world.",
      fr: "Service offrant des cours de langue avec des tuteurs du monde entier.",
    },
    pricingModel: {
      pl: "Płatna (wg stawki nauczyciela)",
      en: "Paid (according to teacher's rate)",
      fr: "Payant (selon le tarif de l'enseignant)",
    },
    category: "speaking",
  },
  {
    name: "Preply",
    description: {
      pl: "Platforma do umawiania indywidualnych lekcji online z lektorami językowymi.",
      en: "Platform for scheduling individual online lessons with language tutors.",
      fr: "Plateforme pour planifier des cours individuels en ligne avec des tuteurs de langue.",
    },
    pricingModel: {
      pl: "Płatna",
      en: "Paid",
      fr: "Payant",
    },
    category: "speaking",
  },
  {
    name: "Speaky",
    description: {
      pl: "Darmowa społeczność językowa do rozmów i wymiany językowej.",
      en: "Free language community for conversations and language exchange.",
      fr: "Communauté linguistique gratuite pour les conversations et l'échange linguistique.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "speaking",
  },
  {
    name: "HiNative",
    description: {
      pl: "Serwis typu Q&A, pozwalający zadawać pytania native speakerom o język i kulturę.",
      en: "Q&A service allowing users to ask native speakers questions about language and culture.",
      fr: "Service Q&R permettant aux utilisateurs de poser des questions aux locuteurs natifs sur la langue et la culture.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "speaking",
  },

  // Passive learning and language immersion
  {
    name: "LingQ Mini Stories",
    description: {
      pl: "Zestaw krótkich opowiadań z nagraniami i transkrypcją, wspierających naturalną akwizycję języka.",
      en: "Set of short stories with recordings and transcription, supporting natural language acquisition.",
      fr: "Ensemble de courtes histoires avec enregistrements et transcription, soutenant l'acquisition naturelle de la langue.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "immersion",
  },
  {
    name: "Duolingo Podcast",
    description: {
      pl: "Podcasty opowiadające ciekawe historie w prostym języku z narracją w języku ojczystym.",
      en: "Podcasts telling interesting stories in simple language with narration in the native language.",
      fr: "Podcasts racontant des histoires intéressantes dans un langage simple avec une narration dans la langue maternelle.",
    },
    pricingModel: {
      pl: "Darmowe",
      en: "Free",
      fr: "Gratuit",
    },
    category: "immersion",
  },
  {
    name: "Beelinguapp",
    description: {
      pl: "Czytanie tekstów w dwóch językach jednocześnie; świetne do nauki poprzez literaturę.",
      en: "Reading texts in two languages simultaneously; great for learning through literature.",
      fr: "Lecture de textes dans deux langues simultanément; idéal pour apprendre à travers la littérature.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "immersion",
  },
  {
    name: "Lingopie",
    description: {
      pl: "Nauka poprzez oglądanie filmów i seriali z interaktywnymi napisami.",
      en: "Learning by watching movies and series with interactive subtitles.",
      fr: "Apprentissage en regardant des films et des séries avec des sous-titres interactifs.",
    },
    pricingModel: {
      pl: "Płatna (okres próbny dostępny)",
      en: "Paid (trial period available)",
      fr: "Payant (période d'essai disponible)",
    },
    category: "immersion",
  },
  {
    name: "Netflix + Language Reactor",
    description: {
      pl: "Połączenie platformy streamingowej z dodatkiem edukacyjnym do nauki przez filmy.",
      en: "Combination of streaming platform with educational add-on for learning through movies.",
      fr: "Combinaison de plateforme de streaming avec un complément éducatif pour apprendre à travers les films.",
    },
    pricingModel: {
      pl: "Netflix – płatny, Language Reactor – freemium",
      en: "Netflix – paid, Language Reactor – freemium",
      fr: "Netflix – payant, Language Reactor – freemium",
    },
    category: "immersion",
  },
  {
    name: "YouTube + Language Reactor",
    description: {
      pl: "Nauka języka poprzez filmy na YouTube z podwójnymi napisami i tłumaczeniami.",
      en: "Language learning through YouTube videos with dual subtitles and translations.",
      fr: "Apprentissage des langues à travers des vidéos YouTube avec des sous-titres doubles et des traductions.",
    },
    pricingModel: {
      pl: "Darmowe + rozszerzenie freemium",
      en: "Free + freemium extension",
      fr: "Gratuit + extension freemium",
    },
    category: "immersion",
  },
  {
    name: "Audible (języki obce)",
    description: {
      pl: "Audiobooki w języku docelowym, idealne do słuchania w podróży.",
      en: "Audiobooks in the target language, ideal for listening while traveling.",
      fr: "Livres audio dans la langue cible, idéaux pour écouter en voyage.",
    },
    pricingModel: {
      pl: "Płatna subskrypcja",
      en: "Paid subscription",
      fr: "Abonnement payant",
    },
    category: "immersion",
  },

  // Gamification and fun
  {
    name: "Duolingo",
    description: {
      pl: "Popularna aplikacja do nauki języka w formie gry, z systemem poziomów i punktów.",
      en: "Popular language learning app in game form, with a system of levels and points.",
      fr: "Application populaire d'apprentissage des langues sous forme de jeu, avec un système de niveaux et de points.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "gamification",
  },
  {
    name: "Drops",
    description: {
      pl: "Szybka nauka słownictwa w formie wizualnych skojarzeń i gier.",
      en: "Quick vocabulary learning in the form of visual associations and games.",
      fr: "Apprentissage rapide du vocabulaire sous forme d'associations visuelles et de jeux.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "gamification",
  },
  {
    name: "Mondly",
    description: {
      pl: "Kursy językowe z modułami dziennymi i chatbotem do ćwiczeń konwersacyjnych.",
      en: "Language courses with daily modules and chatbot for conversation practice.",
      fr: "Cours de langue avec des modules quotidiens et un chatbot pour la pratique de la conversation.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "gamification",
  },
  {
    name: "LingoDeer",
    description: {
      pl: "Rozbudowane lekcje z gramatyką i ćwiczeniami, szczególnie dobre dla języków azjatyckich.",
      en: "Extensive lessons with grammar and exercises, especially good for Asian languages.",
      fr: "Leçons complètes avec grammaire et exercices, particulièrement bonnes pour les langues asiatiques.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "gamification",
  },
  {
    name: "Lingvist",
    description: {
      pl: "Inteligentna nauka słownictwa z wykorzystaniem AI i analizy postępów.",
      en: "Intelligent vocabulary learning using AI and progress analysis.",
      fr: "Apprentissage intelligent du vocabulaire utilisant l'IA et l'analyse des progrès.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "gamification",
  },
  {
    name: "Busuu",
    description: {
      pl: "Kursy językowe z elementami społecznościowymi, poprawianie tekstów przez native speakerów.",
      en: "Language courses with social elements, text correction by native speakers.",
      fr: "Cours de langue avec des éléments sociaux, correction de texte par des locuteurs natifs.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "gamification",
  },
  {
    name: "Babbel",
    description: {
      pl: "Strukturalne lekcje z naciskiem na praktyczne zastosowanie języka i gramatykę.",
      en: "Structural lessons with emphasis on practical language application and grammar.",
      fr: "Leçons structurelles avec accent sur l'application pratique de la langue et la grammaire.",
    },
    pricingModel: {
      pl: "Płatna (dostępne próbki lekcji)",
      en: "Paid (lesson samples available)",
      fr: "Payant (échantillons de leçons disponibles)",
    },
    category: "gamification",
  },

  // Writing, reading and grammar
  {
    name: "Write & Improve",
    description: {
      pl: "Narzędzie do pisania z automatyczną oceną i sugestiami poprawy (opracowane przez Cambridge).",
      en: "Writing tool with automatic assessment and improvement suggestions (developed by Cambridge).",
      fr: "Outil d'écriture avec évaluation automatique et suggestions d'amélioration (développé par Cambridge).",
    },
    pricingModel: {
      pl: "Darmowe",
      en: "Free",
      fr: "Gratuit",
    },
    category: "writing",
  },
  {
    name: "Grammarly",
    description: {
      pl: "Zaawansowany korektor pisowni i gramatyki w języku angielskim.",
      en: "Advanced spelling and grammar checker in English.",
      fr: "Correcteur avancé d'orthographe et de grammaire en anglais.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "writing",
  },
  {
    name: "WordReference",
    description: {
      pl: "Słownik z bogatym zestawem przykładów i forami językowymi.",
      en: "Dictionary with a rich set of examples and language forums.",
      fr: "Dictionnaire avec un riche ensemble d'exemples et de forums linguistiques.",
    },
    pricingModel: {
      pl: "Darmowy",
      en: "Free",
      fr: "Gratuit",
    },
    category: "writing",
  },
  {
    name: "Reverso Context",
    description: {
      pl: "Tłumaczenia słów i zwrotów w rzeczywistych kontekstach.",
      en: "Translations of words and phrases in real contexts.",
      fr: "Traductions de mots et d'expressions dans des contextes réels.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "writing",
  },
  {
    name: "DeepL",
    description: {
      pl: "Bardzo dokładny tłumacz z funkcją edycji i sugestii.",
      en: "Very accurate translator with editing and suggestion functions.",
      fr: "Traducteur très précis avec des fonctions d'édition et de suggestion.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "writing",
  },
  {
    name: "Tatoeba",
    description: {
      pl: "Baza przykładów zdań z tłumaczeniami na wiele języków.",
      en: "Database of example sentences with translations into many languages.",
      fr: "Base de données d'exemples de phrases avec des traductions dans de nombreuses langues.",
    },
    pricingModel: {
      pl: "Darmowa",
      en: "Free",
      fr: "Gratuit",
    },
    category: "writing",
  },
  {
    name: "LanguageTool",
    description: {
      pl: "Korektor tekstu obsługujący wiele języków, także pod kątem stylu i interpunkcji.",
      en: "Text corrector supporting many languages, also for style and punctuation.",
      fr: "Correcteur de texte prenant en charge de nombreuses langues, également pour le style et la ponctuation.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "writing",
  },

  // Less known but effective tools
  {
    name: "Nemo",
    description: {
      pl: "Prosty kurs słownictwa i zwrotów z funkcją nagrywania i odsłuchu.",
      en: "Simple vocabulary and phrase course with recording and playback function.",
      fr: "Cours simple de vocabulaire et de phrases avec fonction d'enregistrement et de lecture.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "other",
  },
  {
    name: "Pimsleur",
    description: {
      pl: "Kursy audio skupiające się na mówieniu i rozumieniu ze słuchu.",
      en: "Audio courses focusing on speaking and listening comprehension.",
      fr: "Cours audio axés sur l'expression orale et la compréhension auditive.",
    },
    pricingModel: {
      pl: "Płatna subskrypcja (dostępny okres próbny)",
      en: "Paid subscription (trial period available)",
      fr: "Abonnement payant (période d'essai disponible)",
    },
    category: "other",
  },
  {
    name: "Lingualia",
    description: {
      pl: "Kursy językowe sterowane przez algorytm dopasowujący się do użytkownika.",
      en: "Language courses driven by an algorithm that adapts to the user.",
      fr: "Cours de langue pilotés par un algorithme qui s'adapte à l'utilisateur.",
    },
    pricingModel: {
      pl: "Freemium",
      en: "Freemium",
      fr: "Freemium",
    },
    category: "other",
  },
]
