function itemSelect(elem) {
    hiddenResultSelected();
    var si = $(elem).val();
    var isCheck = $(elem).is(':checked');

    if (isCheck) {
        fadeIn('.item-' + si, '#' + si);
    } else {
        fadeOut('.item-' + si, '#' + si);
    }
}

function fadeIn(itemClass, itemId) {
    $(itemClass).fadeIn();
    $(itemId).addClass('borda');
}

function fadeOut(itemClass, itemId) {
    $(itemClass).fadeOut();
    $(itemId).removeClass('borda');
}

function hiddenResultSelected() {
    $('.item-option').hide();
}

function cbChange(obj) {
    var cbs = document.getElementsByClassName("cb");
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    obj.checked = true;
}