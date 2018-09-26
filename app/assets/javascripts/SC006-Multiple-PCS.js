$(document).ready(function () {
    var pcsNameArray = [];
    var pcsIDArray = [];
    var pcsComplete = [];

    $('#multiple-pcs-add').click(function() {
        var selectedValue = $('#multipleSchemeSelect option:selected').val();
        var pcsName = selectedValue.split('_')[0];
        var pcsID = selectedValue.split('_')[1];
        pcsNameArray.push(pcsName);
        pcsIDArray.push(pcsID);
        $('#pcs-table > tbody:last-child').append('<tr style="border-bottom: 1px solid #bfc1c3; padding-top: 5px; padding-bottom: 5px;"><td>' + pcsName + '</td><td>' + pcsID + '</td><td>1 Waterloo Avenue</td>><td>Guildford</td><td>United Kingdom</td>><td>GU22 7UY</td></tr>');
        $('#pcs-table').css('display', 'table');
        $('#multiple-pcs-save').css('display', 'block');
    });

    $('#are-you-reusing-weee-submit').click(function() {
        var completedArray = pcsCompleteArray = JSON.parse(localStorage.getItem('pcsCompleteArray'));
        var completedPCS = localStorage.getItem('completedPCS');
        completedArray.push(completedPCS);
        localStorage.setItem('pcsCompleteArray', JSON.stringify(completedArray));
    });

    $('#weee-reused-save').click(function() {
        var completedArray = pcsCompleteArray = JSON.parse(localStorage.getItem('pcsCompleteArray'));
        var completedPCS = localStorage.getItem('completedPCS');
        completedArray.push(completedPCS);
        localStorage.setItem('pcsCompleteArray', JSON.stringify(completedArray));
    });

    $('#multiple-pcs-save').click(function() {
        localStorage.setItem('pcsNameArray', JSON.stringify(pcsNameArray));
        localStorage.setItem('pcsIDArray', JSON.stringify(pcsIDArray));
        localStorage.setItem('pcsCompleteArray', JSON.stringify(pcsComplete))
        /*
        for(var i = 0; i < pcsNameArray.length; i++) {
            $('#pcs-table-summary > tbody:last-child').append('<tr style="border-bottom: 1px solid #bfc1c3; padding-top: 5px; padding-bottom: 5px;"><td>' + pcsNameArray[i] + '</td><td>' + pcsIDArray[i] + '</td><td>1 Waterloo Avenue</td>><td>Guildford</td><td>United Kingdom</td>><td>GU22 7UY</td></tr>');
        }
        */
    });
});