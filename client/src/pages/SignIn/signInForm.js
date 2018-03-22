import React from 'react';


function signInForm(props) {
    return (
        <div className="outerSign">
            <form className="signForm" onSubmit={props.handleSubmit}>
                <div className="innerSign">
                    <h4 className="signTitle" >or</h4>
                    <h3 className="signTitle" >Log In</h3>
                    <input className="signUser"
                        onChange={props.handleChange}
                        value={props.username}
                        name="username"
                        type="text"
                        placeholder="Username" />
                    <br />
                    <input className="signPass"
                        onChange={props.handleChange}
                        value={props.password}
                        name="password"
                        type="password"
                        placeholder="Password" />
                    <br />
                    <button className="signButt" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default signInForm;