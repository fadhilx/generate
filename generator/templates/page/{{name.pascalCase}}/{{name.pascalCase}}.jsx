import React from "react";
// import PropTypes from "prop-types";
import ".//*{*/arg0.pascalCase\*}*\.scss";
import MainLayout from "src/components/layouts/MainLayout/MainLayout";
import AppBar from "src/components/organisms/AppBar/AppBar";
import { Button, Link, ButtonGroup, Box } from "@chakra-ui/core";
import { Link as ReachLink } from "react-router-dom";

const /*{*/arg0.pascalCase\*}*\ = () => (
  <MainLayout>
    <AppBar></AppBar>
    <Box width="100%" p={4}>
      <div className="/*{*/arg0.pascalCase\*}*\" data-testid="/*{*/arg0.pascalCase\*}*\">
        /*{*/arg0.pascalCase\*}*\ Component
        <br />
        <ButtonGroup>
          <Link as={ReachLink} to="/User Dashboard">
            <Button variantColor="green">User Dashboard</Button>
          </Link>
        </ButtonGroup>
      </div>
    </Box>
  </MainLayout>
);

/*{*/arg0.pascalCase\*}*\.propTypes = {};

/*{*/arg0.pascalCase\*}*\.defaultProps = {};

export default /*{*/arg0.pascalCase\*}*\;
