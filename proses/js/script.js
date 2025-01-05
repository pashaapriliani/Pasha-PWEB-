$(document).ready(function() {
    function fetchAlumni() {
        $.ajax({
            url: 'Alumni.php',
            type: 'GET',
            success: function(response) {
                const data = JSON.parse(response);
                $('#alumniTableBody').empty();
                data.forEach((alumnus, index) => {
                    $('#alumniTableBody').append(`
                        <tr>
                            <td>${alumnus.nim}</td>
                            <td>${alumnus.name}</td>
                            <td>${alumnus.major}</td>
                            <td>${alumnus.year}</td>
                            <td>
                                <button class="btn btn-danger btn-sm deleteBtn" data-index="${index}">Hapus</button>
                            </td>
                        </tr>
                    `);
                });
            }
        });
    }

    $('#alumniForm').on('submit', function(event) {
        event.preventDefault();
        const formData = $(this).serialize();
        $.ajax({
            url: 'Alumni.php',
            type: 'POST',
            data: formData,
            success: function(response) {
                alert('Data berhasil disimpan.');
                fetchAlumni();
                $('#alumniForm')[0].reset();
            }
        });
    });
});
