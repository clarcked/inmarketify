import {InMemoryCache, makeVar} from '@apollo/client'

export const _cart: any = makeVar<any>([])

const cache = new InMemoryCache({
    addTypename: true,
    typePolicies: {
        Query: {
            fields: {
                items: {
                    read() {
                        return _cart()
                    }
                },
            }
        }
    }
})

export default cache