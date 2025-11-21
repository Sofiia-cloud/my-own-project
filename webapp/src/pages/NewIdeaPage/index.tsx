import { useFormik } from 'formik';

import { Input } from '../../components/Input';
import { Segment } from '../../components/Segment';
import { Textarea } from '../../components/Textarea';

export const NewIdeaPage = () => {
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
    onSubmit: (values) => {
      console.info('Submitted', values);
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
        <button type="submit">Create Idea</button>
      </form>
    </Segment>
  );
};
