    var button = document.querySelector('#pcs-selection-button-save');
     button.addEventListener('click', function(e){
        var input = document.querySelector('#scheme-name');
        var validation = document.querySelector('#errorSummary'); 
        var validationDuplicate = document.querySelector('#errorSummaryDuplicate');

        if (input.value.trim() === ''){
            validation.style.display = 'inline-block';
            validationDuplicate.style.display = 'none';
            e.preventDefault();
            return false;
        } else{
            validation.style.display = 'none';
            validationDuplicate.style.display = 'none';
            return true;
        }
        
    });