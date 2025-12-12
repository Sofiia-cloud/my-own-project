import { useFormik } from 'formik';
import { useState } from 'react';

import { Input } from '../../components/Input';
import { Segment } from '../../components/Segment';
import { Textarea } from '../../components/Textarea';
import { trpc } from '../../lib/trpc';

export const NewIdeaPage = () => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [submittingError, setSubmittingError] = useState<null | string>(null);
  const createIdea = trpc.createIdea.useMutation();
  const formik = useFormik({
    initialValues: {
      name: '',
      nick: '',
      description: '',
      text: '',
    },
    validate: (values) => {
      const errors: Partial<typeof values> = {};
      if (!values.name) {
        errors.name = 'Name is required!';
      }
      if (!values.nick) {
        errors.nick = 'Nick is required!';
      } else if (!values.nick.match(/^[a-z0-9-]+$/)) {
        errors.nick = 'Nick contains only lowercase letters, numbers and dashes!';
      }
      if (!values.description) {
        errors.description = 'Description is required!';
      }
      if (!values.text) {
        errors.text = 'Text is required!';
      } else if (values.text.length < 100) {
        errors.text = 'The length of the text must be at least 100 characters!';
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await createIdea.mutateAsync(values);
        formik.resetForm();
        setSuccessMessageVisible(true);
        setTimeout(() => {
          setSuccessMessageVisible(false);
        }, 3000);
      } catch (error: any) {
        setSubmittingError(error.message);
        setTimeout(() => {
          setSubmittingError(null);
        }, 3000);
      }
    },
  });

  return (
    <Segment title="New Idea">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Input name="name" label="Name" formik={formik} />
        <Input name="nick" label="Nick" formik={formik} />
        <Input name="description" label="Description" formik={formik} />
        <Textarea name="text" label="Text" formik={formik} />
        {!formik.isValid && !!formik.submitCount && (
          <div style={{ color: 'red', marginBottom: '10px' }}>Some fields are invalid</div>
        )}
        {!!submittingError && <div style={{ color: 'red', marginBottom: '10px' }}>{submittingError}</div>}
        {successMessageVisible && (
          <div style={{ color: 'green', marginBottom: '10px' }}>Idea created successfully!</div>
        )}
        <button type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Sending...' : 'Create Idea'}
        </button>
      </form>
    </Segment>
  );
};
