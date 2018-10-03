$(document).ready(function () {
    var beforeValue = 0;
    var grandTotal = 0.000;
    var errorTrigger = false;
    var fieldIDs = ['large-household-appliances-input-SC004', 'large-household-appliances-input-SC004-b2b', 'small-household-appliances-input-SC004', 'small-household-appliances-input-SC004-b2b', 'it-and-telecomms-input-SC004', 'it-and-telecomms-input-SC004-b2b', 'consumer-equipment-input-SC004', 'consumer-equipment-input-SC004-b2b', 'lighting-equipment-input-SC004', 'lighting-equipment-input-SC004-b2b', 'electrical-and-electronic-input-SC004', 'electrical-and-electronic-input-SC004-b2b', 'toys-leisure-sports-input-SC004', 'toys-leisure-sports-input-SC004-b2b', 'medical-devices-input-SC004', 'medical-devices-input-SC004-b2b', 'monitoring-control-input-SC004', 'monitoring-control-input-SC004-b2b', 'automatic-dispensers-input-SC004', 'automatic-dispensers-input-SC004-b2b', 'display-equipment-input-SC004', 'display-equipment-input-SC004-b2b', 'cooling-appliance-input-SC004', 'cooling-appliance-input-SC004-b2b', 'gas-discharge-led-input-SC004', 'gas-discharge-led-input-SC004-b2b', 'photovolatic-panels-input-SC004', 'photovolatic-panels-input-SC004-b2b'];

    function changeFunction(name) {
        var currentValue = $('#' + name).val();
        var errorString = name + '-error';
        if (isNaN(beforeValue)) {
            $('#' + name).parent().parent().addClass("govuk-form-group--error");
            $('#' + errorString).text('Please specify a numerical value');
            $('#' + errorString).css('display', 'inline');
            $('#'+name).addClass('error-check');
            if (!isNaN(currentValue)) {
                $('#' + name).parent().parent().removeClass("govuk-form-group--error");
                $('#' + errorString).css('display', 'none');
                $('#' + errorString).text('');
                $('#'+name).removeClass('error-check');
                currentValue = Number(currentValue);
                grandTotal = Number(grandTotal);
                grandTotal = grandTotal + currentValue;   
                grandTotal = grandTotal.toFixed(3);
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                $('#' + name).parent().parent().addClass("govuk-form-group--error");
                $('#' + errorString).text('Please specify a numerical value');
                $('#' + errorString).css('display', 'inline');
                $('#'+name).addClass('error-check');
                beforeValue = Number(beforeValue);
                grandTotal = Number(grandTotal);
                grandTotal = grandTotal - beforeValue;
                grandTotal = grandTotal.toFixed(3);
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                $('#' + name).parent().parent().removeClass("govuk-form-group--error");
                $('#' + errorString).text('');
                $('#' + errorString).css('display', 'none');
                $('#'+name).removeClass('error-check');
                currentValue = Number(currentValue);
                grandTotal = Number(grandTotal);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                grandTotal = grandTotal.toFixed(3);
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    }

    $('#large-household-appliances-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#small-household-appliances-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#it-and-telecomms-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#consumer-equipment-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#lighting-equipment-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#electrical-and-electronic-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#toys-leisure-sports-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#medical-devices-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));

    });

    $('#monitoring-control-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));

    });

    $('#automatic-dispensers-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));

    });

    $('#display-equipment-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));

    });

    $('#cooling-appliance-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));

    });

    $('#gas-discharge-led-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));

    });

    $('#photovolatic-panels-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));

    });

    $('#non-obligated-save').click(function (event) {
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