/*global pcs */
(function () {
    'use strict';
    const fileInputelem = $('#fileInput');
    const LoadButtonElem = $('#loadButton');
    const resultElem = $('#result');
    const spinner = $('#spinner');
   
    spinner.hide();
    LoadButtonElem.click(() => {
        spinner.show();
        fetch(fileInputelem.val())
            .then(r => {
                if (!r.ok) {
                    throw new Error(`${r.status}${r.statusText}`);
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


}());