import React, { useState } from 'react';
import { useForm } from '@tanstack/react-form';
import Answer from './Answer';
import { ImageIcon } from '@radix-ui/react-icons';
import { cn } from '@/utils/helpers';
import ParagraphLoadingSkeleton from '@/components/ParagraphLoadingSkeleton';

interface FormInput {
  question: string;
  answer: string;
  image: string;
}

export default function FirstTask() {
  const [enhancedAnswer, setEnhancedAnswer] = useState<string>('');
  const [previewImage, setPreviewImage] = useState<string>('');

  const form = useForm<FormInput>({
    onSubmit: async ({ value }) => {
      const res = await fetch('/api/improve/first-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });

      const { data } = await res.json();

      setEnhancedAnswer(data);
    },
    defaultValues: {
      question: '',
      answer: '',
      image: '',
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };
  return (
    <div>
      <form
        className="flex flex-col items-center gap-10"
        onSubmit={handleSubmit}
      >
        <form.Field
          name="question"
          children={(field) => (
            <div className="form-field">
              <textarea
                id="question"
                className="input"
                rows={5}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter requirements..."
              />
            </div>
          )}
        />

        <form.Field
          name="answer"
          children={(field) => (
            <div className="form-field">
              <textarea
                id="answer"
                className="input"
                rows={10}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter your answer..."
              />
            </div>
          )}
        />

        <form.Field
          name="image"
          children={(field) => (
            <div
              className={cn('form--field', {
                hidden: Boolean(previewImage),
              })}
            >
              <div className="flex flex-col justify-center items-center">
                <label htmlFor="image" className="icon-button ">
                  <ImageIcon height={50} width={50} />
                </label>
                <span className="block my-2 text-gray-500">Upload Image</span>
              </div>
              <input
                id="image"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = () => {
                      const base64String = reader.result as string;
                      field.handleChange(base64String);
                      setPreviewImage(base64String);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </div>
          )}
        />

        {previewImage && (
          <div className="w-52">
            <img alt="preview-image" src={previewImage} />
          </div>
        )}

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={!canSubmit}
                className="button--primary"
              >
                {isSubmitting ? '...' : 'Go'}
              </button>
              <button
                type="reset"
                onClick={() => form.reset()}
                className="button--secondary"
              >
                Clear
              </button>
            </div>
          )}
        />
      </form>

      {form.state.isSubmitting && <ParagraphLoadingSkeleton />}
      <Answer content={enhancedAnswer} />
    </div>
  );
}
