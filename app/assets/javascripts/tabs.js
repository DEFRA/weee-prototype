
    function tabClicked(tab) {
        sessionStorage.setItem('selectedTab', tab);
    }

    $(document).ready(function () {

        setTimeout(
            function() 
            {
                var selected = sessionStorage.getItem('selectedTab'); 
                
                if (selected !== null && selected !== '')
                {
                    // reset the tabs
                    var tabLinks = $("[id^='tab_']");
                    tabLinks.each(function(){
                        $(this).parent().removeClass('govuk-tabs__list-item--selected');
                        $(this).attr('aria-selected','false');
                    });
    
                    var tabPanels = $(".govuk-tabs__panel");
                    tabPanels.each(function(){
                        $(this).addClass('govuk-tabs__panel--hidden');
                    });

                    // set tabs to selected value
                    var selectedTabLink = $("a[id*='" + selected + "']");
                    
                    selectedTabLink.attr('aria-selected','true');
                    selectedTabLink.parent().addClass('govuk-tabs__list-item--selected');

                    var selectedTabPanel = $("div[id*='" + selected + "']");
                    selectedTabPanel.removeClass('govuk-tabs__panel--hidden');
                }
            }, 50);
        
    });

    function initTabs(){
        sessionStorage.setItem('selectedTab', '');
    }
