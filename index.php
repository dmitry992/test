<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
</head>

<body>
    <div class="wrapper">

        <a class="button get__data" id="get_data_btn">
            Get datad
        </a>
        <div class="form__data">
            <h3 class="title">
                Search
            </h3>
            <input type="text" class="input" placeholder="Promo" id="check_object_code_input">
            <a class="button" id="check_object_code_btn">
                Search data 
            </a>
        </div>
        <div class="form__data">
            <h3 class="title">
                Search
            </h3>
            <input type="text" class="input" placeholder="Month" id="get_cancelled_days_input">
            <a class="button" id="get_cancelled_days_btn">
                Search data 
            </a>
        </div>

    </div>

    <script src="js/get.js"></script>
</body>

</html>