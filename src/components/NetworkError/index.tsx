import React from "react";
import { useTranslation } from "react-i18next";
import { BAD_REQUEST, FORBIDDEN, NOT_FOUND, UNAUTHORIZED } from "@constants";
import { TAny } from "types";

type Props = {
  message?: string;
  localized?: boolean;
};

function NetworkError({ message = "badRequest", localized = false }: Props) {
  const { t } = useTranslation();

  return <>{localized ? message : t(`networkError.${message}`)}</>;
}

function networkErrorNotification(
  error: number,
  messages?: TAny,
  duration = 3000,
  type: TAny = "error"
) {
  let translationKey = "";
  switch (error) {
    case BAD_REQUEST:
      if (messages?.messages?.length) {
        const message = messages?.messages?.join("\n");
      }
      return;

    case UNAUTHORIZED:
    case FORBIDDEN:
      translationKey = "unauthorized";
      break;

    case NOT_FOUND:
      translationKey = "notFound";
      break;

    default:
      translationKey = "unknown";
      break;
  }
}

export default networkErrorNotification;
