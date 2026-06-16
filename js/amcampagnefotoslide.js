const templateWidth = 2160;
const templateHeight = 2880;
canvas.width = templateWidth;
canvas.height = templateHeight;

const backgroundImage = new DraggableResizableObject(canvas, "imageSize", document.createElement('img'), 0, 0, 0, 0);
backgroundImage.makeDraggable(canvas);

const overlay = new ImgWrapper("templateImages/AMCampagne/FotoSlide.png");

// Define layers here
let layers = [
    backgroundImage, 
    overlay,
];
