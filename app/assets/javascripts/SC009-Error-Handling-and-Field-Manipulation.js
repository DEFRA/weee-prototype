$(document).ready(function () {
    var grandTotal = 0.000;
    var grandTotalb2b = 0.000;
    var beforeValue = 0;
    var fieldIDs = ['large-household-appliances-input-SC009', 'large-household-appliances-input-SC009-b2b', 'small-household-appliances-input-SC009', 'small-household-appliances-input-SC009-b2b', 'it-and-telecomms-input-SC009', 'it-and-telecomms-input-SC009-b2b', 'consumer-equipment-input-SC009', 'consumer-equipment-input-SC009-b2b', 'lighting-equipment-input-SC009', 'lighting-equipment-input-SC009-b2b', 'electrical-and-electronic-input-SC009', 'electrical-and-electronic-input-SC009-b2b', 'toys-leisure-sports-input-SC009', 'toys-leisure-sports-input-SC009-b2b', 'medical-devices-input-SC009', 'medical-devices-input-SC009-b2b', 'monitoring-control-input-SC009', 'monitoring-control-input-SC009-b2b', 'automatic-dispensers-input-SC009', 'automatic-dispensers-input-SC009-b2b', 'display-equipment-input-SC009', 'display-equipment-input-SC009-b2b', 'cooling-appliance-input-SC009', 'cooling-appliance-input-SC009-b2b', 'gas-discharge-led-input-SC009', 'gas-discharge-led-input-SC009-b2b', 'photovolatic-panels-input-SC009', 'photovolatic-panels-input-SC009-b2b'];

    for (var i = 0; i < fieldIDs.length; i++) {
        var text = $('#' + fieldIDs[i]).val();
        if (text == null) {

        } else {
            if (fieldIDs[i].indexOf('b2b') >= 0) {
                var fieldNumberb2b = Number($('#' + fieldIDs[i]).val());
                if (!isNaN(fieldNumberb2b)) {
                    grandTotalb2b += fieldNumberb2b;
                }
            } else {
                var fieldNumber = Number($('#' + fieldIDs[i]).val());
                if (!isNaN(fieldNumber)) {
                    grandTotal += fieldNumber;
                }
            }
        }
    }
    grandTotal = grandTotal.toFixed(3);
    grandTotalb2b = grandTotalb2b.toFixed(3);
    $('#tonneTotal-sc009').html(grandTotal + ' tonnes');
    $('#tonneTotalb2b-sc009').html(grandTotalb2b + ' tonnes');

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
                $('#tonneTotal-sc009').html(grandTotal + ' tonnes');
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
                $('#tonneTotal-sc009').html(grandTotal + ' tonnes');
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
                $('#tonneTotal-sc009').html(grandTotal + ' tonnes');
            }
        }
    }

    function changeFunctionB2B(name) {
        var currentValue = $('#'+name).val();
        var errorString = name.slice(0,-4);
        errorString = errorString + '-error-b2b';
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
                grandTotalb2b = Number(grandTotalb2b);
                grandTotalb2b = grandTotalb2b + currentValue;
                grandTotalb2b = grandTotalb2b.toFixed(3);
                $('#tonneTotalb2b-sc009').html(grandTotalb2b + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                $('#'+name).parent().parent().addClass("govuk-form-group--error");
                $('#'+errorString).text('Please specify a numerical value');
                $('#'+errorString).css('display', 'inline');
                $('#'+name).addClass('error-check');
                beforeValue = Number(beforeValue);
                grandTotalb2b = Number(grandTotalb2b);
                grandTotalb2b = grandTotalb2b - beforeValue;
                grandTotalb2b = grandTotalb2b.toFixed(3);
                $('#tonneTotalb2b-sc009').html(grandTotalb2b + ' tonnes');
            } else {
                $('#'+name).parent().parent().removeClass("govuk-form-group--error");
                $('#'+errorString).text('');
                $('#'+errorString).css('display', 'none');
                $('#'+name).removeClass('error-check');
                currentValue = Number(currentValue);
                grandTotalb2b = Number(grandTotalb2b);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                grandTotalb2b = grandTotalb2b.toFixed(3);
                $('#tonneTotalb2b-sc009').html(grandTotalb2b + ' tonnes');
            }
        }
    }

    $('#large-household-appliances-input-SC009').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#small-household-appliances-input-SC009').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#it-and-telecomms-input-SC009').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#consumer-equipment-input-SC009').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#lighting-equipment-input-SC009').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#electrical-and-electronic-input-SC009').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#toys-leisure-sports-input-SC009').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#medical-devices-input-SC009').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#monitoring-control-input-SC009').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#automatic-dispensers-input-SC009').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#display-equipment-input-SC009').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#cooling-appliance-input-SC009').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#gas-discharge-led-input-SC009').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#photovolatic-panels-input-SC009').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#large-household-appliances-input-SC009-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#small-household-appliances-input-SC009-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#it-and-telecomms-input-SC009-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#consumer-equipment-input-SC009-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#lighting-equipment-input-SC009-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#electrical-and-electronic-input-SC009-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#toys-leisure-sports-input-SC009-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#medical-devices-input-SC009-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#monitoring-control-input-SC009-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#automatic-dispensers-input-SC009-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#display-equipment-input-SC009-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#cooling-appliance-input-SC009-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#gas-discharge-led-input-SC009-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#photovolatic-panels-input-SC009-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });

    $('#wee-received-save').click(function (event) {
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