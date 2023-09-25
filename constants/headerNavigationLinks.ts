interface NavigationLink {
  name: string;
  path: string;
}

export const headerNavigationLinks: NavigationLink[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Episodes',
    path: '/episodes',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];
