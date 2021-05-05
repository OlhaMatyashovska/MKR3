import { createStore } from 'vuex';
import axios from 'axios';


const store = createStore({
    state: {
        studentInfo:{
            name:"Olya",
            surname:"Matyashovska"
        },
        variant:10,
        file:"https://e-learn.uzhnu.edu.ua/mod/assign/view.php?id=111032",
        photos:[],
        id:''
    },
    getters: {
        photos(state) {
            return state.photos;
        },
        
        //  використовую геттер фото для відображення колекції фотографій, тому записую пошук автора в мутацію
    },
    mutations: {
        setPhotos(state, photos) {
            state.photos = photos;
        },
        async findAuthor(state, id) {
            let myTarget = JSON.parse(JSON.stringify(state.photos.filter(x => x._id === id)))[0].Author;
            console.log(myTarget);
            // return myTarget;
        },
        removeHashtag({ photos }, hashtags) {
            photos.forEach((item) => {
                if(item.Hashtags === hashtags) {
                    item.Hashtags = [];
                    return item;
                }
                return item;
            });
        }
    },
    actions: {
        async loadPhotos({commit}) {
            const photos = (await axios.get("http://localhost:4000/api/photo")).data;
            commit("setPhotos", photos);
        },
        // оскільки цього запиту не має на бекенді, то я створила дію, але не додаю для неї використання в компонентах
        async deleteHashTagById({ commit }, id) {
            let deletedHashtags = (await axios.delete(`https://localhost:3443/api/photo/${id}/hashtags`)).data;
            if (!deletedHashtags)
                return null;
            commit("removeHashtag", deletedHashtags);
            return deletedHashtags;
        },
    }
});

export default store;