import axios  from "axios"
const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
})

//  http get method
export const getCountries = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
}

// hhtp get method for country details
export const getCountryDetails = (name) => {
    return api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
}