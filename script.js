const API = "http://localhost:5000/api";


// REGISTER
function register() {

    fetch(`${API}/auth/register`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            username:
            document.getElementById("username").value,

            email:
            document.getElementById("email").value,

            password:
            document.getElementById("password").value
        })
    })

    .then(res => res.json())

    .then(data => {

        alert(data.msg);

        window.location.href = "login.html";
    });
}


// LOGIN
function login() {

    fetch(`${API}/auth/login`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            email:
            document.getElementById("email").value,

            password:
            document.getElementById("password").value
        })
    })

    .then(res => res.json())

    .then(data => {

        if(!data.token) {

            alert(data.msg);
            return;
        }

        localStorage.setItem(
            "token",
            data.token
        );

        localStorage.setItem(
            "userId",
            data.user._id
        );

        alert("Login Successful");

        window.location.href = "home.html";
    });
}


// LOGOUT
function logout() {

    localStorage.clear();

    window.location.href = "login.html";
}


// CREATE POST
function createPost() {

    const content =
    document.getElementById("postContent").value;

    if(content.trim() === "") {

        alert("Write something");
        return;
    }

    fetch("http://localhost:5000/api/posts", {

        method: "POST",

        headers: {

            "Content-Type": "application/json",

            "Authorization":
            localStorage.getItem("token")
        },

        body: JSON.stringify({
            content: content
        })
    })

    .then(res => res.json())

    .then(data => {

        console.log(data);

        alert(data.msg);

        document.getElementById(
            "postContent"
        ).value = "";

        loadPosts();
    })

    .catch(err => console.log(err));
}

// LOAD POSTS
function loadPosts() {

    fetch("http://localhost:5000/api/posts")

    .then(res => res.json())

    .then(posts => {

        let output = "";

        posts.reverse().forEach(post => {

            // SAFETY CHECK
            const username =
            post.userId?.username || "Unknown User";

            output += `

            <div class="post">

                <h3>${username}</h3>

                <p>${post.content}</p>

                <button onclick="likePost('${post._id}')">

                ❤️ ${post.likes.length}

                </button>

            </div>
            `;
        });

        document.getElementById("posts").innerHTML = output;
    })

    .catch(err => console.log(err));
}
// LIKE POST
function likePost(id) {

    fetch(`${API}/posts/like/${id}`, {

        method: "PUT",

        headers: {

            "Authorization":
            localStorage.getItem("token")
        }
    })

    .then(() => loadPosts());
}


// LOAD PROFILE
function loadProfile() {

    const userId =
    localStorage.getItem("userId");

    fetch(`${API}/users/${userId}`)

    .then(res => res.json())

    .then(user => {

        document.getElementById(
            "profile"
        ).innerHTML = `

        <h3>${user.username}</h3>

        <p>${user.email}</p>

        <p>
        Followers:
        ${user.followers.length}
        </p>

        <p>
        Following:
        ${user.following.length}
        </p>
        `;
    });
}