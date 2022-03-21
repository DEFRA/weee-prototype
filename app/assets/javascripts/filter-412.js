
	window.addEventListener('load', function () 
	{
		filterEventBinding();     // event binding to filters on tab2 and tab3
		setupPagination();        // pagination on tab2 and tab3
	})

	// -----------------------------------------------------------------------------
    
	function filterEventBinding()
	{
        document.getElementById("input-search-2").addEventListener('change', (e) => {
            searchTab2();        
        });
        document.getElementById("input-search-3").addEventListener('change', (e) => {
            searchTab3();        
        });
        document.getElementById("input-search-4").addEventListener('change', (e) => {
            searchTab4();        
        });
/*
        document.getElementById("date-filter-from-2").addEventListener('change', (e) => {
            filterDateFromToTab2();
        });

        document.getElementById("date-filter-to-2").addEventListener('change', (e) => {
            filterDateFromToTab2();
        });

        document.getElementById("date-received-filter-from-3").addEventListener('change', (e) => {
            filterDateReceivedTab3();
        });
*/
/*  Year is now working across ALL tabs from same listbox */
        document.getElementById("year-filter").addEventListener('change', (e) => {
            filterYearAllTabs();
        });


        document.getElementById("pcs-filter-2").addEventListener('change', (e) => {
            filterPcsTab2();
        });
        document.getElementById("pcs-filter-3").addEventListener('change', (e) => {
            filterPcsTab3();
        });
        document.getElementById("pcs-filter-4").addEventListener('change', (e) => {
            filterPcsTab4();
        });
		

        document.getElementById("status-filter-3").addEventListener('change', (e) => {
            filterStatusTab3();
        });
        document.getElementById("status-filter-4").addEventListener('change', (e) => {
            filterStatusTab4();
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

    function IsDateWithinRange(td, dateFromFilter, dateToFilter)
	{
		// this will pick-up the date range within the data row column - split received date and inspect if month/year looked for
        if (td) 
		{
			// extract the date range as string
            var txtDate = td.textContent || td.innerText;
			
			// split into 2 dates
			var dateParts = txtDate.split("-");

			// convert them into US format
			var cellDateFrom = FormatYYYYMMDDasNumber(dateParts[0]);
			var cellDateTo = FormatYYYYMMDDasNumber(dateParts[1]);
			
			// convert them into Date
			var minDate = FormatYYYYMMDDasNumber(dateFromFilter);
			var maxDate = FormatYYYYMMDDasNumber(dateToFilter);
			
			// error ?
			var conditionVerified = (( cellDateFrom >= minDate && cellDateFrom <= maxDate ) || ( cellDateTo >= minDate && cellDateTo <= maxDate ));
			
			// check if cell from/to dates are within range of filter from/to dates
			if ( conditionVerified )
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
	
	
	function FormatYYYYMMDDasNumber(someDateString)
	{
		// substitute day and month to get US format date (are we digitally colonised ?)
		console.log('date fed to FormatYYYYMMDDasNumber() => ' + someDateString);
		
		var dateParts = someDateString.split("/");  // expecting UK format date
		
		var day = dateParts[0];
		var month = dateParts[1];
		var year = dateParts[2];
		
		return Number(year + month + day);  // eg: 20220106 for 6 jan 2022, serial date for numerical compare
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

            trs[i].style.display = (displayRow) ? "" : "none";
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

            trs[i].style.display = (displayRow) ? "" : "none";
        }
    }

    function searchTab4() 
	{
        var searchFilter = document.getElementById("input-search-4").value;
        var table = document.getElementById("tbody-results-4");
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

            trs[i].style.display = (displayRow) ? "" : "none";
        }
    }

	function filterDateFromToTab2()
	{
		var dateFromFilter = document.getElementById("date-filter-from-2").value;
		var dateToFilter = document.getElementById("date-filter-to-2").value;
		
        var table = document.getElementById("tbody-results-2");
        var trs = table.getElementsByClassName("govuk-table__row result-row");
		
        for (i = 0; i < trs.length; i++) 
		{
			var displayRow = true;
			
            if (dateFilter != '') 
			{
                var cell = trs[i].getElementsByTagName("td")[4];

                if (!IsDateWithinRange(cell, dateFromFilter, dateToFilter))
				{
                    displayRow = false;
                }
            }
			
            trs[i].style.display = (displayRow) ? "" : "none";
		}
	}

	function filterDateTab3()
	{
		var dateFilter = document.getElementById("date-filter-3").value;
        var table = document.getElementById("tbody-results-3");
        var trs = table.getElementsByClassName("govuk-table__row result-row");
		
        for (i = 0; i < trs.length; i++) 
		{
			var displayRow = true;
			
            if (dateFilter != '') 
			{
                var cell = trs[i].getElementsByTagName("td")[4];

                if (!IsMatch(cell, dateFilter))
				{
                    displayRow = false;
                }
            }
			
            trs[i].style.display = (displayRow) ? "" : "none";
		}
	}

	function filterYearAllTabs()
	{
		var yearFilter = document.getElementById("year-filter").value;
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
		
		// we need to use jQuery or Node to redirect to page with flag setupPagination
		// we can set a year flag to indicate router what to filter
		// res.redirect('/version-2/412_Manage_evidence_note');
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

	function filterPcsTab4()
	{
		var pcsFilter = document.getElementById("pcs-filter-4").value;
        var table = document.getElementById("tbody-results-4");
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
				console.log(cell);
				displayRow = IsMatch(cell, statusFilter);
				console.log(statusFilter);
            }
			
            trs[i].style.display = (displayRow) ? "" : "none";
		}
	}
	
	function filterStatusTab4()
	{
		var statusFilter = document.getElementById("status-filter-4").value;
        var table = document.getElementById("tbody-results-4");
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
			trs[i].style.backgroundColor = "#ccc";
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

	// This is called by the page numbers in table footer
    function pageView(pageNumberAsString) 
	{
		if ( pageNumberAsString === 'p' ) pageNumberAsString = '1';
		if ( pageNumberAsString === 'n' ) pageNumberAsString = '1';
		
		var pageSize = document.getElementById("page-size-keeper").value;
		var pageNumber = Number(pageNumberAsString);
		
		//var pageMin = (pageNumber - 1) * pageSize;
		var pageMin = ((pageNumber - 1) * pageSize) + 1;
		var pageMax = pageMin + (pageSize - 1);
		
        var table = document.getElementById("tbody-results-2");
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

	function setupPagination() 
	{
		var table = document.getElementById("tbody-results-2");
		var trs = table.getElementsByClassName("result-row");
		
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

	}
