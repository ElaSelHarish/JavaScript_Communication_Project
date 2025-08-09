let deleteId;

// function to fetch the userid.
function deleteUserId(userid) {
  deleteId = userid;
}
 function login() {
            const username = document.getElementById("email").value.trim();
            if (username === "") {
                alert("Name is required.");
                return;
            }
            currentUser = username;
            localStorage.setItem("current_user", currentUser);
            document.getElementById("loginScreen").style.display = "none";
            document.getElementById("chatBox").classList.remove("d-none");
            document.getElementById("currentUserLabel").innerText = currentUser;
            loadMessages();
          }
// function to delete the existing user.
function deleteUser() {
  let users = JSON.parse(localStorage.getItem("usersLocastorage")) || [];
  //debugger;
  const index = users.findIndex((user) => user.id === deleteId);
  if (index !== -1) {
    users.splice(index, 1); // remove the object at that index
    localStorage.setItem("usersLocastorage", JSON.stringify(users));
    alert("User deleted successfully.");
    window.location.href = "http://127.0.0.1:5500/day3/Project/UserList.html";
  } else {
    alert("No user found with this email.");
  }
  }

// function to Update the existing userlist.
function updateUser() {
  const check1storedUsers = localStorage.getItem("usersLocastorage");
  let checkstoredUsers = JSON.parse(check1storedUsers);
  for (let i = 0; i < checkstoredUsers.length; i++) {
    const user = checkstoredUsers[i];
    if (usrid == user.id) {
      // debugger;
      user.fullname = document.getElementById("updatedFullname").value;
      user.email = document.getElementById("updatedEmail").value;
      let updatedata = JSON.stringify(checkstoredUsers);
      localStorage.setItem("usersLocastorage", updatedata);
    }
  }
}

// function to Validate the Login.
function validate() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email == "") {
    alert("Please enter id");
    return false;
  } else if (password == "") {
    alert("Please enter valid password");
    return false;
  }
  //debugger
  const storedUsers = JSON.parse(localStorage.getItem("usersLocastorage"));
  for (let i = 0; i < storedUsers.length; i++) {
    const user = storedUsers[i];
    if (user.email === email) {
      if (user.password === password) {
        return true;
      } else {
        alert("Password is wrong");
        return false;
      }
    }
  }
  alert("Email ID is wrong");
  return false;
}
