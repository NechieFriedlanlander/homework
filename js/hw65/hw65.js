/*global pcs */
(function () {
    'use strict';

    const button = $('#button');
    const fileName = $('#filename');
    const resultElem = $('#result');
    const spinner = $('#spinner');

    button.click(() => {
        spinner.show();
        fetch(fileName.val())
            .then(r => {
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText} `);
                }
                return r.text();
            })
            .then(rt => {
                resultElem.text(rt);
                spinner.hide();
            })
            .catch(err => {
                pcs.messageBox.show(err, true);
                spinner.hide();
            });
    });
} ());