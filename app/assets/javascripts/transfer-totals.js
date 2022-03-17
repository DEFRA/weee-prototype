

$(document).ready(function () {

    var controls = $('[id^=transfer-rec]');
    controls.each(function(){
        $(this).on('input', function () {
            calculateTotals();
        });
    
    });
    controls = $('[id^=transfer-reused]');
    controls.each(function(){
        $(this).on('input', function () {
            calculateTotals();
        });
    
    });

    function calculateTotals(){
        //get the categories as totals are per cat
        var categories = [];
        $("[name=category").each(function(){
            categories.push($(this).val());
        });

        categories.forEach(cat => {
            var catReceivedTotal = 0.000;
            var catReusedTotal = 0.000;

            var receivedIds = "transfer-rec-category-" + cat;
            var reUsedIds = "transfer-reused-category-" + cat;

            var receievedControls = $('[id^=' + receivedIds);
            receievedControls.each(function(){
                var fieldReceived = Number($(this).val());
                if (!isNaN(fieldReceived)) {
                    catReceivedTotal += fieldReceived;
                }
            });

            var reusedControls = $('[id^=' + reUsedIds);
            reusedControls.each(function(){
                var fieldReused = Number($(this).val());
                if (!isNaN(fieldReused)) {
                    catReusedTotal += fieldReused;
                }
            });

            var totalReceivedId = cat + "-total-received";
            var totalReusedId = cat + "-total-reused";

            $('#' + totalReceivedId).html(catReceivedTotal.toFixed(3));
            $('#' + totalReusedId).html(catReusedTotal.toFixed(3));

            $('#' + totalReceivedId + "-hidden").val(catReceivedTotal.toString());
            $('#' + totalReusedId + "-hidden").val(catReusedTotal.toString());
        });


        var grandTotalReceived = 0.000;
        var grandTotalReused = 0.000;

        var receievedControls = $('[id^=transfer-rec]');
        receievedControls.each(function(){
            var fieldReceived = Number($(this).val());
            if (!isNaN(fieldReceived)) {
                grandTotalReceived += fieldReceived;
            }
        });

        var reusedControls = $('[id^=transfer-rec]');
        reusedControls.each(function(){
            var fieldReused = Number($(this).val());
            if (!isNaN(fieldReused)) {
                grandTotalReused += fieldReused;
            }
        });

        $('#receivedTransferTotal').html(grandTotalReceived.toFixed(3));
        $('#reusedTransferTotal').html(grandTotalReused.toFixed(3));
    }

    calculateTotals();
});