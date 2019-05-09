import * as React from "react";
import styled from "styled-components";

interface ILoginFormProps {}

interface ILoginFormValues {
    username: string;
    password: string;
}

interface ILoginFormState {
    values: ILoginFormValues;
}

const LoginContainer = styled.div`
    height: 120px;
    width: 175px;
    position: relative;
    top: 200px;
    margin: auto;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
`;

const LoginButton = styled.button`
    height: 21px;
    width: 100px;
    position: relative;
    left: 73px;
`;

const BackGroundContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    background-color: #80808030;
`;

class LoginForm extends React.Component<ILoginFormProps, ILoginFormState> {
    constructor(props: ILoginFormProps) {
        super(props);
        this.state = {
            values: {
                username: "",
                password: ""
            }
        };

        this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this);
    }

    public render(): React.ReactNode {
        return (
            <LoginContainer>
                Login <input name="username" onChange={this.onChange} value={this.state.values.username} />
                Password <input type="password" name="password" onChange={this.onChange} value={this.state.values.password} />
                <LoginButton onClick={this.login}>Login</LoginButton>
            </LoginContainer>
        );
    }

    private login() {
        console.log(`userName: ${this.state.values.username} password: ${this.state.values.password}`);
    }

    private onChange(event: any) {
        const { name, value } = event.target;
        this.onChangeValue(value, name);
    }

    private onChangeValue(value: string, name: keyof ILoginFormValues) {
        this.setState(pervState => ({
            values: {
                ...pervState.values,
                [name]: value
            }
        }));
    }
}

export { LoginForm };
