
	function numberWithCommas(x)
	{
		x = x.toString();
		var pattern = /(-?\d+)(\d{3})/;
		while (pattern.test(x))
			x = x.replace(pattern, "$1,$2");
		return x;
	}

    var table = document.getElementById("tbody-results");

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

        document.getElementById("issuer-filter").addEventListener('change', (e) => {
            filter();
        });
		
        document.getElementById("status-filter").addEventListener('change', (e) => {
            filter();
        });

        document.getElementById("type-filter").addEventListener('change', (e) => {
            filter();
        });
/*
        document.getElementById("category-filter").addEventListener('change', (e) => {
            filter();
        });
*/
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
        var table = document.getElementById("tbody-results");
        var trs = table.getElementsByClassName("govuk-table__row result-row");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < trs.length; i++) 
		{
            var displayRow = true;

            if (searchFilter.trim() != '' && searchFilter != '') 
			{
                var td2 = trs[i].getElementsByTagName("td")[0];

                if (!IsMatch(td2, searchFilter))
				{
                    displayRow = false;
                }
            }

            if (displayRow)
			{
                trs[i].style.display = "";
            }
            else
			{
                trs[i].style.display = "none";
            }
        }
    }

    function filter() 
	{
        var table = document.getElementById("tbody-results");
        var trs = table.getElementsByClassName("govuk-table__row result-row");

        var yearFilter = document.getElementById("year-filter").value;
        var issuerFilter = document.getElementById("issuer-filter").value;
        var typeFilter = document.getElementById("type-filter").value;
        var statusFilter = document.getElementById("status-filter").value;
		//var categoryFilter = document.getElementById("category-filter").value;

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
        for (i = 0; i < trs.length; i++) 
		{
            var displayRow = true;
			
            if (yearFilter != 'Compliance year') 
			{
                var cell = trs[i].getElementsByTagName("td")[1];

                if (!IsMatch(cell, yearFilter))
				{
                    displayRow = false;
                }
            }

            if (dateFilter.trim() != '' && dateFilter != '') 
			{
                var cell = trs[i].getElementsByTagName("td")[1];

                if (!IsMatch(cell, dateFilter))
				{
                    displayRow = false;
                }
            }

            if (issuerFilter.trim() != '' && issuerFilter != 'Issued to' && issuerFilter != 'Issued by') 
			{
                var cell = trs[i].getElementsByTagName("td")[2];

                if (!IsMatch(cell, issuerFilter))
				{
                    displayRow = false;
                }
            }

            if (typeFilter != 'Type') 
			{
                var cell = trs[i].getElementsByTagName("td")[3];

                if (!IsMatch(cell, typeFilter))
				{
                    displayRow = false;
                }
            }

            if (statusFilter != 'Status') 
			{
                var cell = trs[i].getElementsByTagName("td")[4];

                if (!IsMatch(cell, statusFilter))
				{
                    displayRow = false;
                }
            }
/*
            if (categoryFilter != '0'){
                var cell = trs[i].getElementsByTagName("td")[8];

                if (cell) 
                {
                    var txtValue = cell.textContent || cell.innerText;
                    
                    var filters = txtValue.split(',');
                    if (!filters.includes(categoryFilter)){
                        displayRow = false;
                    }
                }
            }
*/

            if (displayRow)
			{
                trs[i].style.display = "";
            }
            else
			{
                trs[i].style.display = "none";
            }
        }
    }


    function pageView(pageNumberAsString) 
	{
		if ( pageNumberAsString === 'p' ) pageNumberAsString = '1';
		if ( pageNumberAsString === 'n' ) pageNumberAsString = '1';
		
		var pageSize = document.getElementById("page-size-keeper").value;
		var pageNumber = Number(pageNumberAsString);
		
		var pageMin = (pageNumber - 1) * pageSize;
		var pageMax = pageMin + (pageSize - 1);
		
        var table = document.getElementById("tbody-results");
        var trs = table.getElementsByClassName("govuk-table__row result-row");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < trs.length; i++) 
		{
			if ( i >= pageMin && i <= pageMax)
			{
                trs[i].style.display = "";
            }
            else
			{
                trs[i].style.display = "none";
            }
        }
    }

window.addEventListener('load', function () 
{
	var table = document.getElementById("tbody-summary");
	var trs = table.getElementsByClassName("summary-row");
	
	var total1 = 0;
	var total2 = 0;

	for (i = 0; i < trs.length; i++) 
	{
		var td1 = trs[i].getElementsByTagName("td")[1];
		total1 += parseFloat(td1.innerText);
		
		var td2 = trs[i].getElementsByTagName("td")[2];
		total2 += parseFloat(td2.innerText);
	}
	
	document.getElementById("total-1").innerText = numberWithCommas(total1);
	document.getElementById("total-2").innerText = numberWithCommas(total2);
	
	
	// paginator
	
	document.getElementById("page-size-filter").addEventListener('change', (e) => 
	{
		document.getElementById("page-size-keeper").value = document.getElementById("page-size-filter").value;
		
		var pageSize = document.getElementById("page-size-keeper").value;
		
		if ( pageSize == 10 )
		{
			document.getElementById("page-browser-p").style.display = '';
			document.getElementById("page-browser-1").style.display = '';
			document.getElementById("page-browser-2").style.display = '';
			document.getElementById("page-browser-3").style.display = '';
			document.getElementById("page-browser-4").style.display = '';
			document.getElementById("page-browser-5").style.display = '';
			document.getElementById("page-browser-6").style.display = '';
			document.getElementById("page-browser-n").style.display = '';
		}
		
		if ( pageSize == 25 )
		{
			document.getElementById("page-browser-p").style.display = '';
			document.getElementById("page-browser-1").style.display = '';
			document.getElementById("page-browser-2").style.display = '';
			document.getElementById("page-browser-3").style.display = '';
			document.getElementById("page-browser-4").style.display = 'none';
			document.getElementById("page-browser-5").style.display = 'none';
			document.getElementById("page-browser-6").style.display = 'none';
			document.getElementById("page-browser-n").style.display = '';
		}
		
		if ( pageSize == 50 )
		{
			document.getElementById("page-browser-p").style.display = '';
			document.getElementById("page-browser-1").style.display = '';
			document.getElementById("page-browser-2").style.display = '';
			document.getElementById("page-browser-3").style.display = 'none';
			document.getElementById("page-browser-4").style.display = 'none';
			document.getElementById("page-browser-5").style.display = 'none';
			document.getElementById("page-browser-6").style.display = 'none';
			document.getElementById("page-browser-n").style.display = '';
		}
		
	});

	document.getElementById("page-browser-p").addEventListener('click', (e) => 
	{
		pageView('p');        
	});

	document.getElementById("page-browser-1").addEventListener('click', (e) => 
	{
		pageView('1');        
	});
	document.getElementById("page-browser-2").addEventListener('click', (e) => 
	{
		pageView('2');        
	});

	document.getElementById("page-browser-3").addEventListener('click', (e) => 
	{
		pageView('3');        
	});

	document.getElementById("page-browser-4").addEventListener('click', (e) => 
	{
		pageView('4');        
	});

	document.getElementById("page-browser-5").addEventListener('click', (e) => 
	{
		pageView('5');        
	});

	document.getElementById("page-browser-6").addEventListener('click', (e) => 
	{
		pageView('6');        
	});

	document.getElementById("page-browser-n").addEventListener('click', (e) => 
	{
		pageView('n');        
	});
})

