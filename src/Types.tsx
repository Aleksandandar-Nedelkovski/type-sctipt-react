import { IPersonState } from "./State"
import { RecordState } from "./RecordState";

export type PersonRecord = RecordState & IPersonState;
export type StringOrNull = string | null;