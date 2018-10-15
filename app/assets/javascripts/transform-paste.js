$(document).ready(function () {

    if ($('#paste-text-area').length){
        $('#paste-text-area').val('a');
    }

});




/* function xformTableBasic(numHeaderRows, numFooterRows, tableClasses) {

    //use the current selection to find the table node that has been selected
    var tableElement = FindRequiredNode('table');

    if (!preliminaryChecks(tableElement, numHeaderRows, numFooterRows)) { return; }

    var rowCount = countRows(tableElement);

    // clean up the tr elements in the tbody
    for (var iRowCount = 0; iRowCount < rowCount; iRowCount++) {
        var newRow = tableElement.children[0].children[iRowCount];
        newRow = CleanRow(newRow, false, false, false);
    }

    var offsetOfOriginalTbody = 0;

    //create the caption if it doesnt exist
    if (!isCaptionPresent(tableElement)) {
        tableElement.createCaption().innerHTML = 'caption';
        offsetOfOriginalTbody += 1;
    }

    offsetOfOriginalTbody = MoveHeaders(tableElement, numHeaderRows, offsetOfOriginalTbody, false);

    MoveFooters(tableElement, numFooterRows, offsetOfOriginalTbody, false);

    // add the table classes
    tinymce.activeEditor.dom.removeClass(tableElement);
    tinymce.activeEditor.dom.removeAllAttribs(tableElement);
    if (tableClasses.length > 0) {
        tinymce.activeEditor.dom.addClass(tableElement, tableClasses);
    }

    return;
} */