$(document).ready(function () {
    var beforeValue = 0;
    var bufferValue = 0;
    var grandTotal = 0.000;
    var errorTrigger = false;
    var fieldIDs = ['large-household-appliances-input-SC004', 'small-household-appliances-input-SC004', 'it-and-telecomms-input-SC004', 'consumer-equipment-input-SC004', 'lighting-equipment-input-SC004', 'electrical-and-electronic-input-SC004', 'toys-leisure-sports-input-SC004', 'medical-devices-input-SC004', 'monitoring-control-input-SC004', 'automatic-dispensers-input-SC004', 'display-equipment-input-SC004', 'cooling-appliance-input-SC004', 'gas-discharge-led-input-SC004', 'photovolatic-panels-input-SC004'];

    for(var i = 0; i < fieldIDs.length; i++) {
        var fieldNumber = Number($('#' + fieldIDs[i]).val());
        if(!isNaN(fieldNumber)) {
            grandTotal += fieldNumber;
        }        
    }
    grandTotal = grandTotal.toFixed(3);
    $('#tonneTotal').html(grandTotal + ' tonnes');
    
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
                difference = Number(difference);
                grandTotal = grandTotal + difference;
                grandTotal = grandTotal.toFixed(3);
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    }

    function changeFunctionOnTheFly() {
        grandTotal = 0;
        $('.weee-input').each(function() {
            var name = $(this).attr('id');
            var errorString = name + '-error';
            var elementValue = $(this).val();
            if(isNaN(elementValue)) {
                $('#' + name).parent().parent().addClass("govuk-form-group--error");
                $('#' + name).parent().parent().css('padding-left', '15px');
                $('#' + errorString).text('Please specify a numerical value');
                $('#' + errorString).css('display', 'block');
                $('#'+name).addClass('error-check');
            } else {
                $('#' + name).parent().parent().removeClass("govuk-form-group--error");
                $('#' + name).parent().parent().css('padding-left', '0px');
                $('#' + errorString).text('');
                $('#' + errorString).css('display', 'none');
                $('#'+name).removeClass('error-check');
                var number = Number($(this).val());
                grandTotal += number;
            }
        });
        grandTotal = grandTotal.toFixed(3);
        $('#tonneTotal').html(grandTotal + ' tonnes');
    }

    $('#large-household-appliances-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        bufferValue = 0;
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly($(this).attr('id'));
    });

    $('#small-household-appliances-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        bufferValue = 0;
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#it-and-telecomms-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        bufferValue = 0;
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#consumer-equipment-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#lighting-equipment-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#electrical-and-electronic-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#toys-leisure-sports-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#medical-devices-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();

    });

    $('#monitoring-control-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();

    });

    $('#automatic-dispensers-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();

    });

    $('#display-equipment-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#cooling-appliance-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#gas-discharge-led-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#photovolatic-panels-input-SC004').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
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