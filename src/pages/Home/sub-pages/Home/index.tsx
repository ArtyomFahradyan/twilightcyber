import React, { useState, KeyboardEvent } from "react";
import { useTranslation } from "react-i18next";
import { Button, DatePicker, notification, Spin } from "antd";
import { useBreakpoint } from "t-react-hooks";
import { TApiError, TLogObject } from "types";
import { isValidDomain } from "helpers";
import classNames from "classnames";
import { AxiosError } from "axios";
import { useRequest } from "hooks";
import { take } from "@constants";
import { getInfo } from "api";
import DataChart from "./components/DataChart";
import DataMap from "./components/DataMap";
import Search from "./components/Search";
import Tags from "./components/Tags";
import "./styles.scss";

const { RangePicker } = DatePicker;

function Home() {
  const { md } = useBreakpoint();
  const [api, contextHolder] = notification.useNotification();
  const { t } = useTranslation();
  const [domains, setDomains] = useState<string[]>([]);
  const [isInvalidDomain, setIsInvalidDomain] = useState(false);
  const [value, setValue] = useState("");
  const [date, setDate] = useState<[string, string]>(["", ""]);
  const [data, setData] = useState<TLogObject[]>([]);
  const [next, setNext] = useState("");

  const { run: runGetData, loading } = useRequest(getInfo, {
    onSuccess({ data, next }) {
      setData((d) => [...d, ...data]);
      setNext(next);
    },
    onError(err) {
      const axiosErr = err as AxiosError;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const e = axiosErr.response as TApiError;
      api.error({
        message: e?.error_message || axiosErr.message || t("wentWrong"),
        description: e?.details?.[0]?.msg || t("wentWrongPlease"),
        type: "error",
      });
    },
    manual: true,
  });

  const handleAddDomain = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      e.preventDefault(); // Ensure it is only this code that runs
      if (isValidDomain(value)) {
        setIsInvalidDomain(false);
        setDomains((domains) => [...domains, value]);
        setValue("");
      } else {
        setIsInvalidDomain(true);
      }
    }
  };

  const handleSearch = () => {
    runGetData({
      domains,
      infection_date_from: date[0],
      infection_date_to: date[1],
      size: take,
      ...(next ? { next } : {}),
    });
  };

  return (
    <div className="home">
      <div className="d-flex align-items-center justify-content-center">
        <div
          className={classNames("d-grid gap-2", {
            "w-50": md,
            "w-100": !md,
          })}
        >
          <Search
            handleSearch={handleSearch}
            handleAddDomain={handleAddDomain}
            isInvalidDomain={isInvalidDomain}
            value={value}
            setValue={setValue}
          />
          <Tags domains={domains} setDomains={setDomains} />
          <RangePicker onChange={(_, dateString) => setDate(dateString)} />
        </div>
      </div>

      <Spin spinning={loading}>
        {data.length ? <DataChart data={data} /> : null}
        {data.length ? <DataMap data={data} /> : null}
      </Spin>
      {data.length ? (
        <Button onClick={handleSearch} type="link" className="mt-5 " block>
          {t("loadMore")}
        </Button>
      ) : null}
      {contextHolder}
    </div>
  );
}

export default Home;
