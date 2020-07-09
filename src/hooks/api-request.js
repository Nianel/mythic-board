import {useState} from "react"

const access_token = 'US2HABYq4irlK27OqbCXIxhhvBk3fpgtV0'

export function useApiRequest() {
    const [results, setResults] = useState({})

    async function search(type) {
        let newResults
        switch (type) {
            case 'ataldazar': {
                newResults = await searchInstance(244)
                break
            }
            case 'freehold': {
                newResults = await searchInstance(245)
                break
            }
            case 'kings-rest': {
                newResults = await searchInstance(249)
                break
            }
            case 'shrine-of-the-storm': {
                newResults = await searchInstance(252)
                break
            }
            case 'siege-of-boralus': {
                newResults = await searchInstance(353)
                break
            }
            case 'temple-of-sethraliss': {
                newResults = await searchInstance(250)
                break
            }
            case 'the-motherlode': {
                newResults = await searchInstance(247)
                break
            }
            case 'the-underrot': {
                newResults = await searchInstance(251)
                break
            }
            case 'tol-dagor': {
                newResults = await searchInstance(246)
                break
            }
            case 'waycrest-manor': {
                newResults = await searchInstance(248)
                break
            }
            case 'operation-mechagon-junkyard': {
                newResults = await searchInstance(369)
                break
            }
            case 'operation-mechagon-workshop': {
                newResults = await searchInstance(370)
                break
            }
            default: {
                throw new Error('Unknown search type')
            }
        }
        setResults(newResults)
    }

    return [results, search]
}

async function searchInstance(instanceid) {
    const result = await fetch(encodeURI(`https://eu.api.blizzard.com/data/wow/connected-realm/1336/mythic-leaderboard/${instanceid}/period/756?namespace=dynamic-eu&locale=en_GB&access_token=${access_token}`))
    return result.json()
}

async function searchRealm() {
    const result = await fetch(encodeURI(`https://eu.api.blizzard.com/data/wow/realm/index?namespace=dynamic-eu&locale=en_GB&access_token=${access_token}`))
    return result.json()
}