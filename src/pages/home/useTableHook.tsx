import { useTranslation } from "react-i18next";
import useFetch from "../../hooks/useFetch";

const useTableHook = () => {
  const { t } = useTranslation("global");
  const { data, loading } = useFetch(
    "https://harry-potter-api.onrender.com/personajes"
  );

  const columns = [
    {
      title: t("table.image"),
      dataIndex: "avatar",
      key: "avatar",
      width: "68px",
    },
    {
      title: t("table.name"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("table.nickname"),
      dataIndex: "apodo",
      key: "apodo",
    },
    {
      title: t("table.actor"),
      dataIndex: "actor",
      key: "actor",
    },
  ];

  const getAvatar = (data) => (
    <img width={64} src={data.imagen} alt={data.name} />
  );

  const formatData = () => {
    if (!data) return [];

    return data.map((item) => {
      const { apodo, personaje: name, interpretado_por: actor } = item;

      return {
        name,
        apodo,
        actor,
        avatar: getAvatar(item),
      };
    });
  };

  return {
    loading,
    columns,
    data: formatData(),
  };
};

export default useTableHook;
