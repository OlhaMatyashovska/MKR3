import axios from "axios";

import store from "../store";



export default {
    async deleteHashtags(id) {
        try {
            
            let deletedHashtag = (
                await axios.delete(
                    `https://localhost:3443/api/photo/${id}/hashtags`
                )
            ).data.forEach(element => {
                if(element._id === id) {
                    element.HashTag = [];
                    return element;
                }
                return element;
            });
            return deletedHashtag;
        }
        catch (err) {
            console.log(err);
        }
    }
}