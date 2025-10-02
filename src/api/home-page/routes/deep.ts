import { get } from "http";

module.exports = {
    routes: [
        {
            method:'GET',
            path: '/home-page/deep',
            handler: 'home-page.deep',
            config: {
                auth: false,
            }
        }
    ]
}