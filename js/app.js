require('../css/custom.css');
/* 
function generate(e) {
    e.preventDefault();
    var nameEle = document.getElementById("name");
    alert(nameEle.value)
}
 */
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}
function getName(inputValue) {
    var name = inputValue;
    if (name === undefined || name === "") {
        name = "[Your Name]"
    }
    name = name.replace(",", "%25252C").replace("%", "%2525")
    return name;
}
const IMAGE_URL = "https://res.cloudinary.com/kunal/image/upload/c_mfit,g_south,h_1000,l_b2b2b2_wj7kzb,o_69,w_1557,x_0,y_102/l_text:Abril%20Fatface_65:__MESSAGE__,co_rgb:fffa00,y_360/w_800,q_auto/v1514480777/Happy-New-Year-Pictures-2018-6_egunvr.jpg"
var nameEle = document.getElementById("name");
var finalImageEle = document.getElementById("finalImage");
finalImageEle.setAttribute("src", IMAGE_URL.replace(/__MESSAGE__/, getName(getQueryVariable('n'))))

document.querySelector("input[type=submit]").onclick = function(e) {
    e.preventDefault()
    var nameEle = document.getElementById("name");
    var name = getName(nameEle.value)
    if (name == "") {
        return
    }
    window.location.href = window.location.origin + "?n=" + name
}

