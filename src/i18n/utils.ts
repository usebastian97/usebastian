export const languages = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  ro: 'Română',
  it: 'Italiano',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function getAllLocalizedPaths(path: string): Array<{ lang: Language; path: string }> {
  return Object.keys(languages).map((lang) => ({
    lang: lang as Language,
    path: getLocalizedPath(path, lang as Language),
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact',
    },
    home: {
      hero: {
        title: 'Sebastian Georgian Utoiu',
        subtitle: 'Cloud Architect | AI | DevOps | Azure Specialist',
        cta_projects: 'View Projects',
        cta_contact: 'Get in Touch',
      },
      about_preview: 'About Me',
      featured_projects: 'Featured Projects',
      latest_posts: 'Latest Blog Posts',
      tech_stack: 'Technology Stack',
    },
    about: {
      title: 'About Me',
      bio: 'Experienced Cloud Architect specializing in Azure, AI solutions, and DevOps practices. Passionate about building scalable, secure, and efficient cloud infrastructure.',
      skills: 'Skills & Expertise',
      download_cv: 'Download CV',
    },
    projects: {
      title: 'Projects',
      filter_all: 'All',
      filter_cloud: 'Cloud',
      filter_ai: 'AI',
      filter_fullstack: 'Full-stack',
      filter_tools: 'Tools',
    },
    blog: {
      title: 'Blog',
      read_more: 'Read more',
      reading_time: 'min read',
      published: 'Published on',
    },
    contact: {
      title: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
    },
    footer: {
      rights: 'All rights reserved.',
      social: 'Connect with me',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über mich',
      projects: 'Projekte',
      blog: 'Blog',
      contact: 'Kontakt',
    },
    home: {
      hero: {
        title: 'Sebastian Georgian Utoiu',
        subtitle: 'Cloud-Architekt | KI | DevOps | Azure-Spezialist',
        cta_projects: 'Projekte ansehen',
        cta_contact: 'Kontakt aufnehmen',
      },
      about_preview: 'Über mich',
      featured_projects: 'Ausgewählte Projekte',
      latest_posts: 'Neueste Blog-Beiträge',
      tech_stack: 'Technologie-Stack',
    },
    about: {
      title: 'Über mich',
      bio: 'Erfahrener Cloud-Architekt mit Schwerpunkt auf Azure, KI-Lösungen und DevOps-Praktiken. Leidenschaftlich daran interessiert, skalierbare, sichere und effiziente Cloud-Infrastrukturen aufzubauen.',
      skills: 'Fähigkeiten & Expertise',
      download_cv: 'Lebenslauf herunterladen',
    },
    projects: {
      title: 'Projekte',
      filter_all: 'Alle',
      filter_cloud: 'Cloud',
      filter_ai: 'KI',
      filter_fullstack: 'Full-stack',
      filter_tools: 'Tools',
    },
    blog: {
      title: 'Blog',
      read_more: 'Weiterlesen',
      reading_time: 'Min. Lesezeit',
      published: 'Veröffentlicht am',
    },
    contact: {
      title: 'Kontakt aufnehmen',
      name: 'Name',
      email: 'E-Mail',
      message: 'Nachricht',
      send: 'Nachricht senden',
      success: 'Nachricht erfolgreich gesendet!',
      error: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      social: 'Verbinden Sie sich mit mir',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      blog: 'Blog',
      contact: 'Contact',
    },
    home: {
      hero: {
        title: 'Sebastian Georgian Utoiu',
        subtitle: 'Architecte Cloud | IA | DevOps | Spécialiste Azure',
        cta_projects: 'Voir les projets',
        cta_contact: 'Me contacter',
      },
      about_preview: 'À propos de moi',
      featured_projects: 'Projets en vedette',
      latest_posts: 'Derniers articles',
      tech_stack: 'Stack technologique',
    },
    about: {
      title: 'À propos de moi',
      bio: 'Architecte Cloud expérimenté spécialisé dans Azure, les solutions IA et les pratiques DevOps. Passionné par la construction d\'infrastructures cloud évolutives, sécurisées et efficaces.',
      skills: 'Compétences & Expertise',
      download_cv: 'Télécharger le CV',
    },
    projects: {
      title: 'Projets',
      filter_all: 'Tous',
      filter_cloud: 'Cloud',
      filter_ai: 'IA',
      filter_fullstack: 'Full-stack',
      filter_tools: 'Outils',
    },
    blog: {
      title: 'Blog',
      read_more: 'Lire la suite',
      reading_time: 'min de lecture',
      published: 'Publié le',
    },
    contact: {
      title: 'Me contacter',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer le message',
      success: 'Message envoyé avec succès!',
      error: 'Échec de l\'envoi du message. Veuillez réessayer.',
    },
    footer: {
      rights: 'Tous droits réservés.',
      social: 'Connectez-vous avec moi',
    },
  },
  ro: {
    nav: {
      home: 'Acasă',
      about: 'Despre',
      projects: 'Proiecte',
      blog: 'Blog',
      contact: 'Contact',
    },
    home: {
      hero: {
        title: 'Sebastian Georgian Utoiu',
        subtitle: 'Arhitect Cloud | AI | DevOps | Specialist Azure',
        cta_projects: 'Vezi proiecte',
        cta_contact: 'Contactează-mă',
      },
      about_preview: 'Despre mine',
      featured_projects: 'Proiecte selectate',
      latest_posts: 'Ultimele articole',
      tech_stack: 'Tehnologii',
    },
    about: {
      title: 'Despre mine',
      bio: 'Arhitect Cloud experimentat, specializat în Azure, soluții AI și practici DevOps. Pasionat de construirea infrastructurilor cloud scalabile, sigure și eficiente.',
      skills: 'Competențe & Expertiză',
      download_cv: 'Descarcă CV',
    },
    projects: {
      title: 'Proiecte',
      filter_all: 'Toate',
      filter_cloud: 'Cloud',
      filter_ai: 'AI',
      filter_fullstack: 'Full-stack',
      filter_tools: 'Instrumente',
    },
    blog: {
      title: 'Blog',
      read_more: 'Citește mai mult',
      reading_time: 'min citire',
      published: 'Publicat la',
    },
    contact: {
      title: 'Contactează-mă',
      name: 'Nume',
      email: 'Email',
      message: 'Mesaj',
      send: 'Trimite mesaj',
      success: 'Mesaj trimis cu succes!',
      error: 'Trimiterea mesajului a eșuat. Vă rugăm să încercați din nou.',
    },
    footer: {
      rights: 'Toate drepturile rezervate.',
      social: 'Conectează-te cu mine',
    },
  },
  it: {
    nav: {
      home: 'Home',
      about: 'Chi sono',
      projects: 'Progetti',
      blog: 'Blog',
      contact: 'Contatti',
    },
    home: {
      hero: {
        title: 'Sebastian Georgian Utoiu',
        subtitle: 'Architetto Cloud | AI | DevOps | Specialista Azure',
        cta_projects: 'Vedi progetti',
        cta_contact: 'Contattami',
      },
      about_preview: 'Chi sono',
      featured_projects: 'Progetti in evidenza',
      latest_posts: 'Ultimi articoli',
      tech_stack: 'Stack tecnologico',
    },
    about: {
      title: 'Chi sono',
      bio: 'Architetto Cloud esperto specializzato in Azure, soluzioni AI e pratiche DevOps. Appassionato nella costruzione di infrastrutture cloud scalabili, sicure ed efficienti.',
      skills: 'Competenze & Expertise',
      download_cv: 'Scarica CV',
    },
    projects: {
      title: 'Progetti',
      filter_all: 'Tutti',
      filter_cloud: 'Cloud',
      filter_ai: 'AI',
      filter_fullstack: 'Full-stack',
      filter_tools: 'Strumenti',
    },
    blog: {
      title: 'Blog',
      read_more: 'Leggi di più',
      reading_time: 'min di lettura',
      published: 'Pubblicato il',
    },
    contact: {
      title: 'Contattami',
      name: 'Nome',
      email: 'Email',
      message: 'Messaggio',
      send: 'Invia messaggio',
      success: 'Messaggio inviato con successo!',
      error: 'Invio del messaggio fallito. Riprova.',
    },
    footer: {
      rights: 'Tutti i diritti riservati.',
      social: 'Connettiti con me',
    },
  },
};
