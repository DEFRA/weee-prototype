
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

        document.getElementById("category-filter").addEventListener('change', (e) => {
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
                var td1 = tr[i].getElementsByTagName("td")[0];

                if (!IsMatch(td1, searchFilter)){
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
		var categoryFilter = document.getElementById("category-filter").value;

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
                var td = tr[i].getElementsByTagName("td")[1];

                if (!IsMatch(td, yearFilter))
				{
                    displayRow = false;
                }
            }

            if (dateFilter.trim() != '' && dateFilter != '') 
			{
                var td = tr[i].getElementsByTagName("td")[1];

                if (!IsMatch(td, dateFilter))
				{
                    displayRow = false;
                }
            }

            if (pcsFilter.trim() != '' && pcsFilter != 'Issued to' && pcsFilter != 'Issued by') 
			{
                var td = tr[i].getElementsByTagName("td")[2];

                if (!IsMatch(td, pcsFilter))
				{
                    displayRow = false;
                }
            }

            if (typeFilter != 'Type') 
			{
                var td = tr[i].getElementsByTagName("td")[3];

                if (!IsMatch(td, typeFilter))
				{
                    displayRow = false;
                }
            }

            if (statusFilter != 'Status') 
			{
                var td = tr[i].getElementsByTagName("td")[4];

                if (!IsMatch(td, statusFilter))
				{
                    displayRow = false;
                }
            }

            if (categoryFilter != '0'){
                var td = tr[i].getElementsByTagName("td")[8];

                if (td) 
                {
                    var txtValue = td.textContent || td.innerText;
                    
                    var filters = txtValue.split(',');
                    if (!filters.includes(categoryFilter)){
                        displayRow = false;
                    }
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
