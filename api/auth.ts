export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  nrc?: string;
  address?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  alternativePhone?: string;
  notes?: string;
  userType?: string;
  role?: string;
}

export const registerUser = async (data: RegisterPayload) => {
  const res = await fetch("http://localhost:8080/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || "Registration failed");
  }

  return res.json(); // expects { token: string }
};

export const loginUser = async (email: string, password: string) => {
  const res = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || "Login failed");
  }

  return res.json(); // expects { token: string }
};
