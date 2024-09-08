import React, { ChangeEvent, KeyboardEvent } from "react";
import Input from "antd/es/input/Input";
import { Button, Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Text } = Typography;

type Props = {
  value: string;
  setValue: (v: string) => void;
  handleSearch: () => void;
  isInvalidDomain: boolean;
  handleAddDomain: (e: KeyboardEvent<HTMLInputElement>) => void;
};

function Search({
  value,
  isInvalidDomain,
  handleSearch,
  setValue,
  handleAddDomain,
}: Props) {
  const { t } = useTranslation();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <div className="d-flex gap-2">
      <Input
        value={value}
        size="large"
        onKeyDown={handleAddDomain}
        onChange={handleInputChange}
        placeholder={t("enterDomainNames")}
      />
      {isInvalidDomain ? (
        <Text type="danger">{t("invalidDomainName")}</Text>
      ) : null}
      <Button size="large" onClick={handleSearch}>
        {t("search")}
      </Button>
    </div>
  );
}

export default Search;
