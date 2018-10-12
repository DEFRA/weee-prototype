$(document).ready(function () {

    var searchTerm = '';
    $('#scheme-name')
        .focus(function () {
            searchTerm = $(this).val();
        })
        .blur(function () {
            if (searchTerm != $(this).val()) {
                $('scheme-name-id').val('');
            }
        })
        .autocomplete({
            source: function (request, response) {
                $.ajax({
                    type: 'POST',
                    url: '/version1-5/AATF-Returns/find-scheme',
                    context: document.body,
                    data: {
                        SearchTerm: request.term
                    },
                    success: function (data) {
                        response($.map(data, function (item) {
                            return item
                        }))
                    }
                });
            },
            minLength: 1,
            select: function (event, ui) {
                $('#scheme-name').val(ui.item._name);
                $('#scheme-name-id').val(ui.item._id);
                searchTerm = $('#scheme-name').val();
                return false;
            },
            open: function () {
                $(this).removeClass('ui-corner-all').addClass('ui-corner-top');
            },
            close: function () {
                $(this).removeClass('ui-corner-top').addClass('ui-corner-all');
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // Do nothing.
            },

        }).autocomplete('instance')._renderItem = function (ul, item) {
            return $('<li></li>')
                .data('item.autocomplete', item)
                .append('<span class="govuk-body-s">' + item._name + '</span>')
                .appendTo(ul);
        };
});