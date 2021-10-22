export default class Preloader {
    static preloadImages({images, completed}){
        const promise = images.map(imagePath => Preloader.prealoadImage({imagePath}));

        Promise.all(promise).then(completed);
    }

    static prealoadImage({imagePath}){
        return new Promise((res,rej) => {
            const image = new Image();
            image.src = imagePath;
            image.onload = res;            
        })

    }
};