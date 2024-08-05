<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نموذج تسجيل الدخول</title>
</head>
<body>
    <h2>نموذج تسجيل الدخول</h2>
    <form id="loginForm">
        <label for="username">اسم المستخدم:</label><br>
        <input type="text" id="username" name="username" required><br>
        <label for="password">كلمة المرور:</label><br>
        <input type="password" id="password" name="password" required><br><br>
        <input type="submit" value="تسجيل الدخول">
    </form>

    <script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // منع إرسال النموذج بشكل افتراضي

            // جمع بيانات النموذج
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // إرسال البيانات إلى الخادم باستخدام AJAX
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'user.php', true); // استبدل 'send_login.php' بمسار المعالجة على الخادم الخاص بك
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    alert('تم إرسال بيانات تسجيل الدخول بنجاح!');
                    document.getElementById('loginForm').reset(); // إعادة تعيين النموذج بعد الإرسال
                } else {
                    alert('حدث خطأ أثناء إرسال بيانات تسجيل الدخول.');
                }
            };
            var formData = JSON.stringify({ username: username, password: password });
            xhr.send(formData);
        });
    </script>
</body>
</html>
