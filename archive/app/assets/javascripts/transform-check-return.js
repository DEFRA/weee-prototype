(function () {
    var transformCells = document.querySelectorAll('.check-return');

    
    
    for (var i = 0; i < transformCells.length; i++) {
        transformCells[i].addEventListener('click', function (event) {

            function findAncestor (el, type) {
                if (el.nodeName === type) {
                    return el;
                }
        
                while ((el = el.parentElement) && el.nodeName !== type);
                return el;
            }
            
            var cell = findAncestor(event.srcElement, 'TD');
            var summary = findAncestor(event.srcElement, 'SUMMARY');
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
