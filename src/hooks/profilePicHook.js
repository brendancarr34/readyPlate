const profilePicSwitch = (num) => {
    let picture_string = "";
    switch (num) {
        case 1: 
            picture_string = require("../static/profilePics/disguise.png"); break;
        case 2:
            picture_string = require("../static/profilePics/goofy.png");    break;
        case 3:
            picture_string = require("../static/profilePics/money-tongue.png"); break;
        case 4:
            picture_string = require("../static/profilePics/purpleDevil.png");  break;
        case 5:
            picture_string = require("../static/profilePics/star-eyes.png"); break;
        case 6:
            picture_string = require("../static/profilePics/sunglasses-smile.png"); break;
        case 7:
            picture_string = require("../static/profilePics/winking-tongue.png");   break;
        default:
            picture_string = "../static/profilepic.png";
    }
    return picture_string;
}

export default profilePicSwitch;

