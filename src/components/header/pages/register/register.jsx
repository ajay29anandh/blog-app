import "./register.css";

export default function Register() {
    return (
        <div className="register">

            <span className="registerTitle">Create Your Account</span>
            <form className="registerForm">
                <label>First Name</label>
                <input className="registerInput" type="text" placeholder="Enter your First Name..." />
                <label>Last Name</label>
                <input className="registerInput" type="password" placeholder="Enter your Lastname..." />
                <label>User Name</label>
                <input className="registerInput" type="text" placeholder="Enter your username ..." />
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="registerInput" type="text" placeholder="Enter your password..." />
                <label>Bio</label>
                <input className="registerInput" type="text" placeholder="add your social media page" />
                <button className="registerButton">Login</button>
            </form>
            <button className="registerLoginButton">Login</button>

        </div>

    )
}