const baseUrl = 'https://jsonplaceholder.typicode.com'

const urls = {
    users: {
        allUsers: baseUrl + '/users',
        byId: (id: number) => {
            return baseUrl + '/' + id
        }
    },
    posts: {

    }
}

export {
    urls
}