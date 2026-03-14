'use client';

import { useActionState } from 'react';
import { TextField, Button, Stack, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { createEntry } from './actions';
import { GuestbookFormState } from '@/lib/validations/contact';

const TEXT = {
  fieldName: 'Meno',
  fieldMessage: 'Správa',
  submitButton: 'Odoslať odkaz',
  successMessage: 'Odkaz bol úspešne odoslaný!',
};

const initialState: GuestbookFormState = {};

export default function GuestbookForm() {
  const [state, formAction, isPending] = useActionState(createEntry, initialState);

  return (
    <form action={formAction}>
      <Stack spacing={2}>
        {state.success && (
          <Alert severity="success">{TEXT.successMessage}</Alert>
        )}
        <TextField
          name="name"
          label={TEXT.fieldName}
          fullWidth
          variant="outlined"
          error={!!state.errors?.name}
          helperText={state.errors?.name?.[0]}
        />
        <TextField
          name="message"
          label={TEXT.fieldMessage}
          fullWidth
          multiline
          rows={3}
          variant="outlined"
          error={!!state.errors?.message}
          helperText={state.errors?.message?.[0]}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          size="large"
          loading={isPending}
        >
          {TEXT.submitButton}
        </Button>
      </Stack>
    </form>
  );
}
