const requiredTextField = (fieldName: string, fieldValue: string) => {
    if (fieldValue.trim() === "") {
      return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return "Invalid characters";
    }
    return null;
  };

const nameValidation = (fieldName: string, fieldValue: string) => {
    if (fieldValue.trim() === "") {
      return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return "Invalid characters";
    }
    if (fieldValue.trim().length < 3) {
      return `${fieldName} needs to be at least three characters`;
    }
    return null;
  };
  
const emailValidation = (email: string) => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return null;
    }
    if (email.trim() === "") {
      return "Email is required";
    }
    return "Please enter a valid email";
  };

const ageValidation = (age: number, under: number, over: number) => {
    if (!age) {
      return "Age is required";
    }
    if (age < under) {
      return `Age must be at least ${under}`;
    }
    if (age > over) {
      return `Age must be under ${over}`;
    }
    return null;
  };
  
  export { requiredTextField, nameValidation, emailValidation, ageValidation}