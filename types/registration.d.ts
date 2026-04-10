// types/registration.ts
import { Dispatch, SetStateAction } from "react";

export interface StepProps {
  next?: () => void; // optional because last step might not have next
  back?: () => void; // optional because first step might not have back
  formData: any; // or a proper type if you have one
  setFormData: Dispatch<SetStateAction<any>>;
  onSubmit?: () => void; // only for last step
  loading?: boolean; // only for last step
}
