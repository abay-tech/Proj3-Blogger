import classes from "./CreateUser.module.css"
export default function CreateUser(){
        return <div>
                Create user
                <form>
                    <div>
                        <div>email</div>
                        <input type="email"></input>
                    </div>
                    <div>
                        <div>password</div>
                        <input type="password"></input>
                    </div>
                    <div>
                        <div>re-enter password</div>
                        <input type="password"></input>
                    </div>
                    <button type="submit">Create Account</button>
                </form>
        </div>
}
