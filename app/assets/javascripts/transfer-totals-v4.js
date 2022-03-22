
$(document).ready(function () 
{
	document.getElementById("note-0000-chk").addEventListener('change', (e) => 
	{
		if (!this.checked) 
		{
			// 1. unbind input events
			$('[id^=transfer-rec]').unbind('input');
			
			// 2. copy values
			CopyTonnagesAcross();
			calculateTotals();
			
			// 3. bind input events
			$('[id^=transfer-rec]').bind('input', function () { calculateTotals(); });
		}
	});
	
	function CopyTonnagesAcross()
	{
		var transferReceivedControls = $('[id^=transfer-rec-category]');
		var transferReusedControls = $('[id^=transfer-reused-category]');

		var noteReceivedControls = $('[id^=note-received-category]');
		var noteReusedControls = $('[id^=note-reused-category]');

		var counter = 0;
		noteReceivedControls.each(function()
		{
			var amount = Number($(this).html());
			var transferReceived = transferReceivedControls[counter];
			$(transferReceived).val(amount);
			counter++;
		});

		counter = 0;
		noteReusedControls.each(function()
		{
			var amount = Number($(this).html());
			var transferReused = transferReusedControls[counter];
			$(transferReused).val(amount);
			counter++;
		});
	}
	
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
	
    function calculateTotals()
	{
        //get the categories as totals are per cat
        var categories = [];
        $("[name=category").each(function(){
            categories.push($(this).val());
        });

        categories.forEach(cat => {
            var catReceivedTotal = 0;
            var catReusedTotal = 0;

            var receivedIds = "transfer-rec-category-" + cat.split(".")[0];
            var reUsedIds = "transfer-reused-category-" + cat.split(".")[0];
			
			console.log(receivedIds);
			console.log(reUsedIds);

            var receivedControls = $('[id^="' + receivedIds + '"]');
			
			console.log(receivedControls);
			
            receivedControls.each(function(){
                var fieldReceived = Number($(this).val());
                if (!isNaN(fieldReceived)) {
                    catReceivedTotal += fieldReceived;
                }
            });

            var reusedControls = $('[id^=' + reUsedIds + ']');
            reusedControls.each(function(){
                var fieldReused = Number($(this).val());
                if (!isNaN(fieldReused)) {
                    catReusedTotal += fieldReused;
                }
            });

            var totalReceivedId = cat + "-total-received";
            var totalReusedId = cat + "-total-reused";

            $('#' + totalReceivedId).html(catReceivedTotal.toFixed(0));
            $('#' + totalReusedId).html(catReusedTotal.toFixed(0));

            $('#' + totalReceivedId + "-hidden").val(catReceivedTotal.toString());
            $('#' + totalReusedId + "-hidden").val(catReusedTotal.toString());
        });


        var grandTotalReceived = 0;
        var grandTotalReused = 0;

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

        $('#receivedTransferTotal').html(grandTotalReceived.toFixed(0));
        $('#reusedTransferTotal').html(grandTotalReused.toFixed(0));
    }

    calculateTotals();
});
