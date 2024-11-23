import { useState, useTransition } from "react"
import { getCountries } from "../Api/postApi"
import { Loader } from "./Loader"
import { useEffect } from "react"
import { CountryCard } from "./CountryCard"
import { SearchFilter } from "./SearchFilter"

export const Country = () => {

    // Search and Filter
    const [search, setSearch] = useState()
    const [filter, setFilter] = useState("All")

    // getting countries data
    const [isPending, startTransition] = useTransition()
    const [countries, setCountries] = useState([])

    useEffect(() => {
        startTransition(async() => {
            const response = await getCountries()
            setCountries(response.data);
        })
    }, [])

    // Loader..
    if(isPending) return <Loader />

    // search functionality
    const searchCountry = (country) => {
        if(search){
            return country.name.common.toLowerCase().includes(search.toLowerCase())
        }
        return country
    }
    const filterRegion = (country) => {
        if(filter === "All") return country;
        return(country.region === filter)
    }
    const searchedCountries = countries.filter((country) => searchCountry(country) && filterRegion(country))
    return (
        <section className="country-section">

            <SearchFilter 
            search={search} 
            setSearch={setSearch} 
            filter={filter} 
            setFilter={setFilter}
            countries={countries}
            setCountries={setCountries} />

            <ul className="grid grid-four-cols">
                {
                    searchedCountries.map((curCountry, index)=>{
                        return <CountryCard country={curCountry} key={index}/>
                    })
                }
            </ul>
        </section>
    )
}