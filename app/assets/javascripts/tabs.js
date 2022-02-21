
    function tabClicked(tab) {
        sessionStorage.setItem('selectedTab', tab);
    }

    $(document).ready(function () {
        var selected = sessionStorage.getItem('selectedTab');
       
        if (selected || selected !== '')
        {
            $(selected).attr('aria-selected','true');
        }
		
		document.getElementById('tab_all-evidence').setAttribute('aria-selected','true');  // even this does not work !!!
    });

    function initTabs(){
        sessionStorage.setItem('selectedTab', '');
    }
