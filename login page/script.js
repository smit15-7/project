function Login (form) { 
    username = new Array("codeovate"); password = new Array("password"); page = "index" + ".html"; if (form.username.value == username[0] && form.password.value == password[0] || form.username.value == username[1] && form.password.value == password[1] ||

    form.username.value == username[2] && form.password.value == password[2] || form.username.value == username[3] && form.password.value == password[3] ||
    
    form.username.value == username[4] && form.password.value == password[4] || form.username.value == username[5] && form.password.value == password[5] ||
    
    form.username.value == username[6] && form.password.value == password[6] || form.username.value == username[7] && form.password.value == password[7] ||
    
    form.username.value == username[8] && form.password.value == password[8] || form.username.value == username[9] && form.password.value == password[9]) { self.location.href = page; } else { alert("Either the username or password you entered is incorrect.\nPlease try again."); form.username.focus(); } return true; }
    

