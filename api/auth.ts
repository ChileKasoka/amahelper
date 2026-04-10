// types/payload.ts

/* ================= USER TYPE CONSTANTS ================= */
export type UserType =
  | "CLIENT"
  | "CLEANER"
  | "COMPANY_ADMIN"
  | "USER"
  | "PLATFORM_ADMIN";

export type RoleType = "CLIENT" | "CLEANER" | "ADMIN" | "MANAGER" | "SUPPORT";

/* ================= CLIENT PAYLOAD ================= */
export interface ClientPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  phone?: string;
  alternativePhone?: string;

  nrc: string;

  address: string;
  city: string;
  province: string;
  postalCode?: string;

  latitude?: number;
  longitude?: number;

  clientType?: string;
  notes?: string;

  companyId?: string;

  userType: "CLIENT";
  role: "CLIENT";
}

/* ================= CLEANER PAYLOAD ================= */
export interface CleanerPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  phone?: string;
  nrc: string;

  gender: "MALE" | "FEMALE";
  employmentType: "FULL_TIME" | "PART_TIME";

  services: string[];

  baseSalary?: number;
  commissionRate?: number;

  address: string;

  companyId?: string;

  userType: "CLEANER";
  role: "CLEANER";
}

/* ================= COMPANY PAYLOAD ================= */
export interface CompanyPayload {
  companyName: string;
  companyType: "PRIVATE" | "GOVERNMENT" | "NGO";

  registrationNumber: string;
  companyEmail: string;
  companyPhone: string;
  companyAddress: string;

  adminFirstName: string;
  adminLastName: string;
  adminEmail: string;
  adminPassword: string;

  adminPhone?: string;
  adminNrc?: string;

  latitude?: number;
  longitude?: number;

  userType: "COMPANY_ADMIN";
  role: "ADMIN";
}

/* ================= UNION ================= */
export type RegisterPayload = ClientPayload | CleanerPayload | CompanyPayload;

/* ================= API ================= */

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const registerUser = async (data: RegisterPayload) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseText = await res.text();

  console.log("REGISTER PAYLOAD:", JSON.stringify(data, null, 2));
  console.log("REGISTER STATUS:", res.status);
  console.log("REGISTER RESPONSE:", responseText);

  if (!res.ok) {
    throw new Error(responseText || "Registration failed");
  }

  try {
    return responseText ? JSON.parse(responseText) : {};
  } catch {
    return { message: responseText };
  }
};

export const loginUser = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const responseText = await res.text();

  if (!res.ok) {
    throw new Error(responseText || "Login failed");
  }

  return responseText;
};
