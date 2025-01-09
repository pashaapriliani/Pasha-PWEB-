<?php
include 'Latihan_09_config.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bursa Kerja</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container mt-5">
        <h2>Bursa Kerja</h2>
        <a href="tambah_lowongan.php" class="btn btn-primary mb-3">Tambah Lowongan</a>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Perusahaan</th>
                    <th>Posisi</th>
                    <th>Lokasi</th>
                    <th>Gaji</th>
                    <th>Kontak</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $sql = "SELECT * FROM lowongan";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . $row['perusahaan'] . "</td>";
                        echo "<td>" . $row['posisi'] . "</td>";
                        echo "<td>" . $row['lokasi'] . "</td>";
                        echo "<td>" . $row['gaji'] . "</td>";
                        echo "<td>" . $row['kontak'] . "</td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='6' class='text-center'>Tidak ada lowongan kerja yang tersedia.</td></tr>";
                }
                $conn->close();
                ?>
            </tbody>
        </table>
    </div>
</body>
</html>