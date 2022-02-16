(function () {
    
    var pasteValues = document.querySelectorAll('#paste-values-hidden');

    if (pasteValues && pasteValues[0] && pasteValues[0].value) {
        setTimeout(function () {
            
            var rowsData = pasteValues[0].value.split('\n');
            
            // check the rows and cells
            //var rowsDataCount = rowsData.length - 1;
            if (rowsData.length > 0) {
                var enterDataTable = document.querySelectorAll('.govuk-table')[0];
                // rows
                
                var tableRows = enterDataTable.children[1].children;
                
                if (tableRows && tableRows.length >= 1) {
                    var tableRowColumns = tableRows[0].cells.length;
                    
                    for (var tableRowCount = 0; tableRowCount < tableRows.length - 1; tableRowCount++) {
                        
                        for (var tableColumnCount = 1; tableColumnCount <= tableRowColumns - 1 ; tableColumnCount++) {
                            if (rowsData[tableRowCount]) {
                                var copyValue = rowsData[tableRowCount];
                                                                        
                                if (copyValue) {
                                    
                                    var cellData = copyValue.split('\t');
                                    
                                    var cellValue = cellData[tableColumnCount - 1];
                                    
                                    
                                    floatCellValue = parseFloat(cellValue);
                                    
                                    if (!isNaN(floatCellValue)) {
                                        var input = tableRows[tableRowCount].cells[tableColumnCount].querySelector('input:first-of-type');
                                        //var convertedValue = parseFloat(floatCellValue).toFixed(3);
                                        input.value = floatCellValue;
                                    }
                                    else{
                                        var select = tableRows[tableRowCount].cells[tableColumnCount].querySelector('select:first-of-type');
                                        select.value = cellValue;
                                    }
                                }
                            }
                        }
                    }

                    
                    // totals
                     for (var tableColumnCount = 1; tableColumnCount <= tableRowColumns - 1; tableColumnCount++) {
                        var columnTotal = 0;
                        for (var tableRowCount = 0; tableRowCount <= tableRows.length - 2; tableRowCount++) {
                            var input = tableRows[tableRowCount].cells[tableColumnCount].querySelector('input:first-of-type');
                            if (input){
                                if (input.value && !isNaN(input.value)) {
                                    columnTotal += parseFloat(input.value);
                                }
                            }
                            
                        }
                        
                        var totalControl = tableRows[tableRowCount].cells[tableColumnCount].querySelector('[id*="tonne"]');
                        
                        totalControl.innerText = columnTotal.toFixed(3) + ' tonnes';
                    } 
                }
            }
        });
    }

    var pasteArea = document.querySelectorAll('#copy-data ~ div > textarea');

    if (pasteArea.length > 0) {

        var copyAndPasteLink = document.querySelectorAll('#copy-data');

        if (copyAndPasteLink.length > 0) {
            copyAndPasteLink[0].addEventListener('click', function (event) {
                event.preventDefault();
                if (event.target.nextElementSibling.style.display === 'block') {
                    event.target.nextElementSibling.style.display = 'none';
                } else {
                    event.target.nextElementSibling.style.display = 'block';
                }

            });
        }

        pasteArea[0].addEventListener('paste', function () {
            setTimeout(function () {
                
                var data = pasteArea[0].value;
                if (data) {
                    var rowsData = data.split('\n');
                    // check the rows and cells
                    //var rowsDataCount = rowsData.length - 1;
                    var coloumnCount = 0;
                    
                    if (rowsData.length > 0) {
                        
                        var enterDataTable = document.querySelectorAll('.govuk-table')[0];
                        // rows
                        var tableRows = enterDataTable.children[0].children;
                        
                        if (tableRows && tableRows.length > 1) {
                            var tableRowColumns = tableRows[0].cells.length;
                            for (var tableRowCount = 1; tableRowCount < tableRows.length - 1; tableRowCount++) {

                                for (var tableColumnCount = 1; tableColumnCount <= tableRowColumns - 1; tableColumnCount++) {
                                    var copyValue = rowsData[tableRowCount - 1];
                                    if (copyValue) {
                                        
                                        var cellData = copyValue.split('\t');
                                        var cellValue = cellData[tableColumnCount - 1];
                                        var input = tableRows[tableRowCount].cells[tableColumnCount].querySelector('input:first-of-type');
                                        if (!isNaN(cellValue)) {
                                            var convertedValue = parseFloat(cellValue).toFixed(3);
                                            input.value = convertedValue;

                                        }
                                    }
                                }
                            }

                            // totals
                            console.log(tableRowColumns);
                            //for (var tableColumnCount = 1; tableColumnCount <= tableRowColumns - 1; tableColumnCount++) {
                                //var columnTotal = 0;
                                //for (var tableRowCount = 1; tableRowCount < tableRows.length - 1; tableRowCount++) {
                                    //var input = tableRows[tableRowCount].cells[tableColumnCount].querySelector('input:first-of-type');
                                    //if (!isNaN(input.value)) {
                                      //  columnTotal += parseFloat(input.value);
                                    //}
                                //}
                                //var totalControl = tableRows[tableRowCount].cells[tableColumnCount].querySelector('[id*="tonne"]');
                                //totalControl.innerText = columnTotal.toFixed(3);
                            //}
                        }
                    }
                }


            }, 1000);

        });
    }
})();
