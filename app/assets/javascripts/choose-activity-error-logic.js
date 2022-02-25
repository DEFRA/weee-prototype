$(document).ready(function () {
    $('#choose-activity-button').click(function (event) 
	{
        var hasError = false;
        
        if ( $('#choose-activity').is(":checked") ) 
		{
            $('#choiceError').css('display', 'none');
            $('#errorRedBorder').css('border-left', '5px solid transparent;');
            $('#errorRedText').css('display', 'none');
        } 
		else 
		{
            $('#choiceError').css('display', 'block');
            $('#errorRedBorder').css('border-left', '5px solid #d4351c');
            $('#errorRedBorder').css('padding-left', '16px');
            $('#errorRedText').css('display', 'block');
            hasError = true;
        }
		
        if (hasError) 
		{
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "linear");
            $('#errorSummary').css('display', 'block');
        }
        else
		{
            $('#errorSummary').css('display', 'none');
        }
    });

    $('#chooseActivityButton').click(function (event) {
        
        var hasError = true;
        var evidenceNoteSelection = $('[name*="chk"]');

        evidenceNoteSelection.each(function()
		{
            if ($(this).is(":checked"))
			{
                hasError = false;
            }
        });

        if (hasError) 
		{
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "linear");
            $('#transferEvidenceErrorSummary').css('display', 'block');
        }
        else
		{
            $('#transferEvidenceErrorSummary').css('display', 'none');
        }
    });
});
