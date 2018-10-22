$(document).ready(function () {
    var beforeValue = 0;
    var grandTotal = 0.000;
    var fieldIDs = ['large-household-appliances-input-SC004c-DCF', 'large-household-appliances-input-SC004c-DCF-b2b', 'small-household-appliances-input-SC004c-DCF', 'small-household-appliances-input-SC004c-DCF-b2b', 'it-and-telecomms-input-SC004c-DCF', 'it-and-telecomms-input-SC004c-DCF-b2b', 'consumer-equipment-input-SC004c-DCF', 'consumer-equipment-input-SC004c-DCF-b2b', 'lighting-equipment-input-SC004c-DCF', 'lighting-equipment-input-SC004c-DCF-b2b', 'electrical-and-electronic-input-SC004c-DCF', 'electrical-and-electronic-input-SC004c-DCF-b2b', 'toys-leisure-sports-input-SC004c-DCF', 'toys-leisure-sports-input-SC004c-DCF-b2b', 'medical-devices-input-SC004c-DCF', 'medical-devices-input-SC004c-DCF-b2b', 'monitoring-control-input-SC004c-DCF', 'monitoring-control-input-SC004c-DCF-b2b', 'automatic-dispensers-input-SC004c-DCF', 'automatic-dispensers-input-SC004c-DCF-b2b', 'display-equipment-input-SC004c-DCF', 'display-equipment-input-SC004c-DCF-b2b', 'cooling-appliance-input-SC004c-DCF', 'cooling-appliance-input-SC004c-DCF-b2b', 'gas-discharge-led-input-SC004c-DCF', 'gas-discharge-led-input-SC004c-DCF-b2b', 'photovolatic-panels-input-SC004c-DCF', 'photovolatic-panels-input-SC004c-DCF-b2b'];
    
    for(var i = 0; i < fieldIDs.length; i++) {
        var fieldNumber = Number($('#' + fieldIDs[i]).val());
        if(!isNaN(fieldNumber)) {
            grandTotal += fieldNumber;
        }        
    }
    grandTotal = grandTotal.toFixed(3);
    $('#tonneTotal-dcf').html(grandTotal + ' tonnes');
    function changeFunction(name) {
        var currentValue = $('#'+name).val();
        var errorString = name + '-error';
        if (isNaN(beforeValue)) {
            $('#'+name).parent().parent().addClass("govuk-form-group--error");
            $('#'+errorString).text('Please specify a numerical value');
            $('#'+errorString).css('display', 'inline');
            $('#'+name).addClass('error-check');
            if (!isNaN(currentValue)) {
                $('#'+name).parent().parent().removeClass("govuk-form-group--error");
                $('#'+errorString).css('display', 'none');
                $('#'+errorString).text('');
                $('#'+name).removeClass('error-check');
                currentValue = Number(currentValue);
                grandTotal = Number(grandTotal);
                grandTotal = grandTotal + currentValue;   
                grandTotal = grandTotal.toFixed(3);
                $('#tonneTotal-dcf').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                $('#'+name).parent().parent().addClass("govuk-form-group--error");
                $('#'+errorString).text('Please specify a numerical value');
                $('#'+errorString).css('display', 'inline');
                $('#'+name).addClass('error-check');
                beforeValue = Number(beforeValue);
                grandTotal = Number(grandTotal);
                grandTotal = grandTotal - beforeValue;
                grandTotal = grandTotal.toFixed(3);
                $('#tonneTotal-dcf').html(grandTotal + ' tonnes');
            } else {
                $('#'+name).parent().parent().removeClass("govuk-form-group--error");
                $('#'+errorString).text('');
                $('#'+errorString).css('display', 'none');
                $('#'+name).removeClass('error-check');
                currentValue = Number(currentValue);
                grandTotal = Number(grandTotal);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                grandTotal = grandTotal.toFixed(3);
                $('#tonneTotal-dcf').html(grandTotal + ' tonnes');
            }
        }
    }

    $('#large-household-appliances-input-SC004c-DCF').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#small-household-appliances-input-SC004c-DCF').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#it-and-telecomms-input-SC004c-DCF').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#consumer-equipment-input-SC004c-DCF').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#lighting-equipment-input-SC004c-DCF').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#electrical-and-electronic-input-SC004c-DCF').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#toys-leisure-sports-input-SC004c-DCF').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#medical-devices-input-SC004c-DCF').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));

    });

    $('#monitoring-control-input-SC004c-DCF').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));

    });

    $('#automatic-dispensers-input-SC004c-DCF').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));

    });

    $('#display-equipment-input-SC004c-DCF').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));

    });

    $('#cooling-appliance-input-SC004c-DCF').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));

    });

    $('#gas-discharge-led-input-SC004c-DCF').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));

    });

    $('#photovolatic-panels-input-SC004c-DCF').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));

    });

    $('#dcf-save').click(function (event) {
        var errorTrigger = false;

        for(var i = 0; i < fieldIDs.length; i++) {
            if($('#' + fieldIDs[i]).hasClass('error-check')) {
                errorTrigger = true;
            }
        }
        
        if (errorTrigger) {
            $('#errorSummary').css('display', 'block');
            var position = $('#errorSummary').offset().top;

            $("body, html").animate({
                scrollTop: position
            }, 500, 'linear');

            event.preventDefault();
        } else {
            $('#errorSummary').css('display', 'none');
        }
    });
});