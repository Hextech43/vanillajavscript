// let car = {
//   name: "volvo",
//   color: "blue",
// };

// for (let prop in window) {
//   document.write(window[prop] + "<br/>");
// }

const submittinData = () => {
  let y = document.getElementById("user");
  let first = document.getElementById("firstName").value;
  let second = document.getElementById("SecondName").value;
  let emailup = document.getElementById("email").value;
  let wordpass = document.getElementById("password").value;
  let passconfirm = document.getElementById("confirmpass").value;

  if (first === "") {
    y.innerHTML = "First Name is required";
    return false;
  }
  if (second === "") {
    y.innerHTML = "Second Name is required";
    return false;
  }
  if (emailup === "") {
    y.innerHTML = "Email is required";
    return false;
  }
  if (wordpass === "") {
    y.innerHTML = "Password is required";
    return false;
  }

  if (wordpass !== passconfirm) {
    y.innerHTML = "Password did not match";
    return false;
  } else {
    y.innerHTML = "Welcome  " + first + " " + second;
    return false;
  }
};
