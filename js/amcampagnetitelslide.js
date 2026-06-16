const templateWidth = 2160;
const templateHeight = 2880;
canvas.width = templateWidth;
canvas.height = templateHeight;

const overlay = new ImgWrapper("templateImages/AMCampagne/Titel-Slide.png");

const topText = new TextDrawable({
    font: "BebasNeueBoldItalic",
    linespacing: 0.4,
    color: "#AED8A4",
    allCaps: true,
    context,
    xPosition: 100,
    yPosition: 50,
    maxWidth: 1940,
    maxHeight: 600,
    inputID: "titelText",
    doCenter: true,
    doDynamicSize: false,
    fontSize: 188,
});
topText.makeDraggable();

const backgroundImage = new DraggableResizableObject(canvas, "imageSize", document.createElement('img'), 0, 0, 0, 0);
backgroundImage.makeDraggable(canvas);

// Define layers here
let layers = [
    backgroundImage, 
    overlay,
    topText,
];
