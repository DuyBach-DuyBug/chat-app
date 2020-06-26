let components = {};

components.signUp = `
<section id="login_section" class="account-section position-center login_section col-100 d-flex">
            <form id="registerForm" class="col-50 space-style d-flex center-column">
                <h2>Sign Up</h2>
                <div class="form-group">
                    <label for="name">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </label>
                    <input id="name" name="name" type="text" placeholder="User name">
                    <div class="message-error" id="name-error"></div>
                </div>
                <div class="form-group">
                    <label for="email">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </label>
                    <input id="email" name="email" type="email" placeholder="Email">
                    <div class="message-error" id="email-error"></div>
                </div>
                <div class="form-group">
                    <label for="password">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </label>
                    <input id="password" name="password" type="password" placeholder="Password">
                    <div class="message-error" id="password-error"></div>
                </div>
                <div class="form-group">
                    <label for="passwordConfirmation">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </label>
                    <input id="passwordConfirmation" name="passwordConfirmation" type="password" placeholder="Password Confirm">
                    <div class="message-error" id="password-confirmation-error"></div>
                </div>
                <div>
                    <button id="btn">Register</button>
                </div>
                <div class="message" id="signUp_message"></div>
            </form>
            <div class="media_container col-50 d-flex center-column">
                <img src="media/signup-image.jpg">
                <a id="sign-up-link">I am already member</a>
            </div>
        </section>
`;

components.signIn = `
<section id="register_section" class="account-section position-center register_section col-100 d-flex hide">
            <form id="loginForm" class="col-50 space-style d-flex center-column">
                <h2>Sign In</h2>
                <div class="form-group">
                    <label for="email">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </label>
                    <input id="email" name="email" type="email" placeholder="Email">
                    <div class="message-error" id="email-error"></div>
                </div>
                <div class="form-group">
                    <label for="password">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </label>
                    <input id="password" name="password" type="password" placeholder="Password">
                    <div class="message-error" id="password-error"></div>
                </div>
                <div>
                    <button id="btn">Log in</button>
                    <div class="message" id="signUp_message"></div>
                </div>
            </form>
            <div class="media_container col-50 d-flex center-column">
                <img src="media/signin-image.jpg">
                <a id="sign-in-link">Create an account</a>
            </div>
        </section>
`;
components.chat = `
<section class="d-flex position-center chat-section">
            <div class="col-25 d-flex start-column ">
                <h3>Conversations</h3>
                <form id="createChat">
                    <div class="form-group">
                        <label for="title">
                            <i class="fa fa-comments" aria-hidden="true"></i>
                        </label>
                        <input id="title" name="title" type="text" placeholder="Title">
                        <div class="message-error" id="title-error"></div>
                    </div>
                    <div class="form-group">
                        <label for="email">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        </label>
                        <input id="email" name="email" type="email" placeholder="Email">
                        <div class="message-error" id="email-error"></div>
                    </div>
                    <div>
                        <button style="width: 100%;">Add</button>
                    </div>
                </form>
                <div class="list-chat-room style-scrollbar" id="list-room"></div>
            </div>
            <div class="col-50 d-flex start-column">
                <h3>Chat name: <label id="topTitle"></label></h3>
                <div class="messages-box style-scrollbar">
                    <div class="d-flex message-content">
                        <img src="http://avatarbox.net/avatars/img36/ronaldo_funny_avatar_picture_11004.jpg">
                        <p>hi</p>
                    </div>
                    <div class="my-message d-flex message-content">
                        <p>hi</p>
                    </div>
                    <div class="d-flex message-content">
                        <img src="http://avatarbox.net/avatars/img36/ronaldo_funny_avatar_picture_11004.jpg">
                        <p>what your name</p>
                    </div>
                    <div class="my-message d-flex message-content">
                        <p>my name is aa</p>
                    </div>
                    <div class="d-flex message-content">
                        <img src="http://avatarbox.net/avatars/img36/ronaldo_funny_avatar_picture_11004.jpg">
                        <p>what your name</p>
                    </div>
                    <div class="my-message d-flex message-content">
                        <p>my name is aa</p>
                    </div>
                    <div class="my-message d-flex message-content">
                        <p>hi</p>
                    </div>
                    <div class="d-flex message-content">
                        <img src="http://avatarbox.net/avatars/img36/ronaldo_funny_avatar_picture_11004.jpg">
                        <p>what your name</p>
                    </div>
                    <div class="d-flex message-content">
                        <img src="http://avatarbox.net/avatars/img36/ronaldo_funny_avatar_picture_11004.jpg">
                        <p>what your name what your name what your name what your name what your name what your name what your name what your name</p>
                    </div>
                    <div class="my-message d-flex message-content">
                        <p>my name is aa</p>
                    </div>
                    <div class="d-flex message-content">
                        <img src="http://avatarbox.net/avatars/img36/ronaldo_funny_avatar_picture_11004.jpg">
                        <p>what your name</p>
                    </div>
                    <div class="my-message d-flex message-content">
                        <p>my name is aa</p>
                    </div>
                </div>
                <form class="d-flex">
                    <textarea></textarea>
                    <button>Send</button>
                </form>
            </div>
            <div class="col-25 d-flex start-column">
                <h3>Detail</h3>
                <div>
                    <div class="user-status" id="rooms-userDetail">
                        <div class="d-flex">
                            <img src="http://avatarbox.net/avatars/img36/ronaldo_funny_avatar_picture_11004.jpg">
                            <p>asd@mail.com</p>
                            <div class="status-icon user_online"></div>
                        </div>
                        <div class="d-flex">
                            <img src="http://avatarbox.net/avatars/img25/silver_cat_avatar_picture_23625.jpg">
                            <p title="asdsef23@gmail.com">asdsef23@gmail.com</p>
                            <div class="status-icon user_offline"></div>
                        </div>
                    </div>
                    <div class="date-create">
                        <p id="detail-time"></p>
                    </div>
                </div>
            </div>
        </section>
        <form id="logoutForm">
        <button >Logout</button></form>
`;