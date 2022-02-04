
    var table = document.getElementById("evidence-table");

    if (table) 
	{
        document.getElementById("input-search").addEventListener('change', (e) => {
            search();        
        });
	
        document.getElementById("year-filter").addEventListener('change', (e) => {
            filter();        
        });
		
        document.getElementById("date-filter").addEventListener('change', (e) => {
            filter();
        });
		
        document.getElementById("pcs-filter").addEventListener('change', (e) => {
            filter();
        });
		
        document.getElementById("status-filter").addEventListener('change', (e) => {
            filter();
        });
    
        document.getElementById("type-filter").addEventListener('change', (e) => {
            filter();
        });
    }
    

    function IsMatch(td, compare)
	{
        if (td) 
		{
            var txtValue = td.textContent || td.innerText;
            console.log('content ' + txtValue + ' compare ' + compare);
            if (txtValue.indexOf(compare) === -1) 
			{
                return false;
            }
        }
        return true;
    }

    function search() 
	{
        var searchFilter = document.getElementById("input-search").value;
        var table = document.getElementById("evidence-table");
        var tr = table.getElementsByClassName("govuk-table__row result-row");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            var displayRow = true;

            if (searchFilter.trim() != '' && searchFilter != '') {
                var td2 = tr[i].getElementsByTagName("td")[2];

                if (!IsMatch(td2, searchFilter)){
                    displayRow = false;
                }
            }

            if (displayRow){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
        }
      }

    function filter() 
	{
        var table = document.getElementById("evidence-table");
        var tr = table.getElementsByClassName("govuk-table__row result-row");

        var pcsFilter = document.getElementById("pcs-filter").value;
        var yearFilter = document.getElementById("year-filter").value;
        var typeFilter = document.getElementById("type-filter").value;
        var statusFilter = document.getElementById("status-filter").value;
		
		// change format to dd/MM/yyyy
		var dateFilter = document.getElementById("date-filter").value;
		if ( dateFilter != '' )
		{
			var parsedDate = new Date(dateFilter);
			var thisDate = String(parsedDate.getDate()).padStart(2, '0') 
							 + '/' 
							 + (String(parsedDate.getMonth() + 1)).padStart(2, '0') 
							 + '/' 
							 + parsedDate.getFullYear();
			dateFilter = thisDate;
		}

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) 
		{
            var displayRow = true;

            if (yearFilter != 'Compliance year') 
			{
                var td2 = tr[i].getElementsByTagName("td")[0];

                if (!IsMatch(td2, yearFilter))
				{
                    displayRow = false;
                }
            }

            if (dateFilter.trim() != '' && dateFilter != '') 
			{
                var td2 = tr[i].getElementsByTagName("td")[3];

                if (!IsMatch(td2, dateFilter))
				{
                    displayRow = false;
                }
            }

            if (pcsFilter.trim() != '' && pcsFilter != 'Issued to' && pcsFilter != 'Issued by') 
			{
                var td2 = tr[i].getElementsByTagName("td")[4];

                if (!IsMatch(td2, pcsFilter))
				{
                    displayRow = false;
                }
            }

            if (typeFilter != 'Type') 
			{
                var td2 = tr[i].getElementsByTagName("td")[5];

                if (!IsMatch(td2, typeFilter))
				{
                    displayRow = false;
                }
            }

            if (statusFilter != 'Status') 
			{
                var td2 = tr[i].getElementsByTagName("td")[6];

                if (!IsMatch(td2, statusFilter))
				{
                    displayRow = false;
                }
            }

            if (displayRow)
			{
                tr[i].style.display = "";
            }
            else
			{
                tr[i].style.display = "none";
            }
        }
      }
