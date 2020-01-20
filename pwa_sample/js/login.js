$(document).ready(function() {

    $('body')
    .on('click', '#login-btn', function() {
        // alert();
        // loginFunction();

        // if(navigator.onLine) {
        //     console.log('Online!');
        // }
        // else {
        //     console.log('Offline!');
        //     loginFunction();
        // }

        var email = $('#email_txtbox').val();
        var password = $('#password_txtbox').val();

        var crypt = {
            secret: 'CIPHERKEY',
            encrypt: function(clear) {
                var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
                cipher = cipher.toString();
                return cipher;
            },
            decrypt: function(cipher) {
                var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
                decipher = decipher.toString(CryptoJS.enc.Utf8);
                return decipher;
            }
        };

        var hash_password = crypt.encrypt("Yopijay1298");
        console.log(hash_password);

        // var orig_password = crypt.decrypt("U2FsdGVkX19qKUdCyVElGmlxFrRJK2ZCOoXz0xKodsQ=");
        // console.log(orig_password);
    })
});