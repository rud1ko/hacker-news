import {createBrowserRouter, RouteWithRoot} from "@vkontakte/vk-mini-apps-router";

const routes: RouteWithRoot[] = [
    {
        path: '/',
        panel: 'home_panel',
        view: 'default_view',
        root: 'default_root',
    }
]

export const browserRouter = createBrowserRouter(routes)