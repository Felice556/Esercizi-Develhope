<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .form{
            display: flex;
            flex-direction: column;
            max-width: 300px;
            gap: 16px;
            margin-bottom: 16px
        };
    </style>
</head>
<body>
    <h1>Il form di <span class="title-name"></span></h1>
    <div class="form">
        <label for="email">Email</label>
        <input type="email" name="email" class="email" placeholder="email">
        <label for="firstname">Name</label>
        <input type="text" name="firstname" class="firstname" placeholder="firstname">
        <label for="lastname">Surname</label>
        <input type="text" name="lastname" class="lastname" placeholder="lastname">
    </div>
    <button class="btn">Salva</button>
    <p class="printedform"></p>
    <script>
        const firstname = document.querySelector('.firstname');
        const titleName = document.querySelector('.title-name');
        const btn = document.querySelector('.btn');
        const email = document.querySelector('.email');
        const lastname = document.querySelector('.lastname');
        btn.addEventListener('click', () => { 
        titleName.textContent = firstname.value;
        sessionStorage.setItem('firstname', firstname.value);
        sessionStorage.setItem('email', email.value);
        sessionStorage.setItem('lastname', lastname.value);

        });
        
        const savedValue = sessionStorage.getItem('firstname');
        const savedEmail = sessionStorage.getItem('email');
        const savedLastname = sessionStorage.getItem('lastname');

        if (savedValue !== null) {
             titleName.textContent = savedValue;
             email.value = savedEmail;
             lastname.value = savedLastname;
            }
            
        </script>
</body>

</html>