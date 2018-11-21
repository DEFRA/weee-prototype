(function () {
    var transformCells = document.querySelectorAll('.check-return');

    for (var i = 0; i < transformCells.length; i++) {
        transformCells[i].addEventListener('click', function (event) {

            var cell = event.srcElement.parentElement.parentElement.parentElement;
            var summary = event.srcElement.parentElement;
            var sibling = cell.nextElementSibling;

            if (cell && summary && sibling){
                if (summary.getAttribute('aria-expanded') === 'true') {
                    cell.colSpan = 3;
                    sibling.style.display = 'none';
                } else{
                    cell.colSpan = 2;
                    sibling.style.display = '';
                }
            }
        });
    }
})();
