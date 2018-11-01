$(document).ready(function () {
    var grandTotal = 0.000;
    var grandTotalb2b = 0.000;
    var beforeValue = 0;
    var fieldIDs = ['large-household-appliances-input-SC011', 'large-household-appliances-input-SC011-b2b', 'small-household-appliances-input-SC011', 'small-household-appliances-input-SC011-b2b', 'it-and-telecomms-input-SC011', 'it-and-telecomms-input-SC011-b2b', 'consumer-equipment-input-SC011', 'consumer-equipment-input-SC011-b2b', 'lighting-equipment-input-SC011', 'lighting-equipment-input-SC011-b2b', 'electrical-and-electronic-input-SC011', 'electrical-and-electronic-input-SC011-b2b', 'toys-leisure-sports-input-SC011', 'toys-leisure-sports-input-SC011-b2b', 'medical-devices-input-SC011', 'medical-devices-input-SC011-b2b', 'monitoring-control-input-SC011', 'monitoring-control-input-SC011-b2b', 'automatic-dispensers-input-SC011', 'automatic-dispensers-input-SC011-b2b', 'display-equipment-input-SC011', 'display-equipment-input-SC011-b2b', 'cooling-appliance-input-SC011', 'cooling-appliance-input-SC011-b2b', 'gas-discharge-led-input-SC011', 'gas-discharge-led-input-SC011-b2b', 'photovolatic-panels-input-SC011', 'photovolatic-panels-input-SC011-b2b'];

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
    $('#tonneTotal-sc011').html(grandTotal + ' tonnes');
    $('#tonneTotalb2b-sc011').html(grandTotalb2b + ' tonnes');

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
                $('#tonneTotal-sc011').html(grandTotal + ' tonnes');
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
                $('#tonneTotal-sc011').html(grandTotal + ' tonnes');
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
                $('#tonneTotal-sc011').html(grandTotal + ' tonnes');
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
                $('#tonneTotalb2b-sc011').html(grandTotal + ' tonnes');
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
                $('#tonneTotalb2b-sc011').html(grandTotalb2b + ' tonnes');
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
                $('#tonneTotalb2b-sc011').html(grandTotalb2b + ' tonnes');
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
        $('#tonneTotal-sc011').html(grandTotal + ' tonnes');
    }

    function changeFunctionOnTheFlyB2B() {
        grandTotalb2b = 0;
        $('.weee-input-b2b').each(function() {
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
                grandTotalb2b += number;
            }
        });
        grandTotalb2b = grandTotalb2b.toFixed(3);
        $('#tonneTotalb2b-sc011').html(grandTotalb2b + ' tonnes');
    }

    $('#large-household-appliances-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#small-household-appliances-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#it-and-telecomms-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#consumer-equipment-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#lighting-equipment-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#electrical-and-electronic-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#toys-leisure-sports-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#medical-devices-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#monitoring-control-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#automatic-dispensers-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#display-equipment-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#cooling-appliance-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#gas-discharge-led-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#photovolatic-panels-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFly();
    });

    $('#large-household-appliances-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFlyB2B();
    });
    
    $('#small-household-appliances-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFlyB2B();
    });
    
    $('#it-and-telecomms-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFlyB2B();
    });
    
    $('#consumer-equipment-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFlyB2B();
    });
    
    $('#lighting-equipment-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFlyB2B();
    });
    
    $('#electrical-and-electronic-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFlyB2B();
    });
    
    $('#toys-leisure-sports-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFlyB2B();
    });
    
    $('#medical-devices-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFlyB2B();
    });
    
    $('#monitoring-control-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFlyB2B();
    });
    
    $('#automatic-dispensers-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFlyB2B();
    });
    
    $('#display-equipment-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFlyB2B();
    });
    
    $('#cooling-appliance-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFlyB2B();
    });
    
    $('#gas-discharge-led-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFlyB2B();
    });
    
    $('#photovolatic-panels-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).on('input', function () {
        changeFunctionOnTheFlyB2B();
    });

    $('#weee-sent-save').click(function (event) {
        var atfCounter = localStorage.getItem('atfCounter');
        atfCounter++;
        localStorage.setItem('atfCounter', atfCounter);
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