

    var button = document.querySelector('#multiple-pcs-add');
    console.log(button);
    button.addEventListener('click', function(e){
        var input = document.querySelector('#scheme-name');
        var validation = document.querySelector('.govuk-error-summary'); 
        
        if (input.value.trim() ===''){
            validation.style.display = 'inline-block';
            e.preventDefault();
            return false;
        } else{
            validation.style.display = 'none';
            return true;
        }
        
    });


