$(document).ready(function () {
    $('#add-note').click(function (event) {
        
        var hasError = false;
        
        if ($('#pcs').val() == 'Recipient name') {
            $('#recipientError').css('display', 'block');
            hasError = true;
        } else {
            $('#recipientError').css('display', 'none');
        }
        if ($('#startDate').val() == '') {
            $('#startDateError').css('display', 'block');
            hasError = true;
        } else {
            $('#startDateError').css('display', 'none');
        }
        if ($('#endDate').val() == '') {
            $('#endDateError').css('display', 'block');
            hasError = true;
        } else {
            $('#endDateError').css('display', 'none');
        }
        if ($('#year').val() == 0) {
            $('#yearError').css('display', 'block');
            hasError = true;
        } else {
            $('#yearError').css('display', 'none');
        }
        if ($('#wasteType').val() == 0) {
            $('#wasteError').css('display', 'block');
            hasError = true;
        } else {
            $('#wasteError').css('display', 'none');
        }
        if ($('#protocol').val() == 0) {
            $('#protocolError').css('display', 'block');
            hasError = true;
        } else {
            $('#protocolError').css('display', 'none');
        }

        if (hasError) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "linear");
            $('#errorSummary').css('display', 'block');
        }
        else{
            $('#errorSummary').css('display', 'none');
        }

    });

    $('#transferEvidenceButton').click(function (event) {
        
        
        var hasError = true;
        
        var evidenceNoteSelection = $('[name*="chk"]');

        evidenceNoteSelection.each(function(){
            if ($(this).is(":checked")){
                hasError = false;
            }
        });

        console.log(evidenceNoteSelection)

        if (hasError) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "linear");
            $('#transferEvidenceErrorSummary').css('display', 'block');
        }
        else{
            $('#transferEvidenceErrorSummary').css('display', 'none');
        }

    });


});
