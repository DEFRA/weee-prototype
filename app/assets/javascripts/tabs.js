
    function tabClicked(tab) {
        sessionStorage.setItem('selectedTab', tab);
    }

    $(document).ready(function () {
        var selected = sessionStorage.getItem('selectedTab');
       
        if (selected || selected !== '')
        {
            $(selected).attr('aria-selected','true');
        }
    });

    function initTabs(){
        sessionStorage.setItem('selectedTab', '');
    }