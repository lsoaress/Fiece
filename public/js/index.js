function show_menu() {

    var display = container.style.display;

    if (display == 'inline-block' || display == "") {
        // This code will not work ** It will now! **
        container.style.display = 'none';
        menu.style.backgroundColor = '#1d1d1d00'
    }
    else {
        if (display != "inline-block") {
            container.style.display = "inline-block";
            menu.style.backgroundColor = '#1d1d1db3'
        }
    }
}
