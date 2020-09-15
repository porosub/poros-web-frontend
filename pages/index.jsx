import React from "react";
import Main from "../containers/Layouts/Main/Main";
import PageName from '../components/PageName/PageName';

const Home = () => (
  <Main title="POROS Admin | Dashboard">
    <PageName pageName="Dashboard" inclUser username="James"/>
  </Main>
);

export default Home;
