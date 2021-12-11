import React from "react";
import ContentLoader from "react-content-loader";

const CardLoader = () => {
  return (
    <ContentLoader
    speed={2}
    width={300}
    height={400}
    style={{margin:5}}
    viewBox="0 0 250 300"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="4" rx="3" ry="3" width="350" height="170" />
    <rect x="0" y="180" rx="3" ry="3" width="88" height="8"/>
    <rect x="0" y="195" rx="3" ry="3" width="350" height="8" />
    <rect x="0" y="210" rx="3" ry="3" width="150" height="8" />
    <rect x="0" y="240" rx="3" ry="3" width="50" height="8" />
    <rect x="10" y="270" rx="3" ry="3" width="220" height="40" />
  </ContentLoader>
  );
};

export default CardLoader;
