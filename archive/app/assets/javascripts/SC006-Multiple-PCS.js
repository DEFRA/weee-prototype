$(document).ready(function () {
    var pcsNameArray = [];
    var pcsIDArray = [];
    var pcsComplete = [];
    var atfArray = [];
    var atfCompleteArray = [];
    var sentCompleteArray = [];
/* 
    $('#multiple-pcs-add').click(function() {
        var selectedValue = $('#multipleSchemeSelect option:selected').val();
        var pcsName = selectedValue.split('_')[0];
        var pcsID = selectedValue.split('_')[1];
        pcsNameArray.push(pcsName);
        pcsIDArray.push(pcsID);
        $('#pcs-table > tbody:last-child').append('<tr style="border-bottom: 1px solid #bfc1c3; padding-top: 5px; padding-bottom: 5px;"><td>' + pcsName + '</td><td>' + pcsID + '</td><td>1 Waterloo Avenue</td>><td>Guildford</td><td>United Kingdom</td>><td>GU22 7UY</td></tr>');
        $('#pcs-table').css('display', 'table');
        $('#multiple-pcs-save').css('display', 'block');
    }); */

    $('#weee-reused-at-another-site').click(function() {
        var completedArray = JSON.parse(localStorage.getItem('pcsCompleteArray'));
        var completedPCS = localStorage.getItem('completedPCS');
        completedArray.push(completedPCS);
        localStorage.setItem('pcsCompleteArray', JSON.stringify(completedArray));
        var reuseCounter = localStorage.getItem('reuseCounter');
        reuseCounter = 0;
        localStorage.setItem('reuseCounter', reuseCounter);
    });

    $('#are-you-reusing-weee-submit').click(function() {
        var completedArray = JSON.parse(localStorage.getItem('pcsCompleteArray'));
        var completedPCS = localStorage.getItem('completedPCS');
        completedArray.push(completedPCS);
        localStorage.setItem('pcsCompleteArray', JSON.stringify(completedArray));
        var reuseCounter = localStorage.getItem('reuseCounter');
        reuseCounter = 0;
        localStorage.setItem('reuseCounter', reuseCounter);
        localStorage.setItem('atfCompleteArray', JSON.stringify(atfCompleteArray));
    });

    $('#weee-reused-save').click(function() {
        var completedArray = JSON.parse(localStorage.getItem('pcsCompleteArray'));
        var completedPCS = localStorage.getItem('completedPCS');
        completedArray.push(completedPCS);
        localStorage.setItem('pcsCompleteArray', JSON.stringify(completedArray));

        var atfName = localStorage.getItem('completedATF');
        var atfCompletedArray = JSON.parse(localStorage.getItem('atfCompleteArray'));
        atfCompletedArray.push(atfName);
        localStorage.setItem('atfCompleteArray', JSON.stringify(atfCompletedArray));
    });

    $('#weee-sent-save').click(function() {
        var sentName = localStorage.getItem('completedSENT');
        var sentCompletedArray = JSON.parse(localStorage.getItem('sentCompleteArray'));
        sentCompletedArray.push(sentName);
        localStorage.setItem('sentCompleteArray', JSON.stringify(sentCompletedArray));
    });

    $('#are-you-sending-any-whole-wee-to-atf').click(function() {
        var atfCounter = localStorage.getItem('atfCounter');
        atfCounter = 0;
        localStorage.setItem('atfCounter', atfCounter);
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