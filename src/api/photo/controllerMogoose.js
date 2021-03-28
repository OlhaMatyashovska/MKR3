import Photo from "./model";
const PhotoController = {
 
    get: async (req, res) =>{
        try {
            const photos = await Photo.find(req.query);
            setTimeout( ()=> res.send(photos), 2000);
        }
        catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    getById: async (req, res) =>{
        try {
            const photo = await Photo.findById(req.params.id);
            if (photo) 
                res.send(photo);
            else
                res.status(404).send("Not Found");             
        }
        catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    post: async (req, res) =>{
        try {
            const newPhoto = new Photo(req.body);
            const photo = await newPhoto.save();            
            res.send(photo);             
        }
        catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
}


export default PhotoController;