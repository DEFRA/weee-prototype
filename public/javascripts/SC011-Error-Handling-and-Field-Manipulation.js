$(document).ready(function () {
    var grandTotal = 0.000;
    var grandTotalb2b = 0.000;
    var beforeValue = 0;

    $('#large-household-appliances-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotal = grandTotal + currentValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotal = grandTotal - beforeValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    });

    $('#small-household-appliances-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotal = grandTotal + currentValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotal = grandTotal - beforeValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    });

    $('#it-and-telecomms-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotal = grandTotal + currentValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotal = grandTotal - beforeValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    });

    $('#consumer-equipment-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotal = grandTotal + currentValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotal = grandTotal - beforeValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    });

    $('#lighting-equipment-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotal = grandTotal + currentValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotal = grandTotal - beforeValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    });

    $('#electrical-and-electronic-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotal = grandTotal + currentValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotal = grandTotal - beforeValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    });

    $('#toys-leisure-sports-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotal = grandTotal + currentValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotal = grandTotal - beforeValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    });

    $('#medical-devices-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotal = grandTotal + currentValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotal = grandTotal - beforeValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    });

    $('#monitoring-control-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotal = grandTotal + currentValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotal = grandTotal - beforeValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    });

    $('#automatic-dispensers-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotal = grandTotal + currentValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotal = grandTotal - beforeValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    });

    $('#display-equipment-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotal = grandTotal + currentValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotal = grandTotal - beforeValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    });

    $('#cooling-appliance-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotal = grandTotal + currentValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotal = grandTotal - beforeValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    });

    $('#gas-discharge-led-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotal = grandTotal + currentValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotal = grandTotal - beforeValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    });

    $('#photovolatic-panels-input-SC011').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotal = grandTotal + currentValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotal = grandTotal - beforeValue;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotal = grandTotal + difference;
                $('#tonneTotal').html(grandTotal + ' tonnes');
            }
        }
    });

    $('#large-household-appliances-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotalb2b = grandTotalb2b + currentValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotalb2b = grandTotalb2b - beforeValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        }
    });
    
    $('#small-household-appliances-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotalb2b = grandTotalb2b + currentValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotalb2b = grandTotalb2b - beforeValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        }
    });
    
    $('#it-and-telecomms-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotalb2b = grandTotalb2b + currentValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotalb2b = grandTotalb2b - beforeValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        }
    });
    
    $('#consumer-equipment-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotalb2b = grandTotalb2b + currentValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotalb2b = grandTotalb2b - beforeValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        }
    });
    
    $('#lighting-equipment-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotalb2b = grandTotalb2b + currentValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotalb2b = grandTotalb2b - beforeValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        }
    });
    
    $('#electrical-and-electronic-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotalb2b = grandTotalb2b + currentValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotalb2b = grandTotalb2b - beforeValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        }
    });
    
    $('#toys-leisure-sports-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotalb2b = grandTotalb2b + currentValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotalb2b = grandTotalb2b - beforeValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        }
    });
    
    $('#medical-devices-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotalb2b = grandTotalb2b + currentValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotalb2b = grandTotalb2b - beforeValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        }
    });
    
    $('#monitoring-control-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotalb2b = grandTotalb2b + currentValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotalb2b = grandTotalb2b - beforeValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        }
    });
    
    $('#automatic-dispensers-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotalb2b = grandTotalb2b + currentValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotalb2b = grandTotalb2b - beforeValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        }
    });
    
    $('#display-equipment-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotalb2b = grandTotalb2b + currentValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotalb2b = grandTotalb2b - beforeValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        }
    });
    
    $('#cooling-appliance-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotalb2b = grandTotalb2b + currentValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotalb2b = grandTotalb2b - beforeValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        }
    });
    
    $('#gas-discharge-led-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotalb2b = grandTotalb2b + currentValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotalb2b = grandTotalb2b - beforeValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        }
    });
    
    $('#photovolatic-panels-input-SC011-b2b').on('focus', function () {
        beforeValue = $(this).val();
        if (!isNaN(beforeValue)) {
            beforeValue = Number(beforeValue);
        }
    }).change(function () {
        var currentValue = $(this).val();
        if (isNaN(beforeValue)) {
            if (!isNaN(currentValue)) {
                currentValue = Number(currentValue);
                grandTotalb2b = grandTotalb2b + currentValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        } else {
            if (isNaN(currentValue)) {
                beforeValue = Number(beforeValue);
                grandTotalb2b = grandTotalb2b - beforeValue;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            } else {
                currentValue = Number(currentValue);
                var difference = currentValue - beforeValue;
                grandTotalb2b = grandTotalb2b + difference;
                $('#tonneTotalb2b').html(grandTotalb2b + ' tonnes');
            }
        }
    });

    $('.govuk-button').click(function (event) {
        var errorTrigger = false;

        if ($('#large-household-appliances-input-SC011-b2b').val() == '') {
            $('#large-household-appliances-input-SC011-b2b').addClass('govuk-input--error');
            $('#large-household-appliances-b2b-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#large-household-appliances-input-SC011-b2b').removeClass('govuk- input--error');
            $('#large-household-appliances-b2b-input-SC011-error').css('display', 'none');
        }

        if ($('#small-household-appliances-input-SC011-b2b').val() == '') {
            $('#small-household-appliances-input-SC011-b2b').addClass('govuk-input--error');
            $('#small-household-appliances-b2b-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#small-household-appliances-input-SC011-b2b').removeClass('govuk-input--error');
            $('#small-household-appliances-b2b-input-SC011-error').css('display', 'none');
        }

        if ($('#it-and-telecomms-input-SC011-b2b').val() == '') {
            $('#it-and-telecomms-input-SC011-b2b').addClass('govuk-input--error');
            $('#it-and-telecomms-b2b-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#it-and-telecomms-input-SC011-b2b').removeClass('govuk-input--error');
            $('#it-and-telecomms-b2b-input-SC011-error').css('display', 'none');
        }

        if ($('#consumer-equipment-input-SC011-b2b').val() == '') {
            $('#consumer-equipment-input-SC011-b2b').addClass('govuk-input--error');
            $('#consumer-equipment-b2b-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#consumer-equipment-input-SC011-b2b').removeClass('govuk-input--error');
            $('#consumer-equipment-b2b-input-SC011-error').css('display', 'none');
        }

        if ($('#lighting-equipment-input-SC011-b2b').val() == '') {
            $('#lighting-equipment-input-SC011-b2b').addClass('govuk-input--error');
            $('#lighting-equipment-b2b-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#lighting-equipment-input-SC011-b2b').removeClass('govuk-input--error');
            $('#lighting-equipment-input-SC011-error').css('display', 'none');
        }

        if ($('#electrical-and-electronic-input-SC011-b2b').val() == '') {
            $('#electrical-and-electronic-input-SC011-b2b').addClass('govuk-input--error');
            $('#electrical-and-electronic-b2b-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#electrical-and-electronic-input-SC011-b2b').removeClass('govuk-input--error');
            $('#electrical-and-electronic-b2b-input-SC011-error').css('display', 'none');
        }

        if ($('#toys-leisure-sports-input-SC011-b2b').val() == '') {
            $('#toys-leisure-sports-input-SC011-b2b').addClass('govuk-input--error');
            $('#toys-leisure-sports-b2b-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#toys-leisure-sports-input-SC011-b2b').removeClass('govuk-input--error');
            $('#toys-leisure-sports-b2b-input-SC011-error').css('display', 'none');
        }

        if ($('#medical-devices-input-SC011-b2b').val() == '') {
            $('#medical-devices-input-SC011-b2b').addClass('govuk-input--error');
            $('#medical-devices-b2b-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#medical-devices-input-SC011-b2b').removeClass('govuk-input--error');
            $('#medical-devices-b2b-input-SC011-error').css('display', 'none');
        }

        if ($('#monitoring-control-input-SC011-b2b').val() == '') {
            $('#monitoring-control-input-SC011-b2b').addClass('govuk-input--error');
            $('#monitoring-control-b2b-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#monitoring-control-input-SC011-b2b').removeClass('govuk-input--error');
            $('#monitoring-control-b2b-input-SC011-error').css('display', 'none');
        }

        if ($('#automatic-dispensers-input-SC011-b2b').val() == '') {
            $('#automatic-dispensers-input-SC011-b2b').addClass('govuk-input--error');
            $('#automatic-dispensers-b2b-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#automatic-dispensers-input-SC011-b2b').removeClass('govuk-input--error');
            $('#automatic-dispensers-b2b-input-SC011-error').css('display', 'none');
        }

        if ($('#display-equipment-input-SC011-b2b').val() == '') {
            $('#display-equipment-input-SC011-b2b').addClass('govuk-input--error');
            $('#display-equipment-b2b-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#display-equipment-input-SC011-b2b').removeClass('govuk-input--error');
            $('#display-equipment-b2b-input-SC011-error').css('display', 'none');
        }

        if ($('#cooling-appliance-input-SC011-b2b').val() == '') {
            $('#cooling-appliance-input-SC011-b2b').addClass('govuk-input--error');
            $('#cooling-appliance-b2b-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#cooling-appliance-input-SC011-b2b').removeClass('govuk-input--error');
            $('#cooling-appliance-b2b-input-SC011-error').css('display', 'none');
        }

        if ($('#gas-discharge-led-input-SC011-b2b').val() == '') {
            $('#gas-discharge-led-input-SC011-b2b').addClass('govuk-input--error');
            $('#gas-discharge-led-b2b-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#gas-discharge-led-input-SC011-b2b').removeClass('govuk-input--error');
            $('#gas-discharge-led-b2b-input-SC011-error').css('display', 'none');
        }

        if ($('#photovolatic-panels-input-SC011-b2b').val() == '') {
            $('#photovolatic-panels-input-SC011-b2b').addClass('govuk-input--error');
            $('#photovolatic-panels-b2b-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#photovolatic-panels-input-SC011-b2b').removeClass('govuk-input--error');
            $('#photovolatic-panels-b2b-input-SC011-error').css('display', 'none');
        }
        if ($('#large-household-appliances-input-SC011').val() == '') {
            $('#large-household-appliances-input-SC011').addClass('govuk-input--error');
            $('#large-household-appliances-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#large-household-appliances-input-SC011').removeClass('govuk- input--error');
            $('#large-household-appliances-input-SC011-error').css('display', 'none');
        }

        if ($('#small-household-appliances-input-SC011').val() == '') {
            $('#small-household-appliances-input-SC011').addClass('govuk-input--error');
            $('#small-household-appliances-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#small-household-appliances-input-SC011').removeClass('govuk-input--error');
            $('#small-household-appliances-input-SC011-error').css('display', 'none');
        }

        if ($('#it-and-telecomms-input-SC011').val() == '') {
            $('#it-and-telecomms-input-SC011').addClass('govuk-input--error');
            $('#it-and-telecomms-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#it-and-telecomms-input-SC011').removeClass('govuk-input--error');
            $('#it-and-telecomms-input-SC011-error').css('display', 'none');
        }

        if ($('#consumer-equipment-input-SC011').val() == '') {
            $('#consumer-equipment-input-SC011').addClass('govuk-input--error');
            $('#consumer-equipment-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#consumer-equipment-input-SC011').removeClass('govuk-input--error');
            $('#consumer-equipment-input-SC011-error').css('display', 'none');
        }

        if ($('#lighting-equipment-input-SC011').val() == '') {
            $('#lighting-equipment-input-SC011').addClass('govuk-input--error');
            $('#lighting-equipment-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#lighting-equipment-input-SC011').removeClass('govuk-input--error');
            $('#lighting-equipment-input-SC011-error').css('display', 'none');
        }

        if ($('#electrical-and-electronic-input-SC011').val() == '') {
            $('#electrical-and-electronic-input-SC011').addClass('govuk-input--error');
            $('#electrical-and-electronic-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#electrical-and-electronic-input-SC011').removeClass('govuk-input--error');
            $('#electrical-and-electronic-input-SC011-error').css('display', 'none');
        }

        if ($('#toys-leisure-sports-input-SC011').val() == '') {
            $('#toys-leisure-sports-input-SC011').addClass('govuk-input--error');
            $('#toys-leisure-sports-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#toys-leisure-sports-input-SC011').removeClass('govuk-input--error');
            $('#toys-leisure-sports-input-SC011-error').css('display', 'none');
        }

        if ($('#medical-devices-input-SC011').val() == '') {
            $('#medical-devices-input-SC011').addClass('govuk-input--error');
            $('#medical-devices-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#medical-devices-input-SC011').removeClass('govuk-input--error');
            $('#medical-devices-input-SC011-error').css('display', 'none');
        }

        if ($('#monitoring-control-input-SC011').val() == '') {
            $('#monitoring-control-input-SC011').addClass('govuk-input--error');
            $('#monitoring-control-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#monitoring-control-input-SC011').removeClass('govuk-input--error');
            $('#monitoring-control-input-SC011-error').css('display', 'none');
        }

        if ($('#automatic-dispensers-input-SC011').val() == '') {
            $('#automatic-dispensers-input-SC011').addClass('govuk-input--error');
            $('#automatic-dispensers-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#automatic-dispensers-input-SC011').removeClass('govuk-input--error');
            $('#automatic-dispensers-input-SC011-error').css('display', 'none');
        }

        if ($('#display-equipment-input-SC011').val() == '') {
            $('#display-equipment-input-SC011').addClass('govuk-input--error');
            $('#display-equipment-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#display-equipment-input-SC011').removeClass('govuk-input--error');
            $('#display-equipment-input-SC011-error').css('display', 'none');
        }

        if ($('#cooling-appliance-input-SC011').val() == '') {
            $('#cooling-appliance-input-SC011').addClass('govuk-input--error');
            $('#cooling-appliance-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#cooling-appliance-input-SC011').removeClass('govuk-input--error');
            $('#cooling-appliance-input-SC011-error').css('display', 'none');
        }

        if ($('#gas-discharge-led-input-SC011').val() == '') {
            $('#gas-discharge-led-input-SC011').addClass('govuk-input--error');
            $('#gas-discharge-led-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#gas-discharge-led-input-SC011').removeClass('govuk-input--error');
            $('#gas-discharge-led-input-SC011-error').css('display', 'none');
        }

        if ($('#photovolatic-panels-input-SC011').val() == '') {
            $('#photovolatic-panels-input-SC011').addClass('govuk-input--error');
            $('#photovolatic-panels-input-SC011-error').css('display', 'inline');
            errorTrigger = true;
        } else {
            $('#photovolatic-panels-input-SC011').removeClass('govuk-input--error');
            $('#photovolatic-panels-input-SC011-error').css('display', 'none');
        }
        if(errorTrigger){
            event.preventDefault();
        }
    });
});