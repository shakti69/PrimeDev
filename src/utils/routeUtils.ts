export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'work'
  | 'project-detail'
  | 'contact';

export interface RouteState {
  page: PageId;
  param?: string; // serviceId or projectId
}

export function parseHash(hash: string): RouteState {
  const cleanHash = hash.replace(/^#\/?/, '').trim();
  if (!cleanHash || cleanHash === 'home') {
    return { page: 'home' };
  }

  const parts = cleanHash.split('/');
  const main = parts[0];
  const sub = parts[1];

  if (main === 'about') return { page: 'about' };
  if (main === 'services') {
    if (sub) return { page: 'service-detail', param: sub };
    return { page: 'services' };
  }
  if (main === 'work' || main === 'portfolio') {
    if (sub) return { page: 'project-detail', param: sub };
    return { page: 'work' };
  }
  if (main === 'contact') return { page: 'contact' };

  return { page: 'home' };
}

export function routeToHash(route: RouteState): string {
  switch (route.page) {
    case 'home':
      return '#/';
    case 'about':
      return '#/about';
    case 'services':
      return '#/services';
    case 'service-detail':
      return `#/services/${route.param || ''}`;
    case 'work':
      return '#/work';
    case 'project-detail':
      return `#/work/${route.param || ''}`;
    case 'contact':
      return '#/contact';
    default:
      return '#/';
  }
}
