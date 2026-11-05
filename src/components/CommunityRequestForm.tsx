import {CommunityRequestDraft} from "@/types";
import {useState} from "react";
import {Validators} from "@/utils/validators";
import { Stack } from './primitives/Stack';
import {InputField} from "@/components/primitives";
import {StyledButton} from "@/components/StyledButton";


interface CommunityRequestFormProps {
  onSubmit: (draft: CommunityRequestDraft) => void;
}

export function CommunityRequestForm({ onSubmit }: CommunityRequestFormProps) {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState<string | undefined>('');
  const [startDateError, setStartDateError] = useState<string | undefined>('');
  const [endDateError, setEndDateError] = useState<string | undefined>('');

  const handleSubmit = () => {
    const nextTitleError = Validators.validateRequired(title, 'Enter what you need');
    const nextStartDateError = Validators.validateRequired(startDate, 'Enter a start date');
    const nextEndDateError = Validators.validateRequired(endDate, 'Enter a end date');
    setTitleError(nextTitleError);
    setStartDateError(nextStartDateError);
    setEndDateError(nextEndDateError);
    if (
      nextTitleError !== undefined ||
      nextStartDateError !== undefined ||
      nextEndDateError !== undefined
    ) {
      return;
    }

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      startDate: startDate.trim(),
      endDate: endDate.trim(),
    });
  };

  return (
    <Stack gap="lg">
      <InputField
        label="What do you need?"
        value={title}
        onChangeText={(text) => {
          setTitle(text);
          setTitleError(undefined);
        }}
        placeholder="A ladder"
        testID="request-title-input"
        error={titleError}
      />
      <InputField
        label="From"
        value={startDate}
        onChangeText={(text) => {
          setStartDate(text);
          setStartDateError(undefined);
        }}
        placeholder="YYYY-MM-DD"
        testID="request-start-input"
        error={startDateError}
      />
      <InputField
        label="Until"
        value={endDate}
        onChangeText={(text) => {
          setEndDate(text);
          setEndDateError(undefined);
        }}
        placeholder="YYYY-MM-DD"
        testID="request-end-input"
        error={endDateError}
      />
      <InputField
        label="Details (optional)"
        value={description}
        onChangeText={setDescription}
        placeholder="What will you use it for?"
        testID="request-description-input"
      />
      <StyledButton label="Post request" onPress={handleSubmit}testID="create-submit-request" />
    </Stack>
  );
}