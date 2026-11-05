export interface DateFieldProps {
  label: string;
  value: string; // ISO date 'YYYY-MM-DD, or '' when nothing is picked yet
  onChange: (value: string) => void;
  error?: string;
  minimumDate?: string; // ISO date, for example the start date on an end date field
  testID?: string;
}