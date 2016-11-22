const random0to255 = () => Math.floor(Math.random() * 256);

const flashColors = function ($element, howFast) {
    setInterval(function () {
        $element.css({
            color: `rgb(${random0to255()}, ${random0to255()}, ${random0to255()})`
        });
    }, howFast);
};

$(function () {

    const $logo = $('#logo');
    const $favoriteColorsList = $('#favorite-colors');
    flashColors($logo, 5000);

    const colors = [0, 0, 0];

    const updateMyColor = function () {
        $('#my-color').css({
            background: `rgb(${colors.join(',')})`
        });
    };

    $('input').on('change', function (e) {
        const $input = $(this);
        const value = $input.val();
        const $spanToUpdate = $input.siblings('span');
        const $parentDiv = $input.parent();
        const elementIndex = $parentDiv.index();
        $spanToUpdate.text(value);
        colors[elementIndex] = value;
        updateMyColor();
    });

    $('#save-color').on('click', function () {
        const $newColor = $(`<div class="favorite-color" style="background: rgb(${colors.join(',')})"></div>`);
        const $newLi = $('<li></li>');
        $newLi.append($newColor);
        $favoriteColorsList.append($newLi);
    });

});

