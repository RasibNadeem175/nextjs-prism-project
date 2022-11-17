import cx from 'classnames';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const SignIn: React.FC = () => {
    return (
      <main className={cx("form-signin","text-center","mt-5")}>
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className={cx("checkbox","mb-3")}>
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
      <style jsx>
         {`.form-signin {
           width: 100%;
         max-width: 330px;
         padding: 15px;
         margin: auto;
         }

         .form-signin .checkbox {
         font-weight: 400;
         }

         .form-signin .form-floating:focus-within {
         z-index: 2;
         }

         .form-signin input[type="email"] {
         margin-bottom: -1px;
         border-bottom-right-radius: 0;
         border-bottom-left-radius: 0;
         }

         .form-signin input[type="password"] {
         margin-bottom: 10px;
         border-top-left-radius: 0;
         border-top-right-radius: 0;
         }`}
      </style>
    </main>
    )
  }

  export default SignIn
  