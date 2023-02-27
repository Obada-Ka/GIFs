import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl ;
export const AppConfig = {
    apiKey: environment.apiKey,
    endPoints: {
        getGifs: `${apiUrl}/trending`,
        searchGifs: `${apiUrl}/search`,
        getGifsByIds: `${apiUrl}`,
    }
};
