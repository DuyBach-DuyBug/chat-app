window.onload = function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user && user.emailVerified == true) {
            view.showScreen('chat');
            // console.log(user)
        } 
        else if (user && user.emailVerified == false) {
            alert('confirm your email')
            firebase.auth().signOut()
            view.showScreen('signUp');
        } 
        else {
            view.showScreen('signUp');
        }
    });
}

