function calculateTotals(){
    var grandTotalReceived = 0.000;
    var grandTotalReused = 0.000;
    var fieldIDs = ['received1', 'received2', 'received3', 'received4', 'received5', 'received6', 'received7', 'received8', 'received9', 'received10', 'received11', 'received12', 'received13', 'received14',
            'reUsed1', 'reUsed2', 'reUsed3', 'reUsed4', 'reUsed5', 'reUsed6', 'reUsed7', 'reUsed8', 'reUsed9', 'reUsed10', 'reUsed11', 'reUsed12', 'reUsed13', 'reUsed14'];

    for (var i = 0; i < fieldIDs.length; i++) {
        var control = $('#' + fieldIDs[i]);
        var text = control.val();

        control.on('input', function () {
            calculateTotals();
        });

        if (text == null) {

        } else {
            if (fieldIDs[i].indexOf('reUsed') >= 0) {
                var fieldNumberReused = Number($('#' + fieldIDs[i]).val());
                if (!isNaN(fieldNumberReused)) {
                    grandTotalReused += fieldNumberReused;

                    if (fieldNumberReused!=0){
                        $('#' + fieldIDs[i]).val(fieldNumberReused.toFixed(3));
                    }
                }
            } else {
                var fieldNumber = Number($('#' + fieldIDs[i]).val());
                if (!isNaN(fieldNumber)) {
                    grandTotalReceived += fieldNumber;

                    if (fieldNumber!=0){
                        $('#' + fieldIDs[i]).val(fieldNumber.toFixed(3));
                    }
                    
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

    
    
    calculateTotals();

});