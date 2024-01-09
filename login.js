function onSignIn(googleUser) {
    // Get user information
    var profile = googleUser.getBasicProfile();

    // Display user information
    document.getElementById('result').innerHTML = 'Welcome, ' + profile.getName();
}
