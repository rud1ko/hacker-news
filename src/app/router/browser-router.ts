import {createHashRouter} from "@vkontakte/vk-mini-apps-router";

export const route = createHashRouter([
    {
        path: '/',
        panel: 'main_page',
        view: 'listNews',
    },
    {
        path: '/news/:id',
        panel: 'item_page',
        view: 'listNews',
    },
]);