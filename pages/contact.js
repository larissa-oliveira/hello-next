import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Contato = styled.h1`
    text-align: center;
`;

const Contact = () => {
    return(
        <Layout>
            <div>
                <h1>Contact</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas porro maiores doloribus dicta et exercitationem illo sequi consectetur velit, eius cumque veniam sapiente consequuntur explicabo facilis, suscipit perspiciatis ipsa dolorem?</p>
            </div>
        </Layout>
    );
};

export default Contact;