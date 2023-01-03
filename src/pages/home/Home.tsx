import React from "react";
import Container from "../../components/container/Container";
import useTableHook from "./useTableHook";
import { Table } from "antd";
import { useTranslation } from "react-i18next";

const Home: React.FunctionComponent = () => {
  const { t } = useTranslation("global");
  const { columns, data, loading } = useTableHook();

  return (
    <Container>
      <h1>{t("title")}</h1>
      <Table bordered loading={loading} dataSource={data} columns={columns} />;
    </Container>
  );
};

export default Home;
