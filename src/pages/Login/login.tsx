import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/button";

export default function Login() {
    const navigate = useNavigate();

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center vh-100">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-5">
                        <div className="card shadow">
                            <div className="card-body p-4">

                                <h2 className="text-center mb-4">
                                    Login
                                </h2>

                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Username
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label">
                                            Password
                                        </label>

                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                    </div>

                                    <Button type='submit' onCLick={() => navigate('./Dashboard/')}>Login</Button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 