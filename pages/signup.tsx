import cx from 'classnames';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const SignUp: React.FC = () => {
    return (
      <main className={cx("form-signin","text-center","mt-5")}>
      <form>
        <h1 className="h3 mb-3 fw-normal">Sign up</h1>
                    
        <div className="form-floating">
          <input required type="text" className="form-control" id="floatingUserNameInput" placeholder="Username" />
          <label htmlFor="floatingUserNameInput">Username</label>
        </div>
        <div className="form-floating">
          <input required type="email" className="form-control" id="floatingEmailInput" placeholder="name@example.com" />
          <label htmlFor="floatingEmailInput">Email address</label>
        </div>
        <div className="form-floating">
          <input required type="password"  pattern="[a-z0-9]{1,15}" minLength={10} maxLength={40} title="Password should be only digits (0 to 9) or alphabets (a to z)."className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
          <input required type="password" className="form-control" id="floatingConfirmPassword" placeholder="Password"/>
          <label htmlFor="floatingConfirmPassword">Confirm Password</label>
        </div>
        <div className="form-floating">
          <input required type="date" className="form-control" id="floatingDOB" placeholder="MM-DD-YYYY" />
          <label htmlFor="floatingDOB">Date of Birth</label>
        </div>
        <div className="form-floating">
         <select className="form-select" id="floatingGenderSelect" aria-label="gender select field">
            <option selected>Unspecified</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
         </select>
         <label htmlFor="floatingGenderSelect">Gender</label>
         </div>

        <div className={cx("checkbox","mb-3")}>
          <label>
            <input required type="checkbox" value="Agree" /> Agree to terms of service
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
      <div> <Link href="/signin">Sign in</Link> instead</div>
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

         .form-signin input {
         margin-bottom: -1px;
         border-bottom-right-radius: 0;
         border-bottom-left-radius: 0;
         }

      .form-signin #floatingGenderSelect {
         margin-bottom: 10px;
         border-top-left-radius: 0;
         border-top-right-radius: 0;
         }
         `}
      </style>
    </main>
    )
  }

  export default SignUp
  