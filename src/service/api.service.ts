import type {ICommentsModel} from "../model/ICommentsModel.ts";


const endpointComments = import.meta.env.VITE_API_ENDPOINT_COMMENTS + '/comments';

const loadComments = async ():Promise<ICommentsModel[]> => {
    return await fetch(endpointComments)
        .then(res => res.json());
}

export {loadComments};