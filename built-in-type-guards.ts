let value:
  | Date
  | null
  | undefined
  | "pineapple"
  | [number]
  | { dateRange: [Date, Date] };

if (value instanceof Date) {
  let value: Date;
} else if (typeof value === "string") {
  let value: "pineapple";
} else if (value === null) {
  let value: null;
} else if (!value) {
  let value: undefined;
} else if (Array.isArray(value)) {
  let value: [number];
} else if ("dateRange" in value) {
  let value: {
    dateRange: [Date, Date];
  };
} else {
  let value: never;
}
