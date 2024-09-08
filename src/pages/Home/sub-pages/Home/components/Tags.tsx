import React from "react";
import Tag from "antd/es/tag";

type Props = {
  domains: string[];
  setDomains: (v: string[]) => void;
};

function Tags({ domains, setDomains }: Props) {
  const handleClose = (removedTag: string) => {
    const newTags = domains.filter((tag) => tag !== removedTag);
    setDomains(newTags);
  };
  return (
    <div>
      {domains.map((domain, i) => (
        <Tag
          key={domain + i}
          closable
          onClose={(e) => {
            e.preventDefault();
            handleClose(domain);
          }}
        >
          {domain}
        </Tag>
      ))}
    </div>
  );
}

export default Tags;
