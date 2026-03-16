'use client';

import { useActionState } from 'react';
import { TextField, Button, Stack, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { createEntry } from './actions';
import { GuestbookFormState } from '@/lib/validations/contact';
import { useTranslations } from 'next-intl';

const initialState: GuestbookFormState = {};

export default function GuestbookForm() {
  const t = useTranslations('guestbookForm');
  const [state, formAction, isPending] = useActionState(createEntry, initialState);

  return (
    <form action={formAction}>
      <Stack spacing={2}>
        {state.success && (
          <Alert severity="success">{t('successMessage')}</Alert>
        )}
        <TextField
          name="name"
          label={t('fieldName')}
          fullWidth
          variant="outlined"
          error={!!state.errors?.name}
          helperText={state.errors?.name?.[0]}
        />
        <TextField
          name="message"
          label={t('fieldMessage')}
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
          {t('submitButton')}
        </Button>
      </Stack>
    </form>
  );
}
