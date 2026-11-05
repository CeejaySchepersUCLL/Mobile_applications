import { useState } from 'react';
import { ListingCategory } from '@/types';
import type { ListingDraft } from '@/types';
import { Validators } from '@/utils/validators';
import { Chip } from './primitives/Chip';
import { InputField } from './primitives/InputField';
import { Row } from './primitives/Row';
import { Stack } from './primitives/Stack';
import { Text } from './primitives/Text';
import { StyledButton } from './StyledButton'

const CATEGORY_LABELS : Record<ListingCategory, string> = {
  [ListingCategory.Tools]: 'Tools',
  [ListingCategory.Gardening]: 'Gardening',
  [ListingCategory.Outdoors]: 'Outdoors',
  [ListingCategory.Electronics]: 'Electronics',
};

const CATEGORIES: ListingCategory[] = Object.values(ListingCategory);

interface ListingFormProps {
  onSubmit: (draft: ListingDraft) => void;
}

export function ListingForm({ onSubmit }: ListingFormProps) {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<ListingCategory>(ListingCategory.Tools);
  const [titleError, setTitleError] = useState<string | undefined>('');
  const [descriptionError, setDescriptionError] = useState<string | undefined>('');

  const handleSubmit = () => {
    const nextTitleError = Validators.validateRequired(title, 'Enter a Title');
    const nextDescriptionError = Validators.validateRequired(description, 'Enter a Description');
    setTitleError(nextTitleError);
    setDescriptionError(nextDescriptionError);
    if (nextTitleError !== undefined || nextDescriptionError !== null) return;

    onSubmit({title: title.trim(), description: description.trim(), category})
  };

  return (
    <Stack gap="lg">
      <InputField
        label="Title"
        value={title}
        onChangeText={(text) => {
          setTitle(text);
          setTitleError(undefined);
        }}
        placeholder="Cordless drill"
        testID="listing-title-input"
        error={titleError}
      />
      <InputField
        label="Description"
        value={description}
        onChangeText={(text) => {
          setDescription(text);
          setDescriptionError(undefined);
        }}
        placeholder="Brand, condition, what is included"
        testID="listing-description-input"
        error={descriptionError}
      />
      <Stack gap="sm">
        <Text weight="medium" color="muted">Category</Text>
        <Row gap="sm" wrap>
          {CATEGORIES.map((option) => (
            <Chip
              key={option}
              label={CATEGORY_LABELS[option]}
              selected={option === category}
              onPress={() => setCategory(option)}
              testID={`create-category-${option}`}
            />
          ))}
        </Row>
        <StyledButton label="List item" onPress={handleSubmit} testID="create-submit-listing" />
      </Stack>

    </Stack>
  );
}