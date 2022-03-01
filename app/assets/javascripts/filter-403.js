


    

    function IsMatch(td, compare)
	{
        if (td) 
		{
            var txtValue = td.textContent || td.innerText;
			var isMatched = txtValue.includes(compare);
			
			return isMatched;
        }
		
        return true;
    }



    function IsDateWithinRange_UNUSED_BUT_KEEP_FOR_FUTURE_EXPANSION(td, compare)
	{
		// this will pick-up the date range within the data row column - split received date and inspect if month/year looked for
        if (td) 
		{
			// extract the date range as string
            var txtDate = td.textContent || td.innerText;
			
			// split into 2 dates
			var dateParts = txtDate.split("-");

			// convert them into US format
			var convertedPart1 = SubstituteDateParts(dateParts[0]);
			var convertedPart2 = SubstituteDateParts(dateParts[1]);
			
			// convert them into Date
			var minDate = new Date(convertedPart1);
			var maxDate = new Date(convertedPart2);
			
			// make it a date
			var currentDate = new Date(ConvertFromHtmlDateParts(compare));
			console.log(compare);
			
			// check if test date is within range
			if ( currentDate > minDate && currentDate < maxDate )
			{
				return true;
			}
			else
			{
				return false;
			}
        }
		
        return true;
    }


    function IsReceivedDateInMonthSelected(td, compare)
	{
		// this will pick-up the date range within the data row column - split received month/year and check it against if month/year picked in widget
        if (td) 
		{
			// extract the date range as string
            var txtDate = td.textContent || td.innerText;
			
			// split into 2 dates
			var dateParts = txtDate.split("-");

			// convert them into US format
			var receivedDateMonthYear = dateParts[0].substring(3);  // should extract 'MM/YYYY' of first date in range
			
			// reverse order to YYYY-MM
			var dateYearMonthParts = receivedDateMonthYear.split("/");
			var dateYearMonth = dateYearMonthParts[1] + '-' + dateYearMonthParts[0];
			
			// check if test date is in month/year selected in widget
			return ( dateYearMonth == compare )
        }
		
        return true;
    }
	

	function ConvertFromHtmlDateParts(someDateString)
	{
		// substitute day and month to get US format date (are we digitally colonised ?)
		
		var dateParts = someDateString.split("/");  // expecting UK format date
		
		var year = dateParts[0];
		var month = dateParts[1];
		var day = dateParts[2];
		
		return month + "/" + day + "/" + year;  // US format
	}


	function SubstituteDateParts(someDateString)
	{
		// substitute day and month to get US format date (are we digitally colonised ?)
		
		var dateParts = someDateString.split("/");  // expecting UK format date
		
		var day = dateParts[0];
		var month = dateParts[1];
		var year = dateParts[2];
		
		return month + "/" + day + "/" + year;  // US format
	}
	
	


	// -----------------------------------------------------------------------------

    function searchTab2() 
	{
        var searchFilter = document.getElementById("input-search-2").value;
        var table = document.getElementById("tbody-results-2");
        var trs = table.getElementsByClassName("govuk-table__row result-row");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < trs.length; i++) 
		{
            var displayRow = true;

            if (searchFilter.trim() != '' && searchFilter != '') 
			{
                var td = trs[i].getElementsByTagName("td")[3];

                if (!IsMatch(td, searchFilter))
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

    function searchTab3() 
	{
        var searchFilter = document.getElementById("input-search-3").value;
        var table = document.getElementById("tbody-results-3");
        var trs = table.getElementsByClassName("govuk-table__row result-row");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < trs.length; i++) 
		{
            var displayRow = true;

            if (searchFilter.trim() != '' && searchFilter != '') 
			{
                var td = trs[i].getElementsByTagName("td")[3];

                if (!IsMatch(td, searchFilter))
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







	function filterYearTab2()
	{
		var yearFilter = document.getElementById("year-filter-2").value;
        var table = document.getElementById("tbody-results-2");
        var trs = table.getElementsByClassName("govuk-table__row result-row");
		
        for (i = 0; i < trs.length; i++) 
		{
			var displayRow = true;
			
            if (yearFilter != '') 
			{
                var cell = trs[i].getElementsByTagName("td")[0];

                if (!IsMatch(cell, yearFilter))
				{
                    displayRow = false;
                }
            }
			
            trs[i].style.display = (displayRow) ? "" : "none";
		}
	}

	function filterYearTab3()
	{
		var yearFilter = document.getElementById("year-filter-3").value;
        var table = document.getElementById("tbody-results-3");
        var trs = table.getElementsByClassName("govuk-table__row result-row");
		
        for (i = 0; i < trs.length; i++) 
		{
			var displayRow = true;
			
            if (yearFilter != '') 
			{
                var cell = trs[i].getElementsByTagName("td")[0];

                if (!IsMatch(cell, yearFilter))
				{
                    displayRow = false;
                }
            }
			
            trs[i].style.display = (displayRow) ? "" : "none";
		}
	}





	function filterPcsTab2()
	{
		var pcsFilter = document.getElementById("pcs-filter-2").value;
        var table = document.getElementById("tbody-results-2");
        var trs = table.getElementsByClassName("govuk-table__row result-row");
		
        for (i = 0; i < trs.length; i++) 
		{
			var displayRow = true;
			
            if (pcsFilter != ' ') 
			{
                var cell = trs[i].getElementsByTagName("td")[4];

                if (!IsMatch(cell, pcsFilter))
				{
                    displayRow = false;
                }
            }
			
            trs[i].style.display = (displayRow) ? "" : "none";
		}
	}

	function filterPcsTab3()
	{
		var pcsFilter = document.getElementById("pcs-filter-3").value;
        var table = document.getElementById("tbody-results-3");
        var trs = table.getElementsByClassName("govuk-table__row result-row");
		
        for (i = 0; i < trs.length; i++) 
		{
			var displayRow = true;
			
            if (pcsFilter != ' ') 
			{
                var cell = trs[i].getElementsByTagName("td")[5];

                if (!IsMatch(cell, pcsFilter))
				{
                    displayRow = false;
                }
            }
			
            trs[i].style.display = (displayRow) ? "" : "none";
		}
	}




	function filterStatusTab2()
	{
		var statusFilter = document.getElementById("status-filter-2").value;
        var table = document.getElementById("tbody-results-2");
        var trs = table.getElementsByClassName("govuk-table__row result-row");
		
        for (i = 0; i < trs.length; i++) 
		{
			var displayRow = true;
			
            if (statusFilter != '0') 
			{
                var cell = trs[i].getElementsByTagName("td")[6];
				displayRow = IsMatch(cell, statusFilter);
            }
			
            trs[i].style.display = (displayRow) ? "" : "none";
		}
	}
	
	function filterStatusTab3()
	{
		var statusFilter = document.getElementById("status-filter-3").value;
        var table = document.getElementById("tbody-results-3");
        var trs = table.getElementsByClassName("govuk-table__row result-row");
		
        for (i = 0; i < trs.length; i++) 
		{
			var displayRow = true;
			
            if (statusFilter != '0') 
			{
                var cell = trs[i].getElementsByTagName("td")[7];
				displayRow = IsMatch(cell, statusFilter);
            }
			
            trs[i].style.display = (displayRow) ? "" : "none";
		}
	}





	function filterTypeTab2()
	{
		var typeFilter = document.getElementById("type-filter-2").value;
        var table = document.getElementById("tbody-results-2");
        var trs = table.getElementsByClassName("govuk-table__row result-row");
		
        for (i = 0; i < trs.length; i++) 
		{
			var displayRow = true;
			
            if (typeFilter != '0') 
			{
                var cell = trs[i].getElementsByTagName("td")[5];

                if (!IsMatch(cell, typeFilter))
				{
                    displayRow = false;
                }
            }
			
            trs[i].style.display = (displayRow) ? "" : "none";
		}
	}

	function filterTypeTab3()
	{
		var typeFilter = document.getElementById("type-filter-3").value;
        var table = document.getElementById("tbody-results-3");
        var trs = table.getElementsByClassName("govuk-table__row result-row");
		
        for (i = 0; i < trs.length; i++) 
		{
			var displayRow = true;
			
            if (typeFilter != '0') 
			{
                var cell = trs[i].getElementsByTagName("td")[6];

                if (!IsMatch(cell, typeFilter))
				{
                    displayRow = false;
                }
            }
			
            trs[i].style.display = (displayRow) ? "" : "none";
		}
	}


	function filterEventBinding()
	{
        document.getElementById("input-search-2").addEventListener('change', (e) => {
            searchTab2();        
        });
        document.getElementById("input-search-3").addEventListener('change', (e) => {
            searchTab3();        
        });

/*
        document.getElementById("date-from-filter-3").addEventListener('change', (e) => {
            filterDateFromTab3();
        });
        document.getElementById("date-to-filter-3").addEventListener('change', (e) => {
            filterDateToTab3();
        });


        document.getElementById("year-filter-2").addEventListener('change', (e) => {
            filterYearTab2();
        });
        document.getElementById("year-filter-3").addEventListener('change', (e) => {
            filterYearTab3();
        });
*/

        document.getElementById("pcs-filter-2").addEventListener('change', (e) => {
            filterPcsTab2();
        });
        document.getElementById("pcs-filter-3").addEventListener('change', (e) => {
            filterPcsTab3();
        });
		

        document.getElementById("status-filter-2").addEventListener('change', (e) => {
            filterStatusTab2();
        });
        document.getElementById("status-filter-3").addEventListener('change', (e) => {
            filterStatusTab3();
        });


        document.getElementById("type-filter-2").addEventListener('change', (e) => {
            filterTypeTab2();
        });
        document.getElementById("type-filter-3").addEventListener('change', (e) => {
            filterTypeTab3();
        });

        document.getElementById("category-filter-2").addEventListener('change', (e) => {
            filter();
        });
        document.getElementById("category-filter-3").addEventListener('change', (e) => {
            filter();
        });
        document.getElementById("category-filter-4").addEventListener('change', (e) => {
            filter();
        });
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



	function numberWithCommas(x)
	{
		x = x.toString();
		var pattern = /(-?\d+)(\d{3})/;
		while (pattern.test(x))
			x = x.replace(pattern, "$1,$2");
		return x;
	}

	window.addEventListener('load', function () 
	{
		
		// event binding to filters
		filterEventBinding();


		
		
		/*
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
		*/
		
		
		// paginator
		
		/*
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
		*/
	})



