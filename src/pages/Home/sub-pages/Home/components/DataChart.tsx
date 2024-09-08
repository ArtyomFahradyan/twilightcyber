import React from "react";
import { PieChart, Pie, Cell, LabelList, Tooltip } from "recharts";
import { TAny, TLogObject } from "types";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: TAny) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

type Props = {
  data: TLogObject[];
};

function groupByStealerType(logs: TLogObject[]) {
  const countMap: Record<string, number> = {};

  logs.forEach((log: TLogObject) => {
    const name = log.stealer_type;
    if (countMap[name]) {
      countMap[name] += 1;
    } else {
      countMap[name] = 1;
    }
  });

  // Convert the result into the desired array format
  return Object.keys(countMap).map((stealerType: string) => ({
    name: stealerType,
    value: countMap[stealerType],
  }));
}

export default function DataChart({ data }: Props) {
  const { t } = useTranslation();
  const mapData = groupByStealerType(data);

  return (
    <div className="chart-wrapper d-flex align-items-center justify-content-center">
      <div className="d-grid">
        <div className="d-flex align-items-center justify-content-center">
          <Title level={5}>{t("typesOfVulnerabilities")}</Title>
        </div>
        <PieChart width={400} height={400}>
          <Pie
            data={mapData}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
            <LabelList dataKey="name" position="outside" />
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}
