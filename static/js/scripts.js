$(document).ready(function() {
    // Анимация для кнопок
    $('.btn').on('mouseenter', function() {
        $(this).addClass('shadow');
    }).on('mouseleave', function() {
        $(this).removeClass('shadow');
    });
    
    // Валидация ТОЛЬКО формы регистрации
    $('#register-form').on('submit', function(e) {
        const password = $('#password').val();
        const confirmPassword = $('#confirm_password').val();
        
        if (password && password !== confirmPassword) {
            e.preventDefault(); // Отменяем отправку формы
            alert('Пароли не совпадают!');
            return false;
        }
        return true;
    });
    
    // Плавная прокрутка
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });
});