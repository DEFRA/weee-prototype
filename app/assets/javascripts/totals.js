var fieldIDs = ['received1', 'received2', 'received3', 'received4', 'received5', 'received6', 'received7', 'received8', 'received9', 'received10', 'received11', 'received12', 'received13', 'received14',
'reUsed1', 'reUsed2', 'reUsed3', 'reUsed4', 'reUsed5', 'reUsed6', 'reUsed7', 'reUsed8', 'reUsed9', 'reUsed10', 'reUsed11', 'reUsed12', 'reUsed13', 'reUsed14'];

function calculateTotals(){
    var grandTotalReceived = 0.000;
    var grandTotalReused = 0.000;
   
    for (var i = 0; i < fieldIDs.length; i++) {
        var control = $('#' + fieldIDs[i]);
        var text = control.val();

        if (text == null) {

        } else {
            if (fieldIDs[i].indexOf('reUsed') >= 0) {
                var fieldNumberReused = Number($('#' + fieldIDs[i]).val());
                if (!isNaN(fieldNumberReused)) {
                    grandTotalReused += fieldNumberReused;
                }
            } else {
                var fieldNumber = Number($('#' + fieldIDs[i]).val());
                if (!isNaN(fieldNumber)) {
                    grandTotalReceived += fieldNumber;
                }
            }
        }
    }

    grandTotalReceived = grandTotalReceived.toFixed(3);
    grandTotalReused = grandTotalReused.toFixed(3);
    $('#tonneTotalReceived').html(grandTotalReceived + ' tonnes');
    $('#tonneTotalReUsed').html(grandTotalReused + ' tonnes');
}

$(document).ready(function () {

    for (var i = 0; i < fieldIDs.length; i++) {
        var control = $('#' + fieldIDs[i]);

        control.on('input', function () {
            calculateTotals();
        });
    }

    calculateTotals();

});