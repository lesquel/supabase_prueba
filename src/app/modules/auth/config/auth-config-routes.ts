export const authConfigRoutes = {
    path: 'auth',
    url: '/auth',
    children: {
        login: {
            path: 'login',
            url: '/auth/login',
        },
        register: {
            path: 'register',
            url: '/auth/register',
        }
    }
}