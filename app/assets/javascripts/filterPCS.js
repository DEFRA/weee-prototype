
    var table = document.getElementById("evidence-table");

    if (table) {
        document.getElementById("pcs-filter").addEventListener('change', (e) => {
            filter();
        });
    
        document.getElementById("date-filter").addEventListener('change', (e) => {
            filter();
        });
    
    
        document.getElementById("status-filter").addEventListener('change', (e) => {
            filter();
        });
    
        document.getElementById("type-filter").addEventListener('change', (e) => {
            filter();
        });
    
        document.getElementById("year-filter").addEventListener('change', (e) => {
            filter();        
        });

        document.getElementById("input-search").addEventListener('change', (e) => {
            filter();        
        });
        
    }
    

    function IsMatch(td, compare){
        if (td) {
            txtValue = td.textContent || td.innerText;
            console.log('content ' + txtValue + ' compare ' + compare);
            if (txtValue.indexOf(compare) === -1) {
                return false;
            }
        }
        return true;
    }

    function search() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        var searchFilter = document.getElementById("input-search").value;
        var table = document.getElementById("evidence-table");
        var tr = table.getElementsByClassName("govuk-table__row result-row");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            var displayRow = true;

            if (searchFilter.trim() != '' && searchFilter != '') {
                var td = tr[i].getElementsByTagName("td")[0];
                
                if (!IsMatch(td, searchFilter)){
                    displayRow = false;
                }
            }


            if (displayRow){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
            //tr[i].style.display = "";
            //tr[i].style.display = "none";
        }
      }

    function filter() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        var pcsFilter = document.getElementById("pcs-filter").value;
        var yearFilter = document.getElementById("year-filter").value;
        var typeFilter = document.getElementById("type-filter").value;
        var statusFilter = document.getElementById("status-filter").value;
        var dateFilter = document.getElementById("date-filter").value;
		// change format to dd/MM/yyyy
		const parsedDate = new Date(dateFilter);
		const thisDate = String(parsedDate.getDate()).padStart(2, '0') 
		                 + '/' 
						 + (String(parsedDate.getMonth() + 1)).padStart(2, '0') 
		                 + '/' 
						 + parsedDate.getFullYear();
		dateFilter = thisDate;
		console.log('formatted as: ' + dateFilter);
		
        var table = document.getElementById("evidence-table");
        var tr = table.getElementsByClassName("govuk-table__row result-row");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
            var displayRow = true;

        
            if (yearFilter != 0) {
                var td = tr[i].getElementsByTagName("td")[1];
                
                if (!IsMatch(td, yearFilter)){
                    displayRow = false;
                }
            }

            if (dateFilter != '') {
                var td = tr[i].getElementsByTagName("td")[1];
                
                if (!IsMatch(td, dateFilter)){
                    displayRow = false;
                }
            }

            if (pcsFilter.trim() != '' && pcsFilter != 'Issued by') {
                var td = tr[i].getElementsByTagName("td")[2];
                
                if (!IsMatch(td, pcsFilter)){
                    displayRow = false;
                }
            }

            if (typeFilter.trim() != 'Type') {
                var td = tr[i].getElementsByTagName("td")[3];
                
                if (!IsMatch(td, typeFilter)){
                    displayRow = false;
                }
            }

            if (statusFilter != 'Status') {
                var td = tr[i].getElementsByTagName("td")[4];

                if (!IsMatch(td, statusFilter)){
                    displayRow = false;
                }
            }

            if (displayRow){
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
            //tr[i].style.display = "";
            //tr[i].style.display = "none";
        }
      }
