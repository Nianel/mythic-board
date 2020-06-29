import {useState} from "react"

export function useApiRequest() {
    const [results, setResults] = useState({})

    async function search(type) {
        let newResults
        switch (type) {
            case 'freehold': {
                newResults = await searchInstance(245)
                break
            }
        }
        setResults(newResults)
    }

    return [results, search]
}

async function searchInstance(instanceid) {
    const result = await fetch(encodeURI(`https://eu.api.blizzard.com/data/wow/connected-realm/1336/mythic-leaderboard/${instanceid}/period/756?namespace=dynamic-eu&locale=en_GB&access_token=USEYgLgTVVf1LR3GpCNYvqMlUjTyLvO2WL`))
    return result.json()
}

async function searchRealm() {
    const result = await fetch(encodeURI(`https://eu.api.blizzard.com/data/wow/realm/index?namespace=dynamic-eu&locale=en_GB&access_token=USEYgLgTVVf1LR3GpCNYvqMlUjTyLvO2WL`))
    return result.json()
}