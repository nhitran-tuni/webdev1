/**
 * Sort table rows alphabetically based on the values in a column
 *
 * @param {Number} col column index (zero based)
 * @param {HTMLTableElement} table the table to be sorted
 */
function sortTableByColumn(col, table) {
  // TODO: Implement this function
  let sorted_arr = [];
  let table1 = document.querySelectorAll("tbody > tr");

  for ( var ele of table1) {
    sorted_arr.push(ele.children[col].innerText);
  }

  sorted_arr.sort(
    function(x,y) {
      return x.localeCompare(y);
    }
  );

  for (var item of sorted_arr){
    for (var i of table1) {
      if ( i.children[col].innerText === item ) {
        table.querySelector("tbody").appendChild(i);
      }
    }
  }
}

/**
 * DO NOT EDIT THE CODE BELOW!
 *
 * The code below is there just to make it easier to test the code.
 *
 * If your function works correctly you should be able to sort the table
 * simply by clicking any column heading and the table should be immediately
 * sorted by values in that column.
 */

// find the table element
const table = document.getElementById('sortable');

// attach an event listener to each th element's click event
table.querySelectorAll('thead th').forEach((th, i) =>
  th.addEventListener('click', () => {
    sortTableByColumn(i, table);
  })
);
