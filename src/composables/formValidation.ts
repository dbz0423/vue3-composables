import { ref, reactive } from "vue";

interface Rule {
  (value: string): boolean;
}

interface FormRules {
  [field: string]: Rule;
}

interface FormState {
  form: { [field: string]: string };
  errors: { [field: string]: string };
  isValid: boolean;
}

export function useFormValidation(rules: FormRules) {
  const formState = reactive<FormState>({
    form: {},
    errors: {},
    isValid: true,
  });

  const validateField = (field: string, value: string) => {
    const rule = rules[field];
    if (rule) {
      formState.errors[field] = rule(value) ? "" : "不符合规定";
      formState.isValid = Object.keys(formState.errors).every(
        (key) => formState.errors[key] === ""
      );
    }
  };

  const validateForm = () => {
    for (const field in rules) {
      if (formState.form[field] === undefined) formState.form[field] = "";
      validateField(field, formState.form[field]);
    }
  };

  const setFieldValue = (field: string, value: string) => {
    formState.form[field] = value;
    validateField(field, value);
  };

  return { formState, setFieldValue, validateForm };
}
