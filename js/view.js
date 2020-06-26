// hiển thị & xử lý trên giao diện
let view = {};


view.showScreen = async function (screenName) {
    /* 
        signIn --> show giao diện của sign in
        signUp --> show giao diện của sign up
        chat --> show giao diện của chat 
    */

    let content = document.getElementById('view_section');

    switch (screenName) {
        case 'signIn':
            // hiển thị giao diện của sign in
            content.innerHTML = components.signIn;

            // thêm sự kiện click cho sign-up-link --> giao diện sign up

            let signUpLink = document.getElementById('sign-in-link');
            signUpLink.onclick = function () {
                view.showScreen("signUp");
            }
            let formSignIn = document.getElementById('loginForm');
            formSignIn.onsubmit = function (event) {
                event.preventDefault();
                let email = formSignIn.email.value;
                let password = formSignIn.password.value;
                let validate = [
                    view.validate(email != "", "email-error", "Input your email"),
                    view.validate(password != "", "password-error", "Input password")
                ]
                if (!isPass(validate)) {
                    controller.signIn(email, password)
                }
            }
            break;

        case 'signUp':
            // hiển thị giao diện của sign up
            content.innerHTML = components.signUp;

            // thêm sự kiện click cho sign-in-link --> giao diện sign in
            let signInLink = document.getElementById('sign-up-link');
            signInLink.onclick = function () {
                view.showScreen("signIn");
            }

            // xử lý form-sign-up
            let formSignUp = document.getElementById('registerForm');
            formSignUp.onsubmit = async function (event) {
                event.preventDefault();
                view.setActive('btn', true)
                // lấy dữ liệu từ form
                let name = formSignUp.name.value;
                let email = formSignUp.email.value;
                let password = formSignUp.password.value;
                let passwordConfirmation = formSignUp.passwordConfirmation.value;
                let validate = [
                    view.validate(name != "", "name-error", "Input your name"),
                    view.validate(email != "", "email-error", "Input your email"),
                    view.validate(password != "", "password-error", "Input password"),
                    view.validate(passwordConfirmation != "" && password == passwordConfirmation, "password-confirmation-error", "Password confirmation is not match")
                ]
                // gửi dữ liệu & lưu trong cơ sở dữ liệu
                // thư viện firebase
                if (!isPass(validate)) {
                    await controller.signUp(name, email, password)
                }

                // await view.setActive('btn', false)
            }

            break;
        case 'chat':
            content.innerHTML = components.chat;
            let listRoom = document.getElementById('list-room')

            await controller.loadConverstations()
            // listRoom.innerHTML =  await controller.listRoom()
            for (let [index, converstation] of model.converstations.entries()) {
                let html = `<div><input type="radio" name="room" id="room-${index}" data-index="${index}" onchange="changeRoom(this)">
                <label for="room-${index}" class="room-selected">
                    <h4>${converstation.title}</h4>
                    <p>${converstation.member.length} ${(converstation.member.length < 2) ? 'memeber' : 'members'}</p>
                </label></div>`
                listRoom.innerHTML += html
            }
            // listRoom.onchange = async function(){
            //     console.dir(listRoom)
            // }
            let logoutBtn = document.getElementById('logoutForm')
            logoutBtn.onsubmit = function () {
                controller.signOut()
            }
            let createChat = document.getElementById('createChat')
            createChat.onsubmit = async function (e) {
                e.preventDefault();
                let title = createChat.title.value;
                let email = createChat.email.value;
                let validate = [
                    view.validate(title != "", "title-error", "Input chat's title"),
                    view.validate(email != "", "email-error", "Input member's email"),
                ]

                if (!isPass(validate)) {
                    controller.createRoom(title, email)
                }
            }
            break;
    }
}


view.validate = function (condition, errorTag, message) {
    if (!condition) {
        // document.getElementById(errorTag).innerHTML = message;
        view.setText(errorTag, message)
        return false
    } else {
        // document.getElementById(errorTag).innerHTML = "";
        view.setText(errorTag, '')
        return true
    }
}

view.setText = function (id, content) {
    document.getElementById(id).innerHTML = content
}

view.setActive = function (id, active) {
    document.getElementById(id).disabled = active
}
