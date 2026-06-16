const templateWidth = 2160;
const templateHeight = 2880;
canvas.width = templateWidth;
canvas.height = templateHeight;

const topText = new TextDrawable({
    font: "BebasNeueBoldItalic",
    linespacing: 0.4,
    color: "#AED8A4",
    allCaps: true,
    context,
    xPosition: 100,
    yPosition: 50,
    maxWidth: 1940,
    maxHeight: 400,
    inputID: "titelText",
    doCenter: false,
    doDynamicSize: false,
    fontSize: 188,
});
topText.lockXPosition();
topText.makeDraggable();

const background = new ImgWrapper("templateImages/AMCampagne/Tekst-Slide-2.png");

const messageTextLeft = new JustifiedTextDrawable({
    font: "MontserratBold",
    linespacing: 0.3,
    color: "#060606",
    context,
    xPosition: 120,
    yPosition: 850,
    maxWidth: 1940,
    fontSize: 60,
    inputID: "oproepTekstLinks",
    doCenter: false
});
messageTextLeft.lockXPosition();
messageTextLeft.makeDraggable();

// Define layers here
let layers = [
    background,
    topText,
    messageTextLeft,
];
