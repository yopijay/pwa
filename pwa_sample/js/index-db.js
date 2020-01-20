$(document).ready(function() {
    
    var request = indexedDB.open('pofsys', 1);

    request.onupgradeneeded = function(e) {
        var db = e.target.result;

        if (!db.objectStoreNames.contains('tbl_user')) {
            var os = db.createObjectStore('tbl_user', {keyPath: 'id',  autoIncrement: true});
        }
    }

    request.onsuccess = function(e) {
        console.log('Success: Opened Database');
        db = e.target.result;
    }

    request.onerror = function(e) {
        console.log('Error: Can`t open database');
    }
});

function loginFunction() {
    var email = $('#email_txtbox').val();
    var password = $('#password_txtbox').val();

    var transaction = db.transaction(['tbl_user'], 'readwrite');
    var store = transaction.objectStore('tbl_user');

    var user = {
        email: email,
        password: password
    }
    var request = store.add(user);

    request.onsuccess = function() {
        alert('Success!');
    }

    request.onerror = function() {
        console.log('Failed!');
        console.log('Error: ', e.target.error.name);
    }
}