export const siteRoutes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home').then((m) => m.Home),
  },
];