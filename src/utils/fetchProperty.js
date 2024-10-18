export const fetchProperty = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'f8480ef4c5mshaaa4e8f98d724cdp1157e8jsn0d2adbc73562',
            'x-rapidapi-host': 'real-estate12.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return result;
    } catch (error) {
        console.error(error);
    }
}