import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-rows: 55px 1fr;
`;

const Header = styled.div`
    display: grid;
    grid-template-columns: 190px auto;
    border: 1px solid #cccccc;
    padding: 15px 0px 15px 8px;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 1;
`;

class Layout extends React.PureComponent {
    public render(): React.ReactNode {
        return (
            <Container>
                <Header>
                    <div>logo</div>
                </Header>
                {this.props.children}
            </Container>
        );
    }
}

export default Layout;
