import { Helmet } from "react-helmet-async";

export const HelmetTitle = ({ title }: { title: string }) => {
  return (
    <>
      <Helmet>
        <title>POLO | {title}</title>
      </Helmet>
    </>
  );
};
