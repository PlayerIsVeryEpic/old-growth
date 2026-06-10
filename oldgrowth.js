const tab = document.querySelector(".dropdown")
const tabshadow = document.querySelector(".dropshadow")
var visible = false
var tabWidth = 0
var tabShadowWidth = 0

function dropdown() {
    if (visible == false) {
        visible = true;
        widthUp();
        
        tab.style.zIndex = '98';
        tabshadow.style.width = '100%';
        tabshadow.style.zIndex = '97';
        
    } else {
        visible = false;
        widthDown();
    };
};

function widthUp() {
    tab.style.width = tabWidth.toString() + '%';
    if (visible == false) {
        return;
    };

    if (tabWidth >= 20) {
        tabWidth = 20
        return;
    };

    setTimeout(function() {
        tabWidth++;
        widthUp();
    }, 10);
};

function widthDown() {
    console.log(tabWidth.toString)
    tab.style.width = tabWidth.toString() + '%';
    if (visible == true) {
        return;
    }

    if (tabWidth <= 0) {
        tabWidth = 0
        tab.style.zIndex = '-99';
        tabshadow.style.width = '0%';
        tabshadow.style.zIndex = '-99';
        return;
    };

    setTimeout(function() {
        tabWidth--;
        widthDown();
    }, 10);
};