import "../../src/store/index"
import { createStore } from "vuex";
import networking from "../../src/networkingForTests";


const testPhotos = [
    
        {
            "Hashtags": [
                "#photos",
                "#kitties"
            ],
            "CommentsList": [
                "Яка гарнюня!!!",
                "дуже гарна кішка",
                "Бaчу,ти її дуже любиш"
            ],
            "_id": "60606e730b5a3557ccf3c419",
            "Author": "Кампо",
            "Name": "Моя Мая",
            "Description": "домашній улюбленець Віки",
            "DateofPublishing": "2020-04-23T18:25:43.511Z",
            "UrlFile": "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
            "NumberofLikes": 100,
            "__v": 0
        },
        {
            "Hashtags": [
                "#photos",
                "#France"
            ],
            "CommentsList": [
                "Як гарно",
                "Яка ж ти везуча, так попасти в Париж!!!!"
            ],
            "_id": "606070a289dcd546284db793",
            "Author": "Матяшовська",
            "Name": "Краса",
            "Description": "Фото з Парижу",
            "DateofPublishing": "2012-04-23T18:25:43.511Z",
            "UrlFile": "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
            "NumberofLikes": 23,
            "__v": 0
        }
    
];
jest.mock(
    "../../src/networkingForTests"
);

describe("Unit tests for photos vuex unit", () => {
    describe("test action ", () => {

        it("should call networking.deleteHashtags()", async () => {
            const store = createStore({
                state: {
                    photos: [...testPhotos]
                },
                mutations: {
                    removeHashTag: state.photos.mutations.removeHashtag
                }, actions: {
                    deleteHashTagById: state.photos.actions.deleteHashTagById
                }
            });
            let id ="60606e730b5a3557ccf3c419";
            networking.deleteHashtags = jest.fn(
                async (id) => {
                    return new Promise(
                        (resolve, reject) => {
                            resolve(testPhotos)
                        }
                    )
                }
            );
            await store.dispatch("deleteHashTagById", id);
            expect(networking.deleteHashtags).toContainEqual(store.state.photos);
        });

        it("should save test data to state.books", async () => {
            const store = createStore({
                state: {
                    photos: [...testPhotos]
                },
                mutations: {
                    removeHashTag: state.photos.mutations.removeHashtag
                }, actions: {
                    deleteHashTagById: state.photos.actions.deleteHashTagById
                }
            });
            let id ="meow";
            networking.deleteHashtags = jest.fn(
                async (id) => {
                    return new Promise(
                        (resolve, reject) => {
                            resolve(testPhotos)
                        }
                    )
                }
            );
            await store.dispatch("deleteHashTagById", id);
            expect(networking.deleteHashtags).not.toContainEqual(store.state.photos);
            
        });

    });
    describe("test finding Author", () => {
        it("should return name of author of photo by id", () => {
            const store = createStore({
                state: {
                    photos: [...testPhotos],
                    id:"60606e730b5a3557ccf3c419"
                },
                getters: {
                    author: photos.getters.author
                }
            });

            
            const author = store.getters.author

            
            expect(author).toEqual("Кампо");
        });

        it("should return name of author of photo by id", () => {
            const store = createStore({
                state: {
                    photos: [...testPhotos],
                    id:"meooow"
                },
                getters: {
                    author: photos.getters.author
                }
            });

            
            const author = store.getters.author

            
            expect(author).not.toEqual("Кампо");
        });
    });
});