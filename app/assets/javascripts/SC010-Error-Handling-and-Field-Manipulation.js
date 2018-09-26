$(document).ready(function () {
    var grandTotal = 0.000;
    var grandTotalb2b = 0.000;
    var beforeValue = 0;
    var fieldIDs = ['large-household-appliances-input-SC010', 'large-household-appliances-input-SC010-b2b', 'small-household-appliances-input-SC010', 'small-household-appliances-input-SC010-b2b', 'it-and-telecomms-input-SC010', 'it-and-telecomms-input-SC010-b2b', 'consumer-equipment-input-SC010', 'consumer-equipment-input-SC010-b2b', 'lighting-equipment-input-SC010', 'lighting-equipment-input-SC010-b2b', 'electrical-and-electronic-input-SC010', 'electrical-and-electronic-input-SC010-b2b', 'toys-leisure-sports-input-SC010', 'toys-leisure-sports-input-SC010-b2b', 'medical-devices-input-SC010', 'medical-devices-input-SC010-b2b', 'monitoring-control-input-SC010', 'monitoring-control-input-SC010-b2b', 'automatic-dispensers-input-SC010', 'automatic-dispensers-input-SC010-b2b', 'display-equipment-input-SC010', 'display-equipment-input-SC010-b2b', 'cooling-appliance-input-SC010', 'cooling-appliance-input-SC010-b2b', 'gas-discharge-led-input-SC010', 'gas-discharge-led-input-SC010-b2b', 'photovolatic-panels-input-SC010', 'photovolatic-panels-input-SC010-b2b'];


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
                grandTotal = grandTotal + currentValue;
                $('#tonneTotalb2b').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                $('#'+name).parent().parent().addClass("govuk-form-group--error");
                $('#'+errorString).text('Please specify a numerical value');
                $('#'+errorString).css('display', 'inline');
                $('#'+name).addClass('error-check');
                beforeValue = Number(beforeValue);
                grandTotalb2b = grandTotalb2b - beforeValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            } else {
                $('#'+name).parent().parent().removeClass("govuk-form-group--error");
                $('#'+errorString).text('');
                $('#'+errorString).css('display', 'none');
                $('#'+name).removeClass('error-check');
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        }
    }

    $('#large-household-appliances-input-SC010').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#small-household-appliances-input-SC010').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#it-and-telecomms-input-SC010').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#consumer-equipment-input-SC010').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#lighting-equipment-input-SC010').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#electrical-and-electronic-input-SC010').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#toys-leisure-sports-input-SC010').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#medical-devices-input-SC010').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#monitoring-control-input-SC010').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#automatic-dispensers-input-SC010').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#display-equipment-input-SC010').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#cooling-appliance-input-SC010').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#gas-discharge-led-input-SC010').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#photovolatic-panels-input-SC010').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunction($(this).attr('id'));
    });

    $('#large-household-appliances-input-SC010-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#small-household-appliances-input-SC010-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#it-and-telecomms-input-SC010-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#consumer-equipment-input-SC010-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#lighting-equipment-input-SC010-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#electrical-and-electronic-input-SC010-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#toys-leisure-sports-input-SC010-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#medical-devices-input-SC010-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#monitoring-control-input-SC010-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#automatic-dispensers-input-SC010-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#display-equipment-input-SC010-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#cooling-appliance-input-SC010-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#gas-discharge-led-input-SC010-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });
    
    $('#photovolatic-panels-input-SC010-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        changeFunctionB2B($(this).attr('id'));
    });

    $('#weee-reused-save').click(function (event) {
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