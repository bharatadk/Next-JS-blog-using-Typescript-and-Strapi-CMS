import axios from "axios";

const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        Authorization: "Bearer " + process.env.BACKEND_API_KEY,
    },
});

// Categories
export const fetchCategories = async () => {
    return await axios({
        method: "GET",
        url: "http://192.168.1.99:5000/api/categories",
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "Bearer 6381e0d24d9106c7e457f36ddfcbc9d3e4d626869bb677b7d71c514a3d28fa84f82d33bb87c8f86d316ea6d76917ae6e28a4faa6e130968cb4fa27aabd932f59ca1399194fc53fb6bb80027dde939b320c5303e00835ff29f9acf651fa6794bfed53fd932e993b6be3f292817a5db26380947056fa55c01debd6be19161cd435",
        },
    });
};

// Articles
export const fetchArticles = async (queryString: string) =>
    api.get(`/api/articles?${queryString}`);

export const fetchArticleBySlug = async (queryString: string) =>
    api.get(`/api/articles?${queryString}`);
