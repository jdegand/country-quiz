import { useQueries } from "react-query";

const fetchCountry = async(name) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,flags`);
    if(!res.ok){
        throw new Error('Network response failed')
    }
    return res.json();
}

export const useFlagQuestion = (names) => {
    const queryResults = useQueries(names.map(name => {
        return {
            queryKey: ['flag', name], 
            queryFn: () => fetchCountry(name), 
            //enabled: false,
        }
    }))
    return queryResults;
}

/*
import { useQueries } from "react-query"
import axios from 'axios'

const fetchSuperHero = (heroId) => { 
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const DynamicParallelPage = ({heroIds}) => {

    const queryResults = useQueries(
        heroIds.map(id => {
            return {
                queryKey : ['super-hero', id],
                queryFn: () => fetchSuperHero(id),
            }
        })
    )

    console.log({ queryResults })

    return (
        <div>
            DynamicParallelPage
        </div>
    )
}
*/