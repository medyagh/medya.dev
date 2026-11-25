import data from './parsed_excel.json';

export const featuredAchievements = [
  {
    title: '2026 Contributor Award',
    organization: 'Kubernetes',
    image: '/kubernetes-contributor-award-2026-handshake.jpg',
    imageAlt: 'Medya Ghazizadeh receiving the 2026 Kubernetes Contributor Award at the Maintainers Summit',
    imageLinkLabel: 'Open full-size photo of Medya receiving the award',
    date: 'KubeCon NA 2026 Maintainers Summit',
    description: 'Recognized for more than seven years of leading the Minikube project (SIG Cluster Lifecycle).',
    link: 'https://www.kubernetes.dev/community/awards/2026/#cluster-lifecycle',
    linkLabel: 'View official award listing',
  },
  {
    title: 'CNCF Contributor Card',
    organization: 'CNCF',
    image: '/cncf_contributor_card.png',
    imageAlt: 'CNCF Contributor Card for medyagh — 7.5k contributions to 36 repositories over 10 years',
    imageLink: 'https://contribcard.cncf.io/medyagh',
    description: '7,500+ contributions across 36 CNCF repositories since 2017.',
    link: 'https://contribcard.cncf.io/medyagh',
    linkLabel: 'View Live Card',
  },
];

export const externalAwards = data['Awards and Recognitions'] ?? [];
export const internalAwards = data['(Internal Google) Awards'] ?? [];

export const achievementCount = featuredAchievements.length + externalAwards.length + internalAwards.length;
