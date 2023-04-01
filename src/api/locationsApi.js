import sistatisApi from './index';

const locationsApi = '/location';

export const getLocations = () =>
    sistatisApi
        .get(locationsApi)
        .then((response) => {
            localStorage.setItem(
                'locations',
                JSON.stringify(response.data.data)
            );
            return response.data.data;
        })
        .catch((error) => {
            var locations = JSON.parse(localStorage.getItem('locations'));
            if (locations) {
                return locations;
            }

            throw error.message;
        });

export default locationsApi;
