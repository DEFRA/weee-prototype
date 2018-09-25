$(document).ready(function () {
    var beforeValue = 0;
    var grandTotal = 0.000;
    var fieldIDs = ['large-household-appliances-input-SC004c', 'large-household-appliances-input-SC004c-b2b', 'small-household-appliances-input-SC004c', 'small-household-appliances-input-SC004c-b2b', 'it-and-telecomms-input-SC004c', 'it-and-telecomms-input-SC004c-b2b', 'consumer-equipment-input-SC004c', 'consumer-equipment-input-SC004c-b2b', 'lighting-equipment-input-SC004c', 'lighting-equipment-input-SC004c-b2b', 'electrical-and-electronic-input-SC004c', 'electrical-and-electronic-input-SC004c-b2b', 'toys-leisure-sports-input-SC004c', 'toys-leisure-sports-input-SC004c-b2b', 'medical-devices-input-SC004c', 'medical-devices-input-SC004c-b2b', 'monitoring-control-input-SC004c', 'monitoring-control-input-SC004c-b2b', 'automatic-dispensers-input-SC004c', 'automatic-dispensers-input-SC004c-b2b', 'display-equipment-input-SC004c', 'display-equipment-input-SC004c-b2b', 'cooling-appliance-input-SC004c', 'cooling-appliance-input-SC004c-b2b', 'gas-discharge-led-input-SC004c', 'gas-discharge-led-input-SC004c-b2b', 'photovolatic-panels-input-SC004c', 'photovolatic-panels-input-SC004c-b2b'];

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
                grandTotal = grandTotal + currentValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                $('#'+name).parent().parent().addClass("govuk-form-group--error");
                $('#'+errorString).text('Please specify a numerical value');
                $('#'+errorString).css('display', 'inline');
                $('#'+name).addClass('error-check');
                beforeValue = Number(beforeValue);
                grandTotal = grandTotal - beforeValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                $('#'+name).parent().parent().removeClass("govuk-form-group--error");
                $('#'+errorString).text('');
                $('#'+errorString).css('display', 'none');
                $('#'+name).removeClass('error-check');
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                $('#tonneTotal').html(grandTotal + ' tonnes');
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