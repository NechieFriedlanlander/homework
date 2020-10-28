
(function () {
    'use strict';

    const nameElem = $('#name');
    const addrElem = $('#address');
    const nameAnsElem = $('#nameAns');
    const addrAnsElem = $('#addressAns');
    const ButtonElem = $('#button');

    $('#form').submit(event => {
        event.preventDefault();

        nameAnsElem.text(nameElem.val());
        addrAnsElem.text(addrElem.val());
    });

    $('#accept').change(() => {
        ButtonElem.prop('disabled', false);
    });
} ());