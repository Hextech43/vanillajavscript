let output = document.getElementById("output");

const FormValid = () => {
  let num1 = document.getElementById("el1").value;
  let num2 = document.getElementById("el2").value;
  let num3 = document.getElementById("el3").value;
  let num4 = document.getElementById("el4").value;

  if (num1 === "") {
    output.innerHTML = "please input your name";
    return false;
  }

  if (num2 === "") {
    output.innerHTML = "please input your email";
    return false;
  }
  if (num3 === "") {
    output.innerHTML = "please input your password";
    return false;
  }
  if (num4 !== num3) {
    output.innerHTML = "password didnt match";
    return false;
  } else {
    output.innerHTML = "welcome" + " " + num1;
    return true;
  }
};
