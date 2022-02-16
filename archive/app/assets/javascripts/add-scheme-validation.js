

    var button = document.querySelector('#multiple-pcs-add');
    console.log(button);
    button.addEventListener('click', function(e){
        var input = document.querySelector('#scheme-name');
        var validation = document.querySelector('#errorSummary'); 
        var validationDuplicate = document.querySelector('#errorSummaryDuplicate');
        var duplicateTrigger = false;

        $('.scheme_name').each(function() {
            if(input.value.trim() == $(this).html()) {
                duplicateTrigger = true;
            }
        });

        if (input.value.trim() === ''){
            validation.style.display = 'inline-block';
            validationDuplicate.style.display = 'none';
            e.preventDefault();
            return false;
        } else if(duplicateTrigger == true) {
            validationDuplicate.style.display = 'inline-block';
            validation.style.display = 'none';
            e.preventDefault();
            return false;
        } else{
            validation.style.display = 'none';
            validationDuplicate.style.display = 'none';
            return true;
        }
        
    });