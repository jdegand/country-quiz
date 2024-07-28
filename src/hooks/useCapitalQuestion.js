import { useQueries } from "react-query";

const fetchCountry = async (name) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital`);
    if (!res.ok) {
        throw new Error('Network response failed')
    }
    return res.json();
}

export const useCapitalQuestion = (names) => {
    const queryResults = useQueries(names.map(name => {
        return {
            queryKey: ['capital', name],
            queryFn: () => fetchCountry(name)
        }
    }))
    return queryResults;
}
