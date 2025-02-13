document.getElementById('login').addEventListener('click', function() {
    document.querySelector('.login-formulario').style.display = 'block';
    document.querySelector('.registro-formulario').style.display = 'none';
});

document.getElementById('registro').addEventListener('click', function() {
    document.querySelector('.login-formulario').style.display = 'none';
    document.querySelector('.registro-formulario').style.display = 'block';
});

document.querySelector('.login-formulario').style.display = 'block';
document.querySelector('.registro-formulario').style.display = 'none';