import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceDot } from "recharts";

const data = [
  { year: "2002", rate: 78.2 },
  { year: "2004", rate: 79.1 },
  { year: "2006", rate: 82.4 },
  { year: "2008", rate: 89.7 },
  { year: "2010", rate: 92.3 },
  { year: "2012", rate: 95.8 },
  { year: "2014", rate: 98.2 },
  { year: "2016", rate: 101.4 },
  { year: "2018", rate: 108.6 },
  { year: "2020", rate: 115.2 },
  { year: "2022", rate: 132.4 },
  { year: "2024", rate: 145.2 },
];

const events = [
  { year: "2002", rate: 78.2, label: "Newton Born" },
  { year: "2008", rate: 89.7, label: "Elections Crisis" },
  { year: "2010", rate: 92.3, label: "New Constitution" },
  { year: "2020", rate: 115.2, label: "COVID-19" },
  { year: "2024", rate: 145.2, label: "Present" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.[0]) {
    const d = payload[0].payload;
    return (
      <div className="glass-card px-3 py-2 text-xs">
        <p className="font-heading font-semibold text-foreground">{d.year}</p>
        <p className="text-primary">KES {d.rate}</p>
      </div>
    );
  }
  return null;
};

const MiniChart = () => (
  <ResponsiveContainer width="100%" height={220}>
    <LineChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: -20 }}>
      <XAxis dataKey="year" tick={{ fontSize: 10, fill: "hsl(215 15% 55%)" }} axisLine={false} tickLine={false} />
      <YAxis tick={{ fontSize: 10, fill: "hsl(215 15% 55%)" }} axisLine={false} tickLine={false} domain={[70, 155]} />
      <Tooltip content={<CustomTooltip />} />
      <Line
        type="monotone"
        dataKey="rate"
        stroke="hsl(38 92% 50%)"
        strokeWidth={2}
        dot={false}
        activeDot={{ r: 5, fill: "hsl(38 92% 50%)" }}
      />
      {events.map((e, i) => (
        <ReferenceDot key={i} x={e.year} y={e.rate} r={4} fill="hsl(38 92% 50%)" stroke="hsl(216 50% 10%)" strokeWidth={2} />
      ))}
    </LineChart>
  </ResponsiveContainer>
);

export default MiniChart;
