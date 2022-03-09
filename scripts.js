const login = `
<div class="access">
    <div class="login">
        <h2>Welcome back!</h2>
        <h4>Sign in to your account</h4>

        <input type="email" placeholder="Email"> <br>
        <input type="password" placeholder="Password"> <br>
        <input type="submit" value="Login">
    </div>
    <!--login-->
</div>
<!--access-->

<p id="sign">Don't have an account? <a href="">Sign up</a></p>
<p id="forgot"><a href="">Forgot password?</a></p>
`

const register = `
<div class="access">
    <div class="register">
        <h2>Create a Criptonist Account</h2>

        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
        <input type="password" placeholder="Confirm password">
        <input type="checkbox" name="check">
        <label for="check" id="check"> I agree to the <a href=""> Terms of Service</a> and <a href=""> Privacy Policy</a></label>

        <input type="submit" value="Sign in">
    </div>
    <!--register-->
</div>
<!--access-->

<p id="sign">Already have an account?<a href="">  Login</a></p>
`
const log = document.querySelector('#log')
.addEventListener('click' , () => {
    document.querySelector('.forms')
    .innerHTML = `${login}`
})

const reg = document.querySelector('#reg')
.addEventListener('click' , () => {
    document.querySelector('.forms')
    .innerHTML = `${register}`
})