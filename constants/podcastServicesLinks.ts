interface PodcastServicesLink {
  name: string;
  url: string;
  alt: string;
  iconPath: string;
}

export const podcastServicesLinks: PodcastServicesLink[] = [
  {
    name: 'spotify',
    url: 'https://open.spotify.com/genre/podcasts-web',
    alt: 'spotify podcast link',
    iconPath: '/spotify-icon.svg',
  },
  {
    name: 'pocketcasts',
    url: 'https://pocketcasts.com/',
    alt: 'pocket casts podcast link',
    iconPath: '/pocket-casts-icon.svg',
  },
  {
    name: 'soundcloud',
    url: 'https://soundcloud.com/',
    alt: 'soundcloud podcast link',
    iconPath: '/soundcloud-icon.svg',
  },
  {
    name: 'applepodcasts',
    url: 'https://www.apple.com/ua/apple-podcasts/',
    alt: 'apple podcasts link',
    iconPath: '/apple-podcast-icon.svg',
  },
  {
    name: 'overcast',
    url: 'https://overcast.fm/',
    alt: 'overcast podcast link',
    iconPath: '/overcast-icon.svg',
  },
];
