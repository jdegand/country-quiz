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
