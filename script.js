$(document).ready(function() {
  $('#calculateBtn').click(function() {
    // Mengambil nilai dari input
    var number = $('#inputNumber').val();

    // Memeriksa apakah nilai yang dimasukkan adalah bilangan ganjil atau genap
    if (number % 2 === 0) {
      $('#result').html('<p class="text-success">Angka ' + number + ' adalah bilangan genap.</p>');
    } else {
      $('#result').html('<p class="text-danger">Angka ' + number + ' adalah bilangan ganjil.</p>');
    }
  });
});
