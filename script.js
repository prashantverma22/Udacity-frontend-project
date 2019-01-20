var height, width, color;

// when size is submitted by the user, call the makeGrid function.
$('#sizePicker').submit(function (event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWidth').val();
  makeGrid(height, width);
})


function makeGrid(x, y) {
  $('tr').remove();

  // setup the cell..
  for (var i = 0; i <= x; i++) {
    $('#pixelCanvas').append('<tr id = table' + i + '></tr>');
    for (var j = 0; j <= y; j++) {
      $('#table' + i).append('<td></td');
    }
  }

  // adding color to cell..
  $('td').click(function addColor() {
    color = $('#colorPicker').val();

    if ($(this).attr('style')) {
      $(this).removeAttr('style');
    }
    else {
      $(this).attr('style', 'background-color : ' + color);
    }
  })
}
