import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

/* ================= TYPES ================= */

type User = {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  role?: string;
  userType?: string;
};

type RegisterData = {
  // Step 1
  phone?: string;

  // Step 2
  otp?: string;

  // Step 3
  firstName?: string;
  lastName?: string;
  email?: string;
  nrc?: string;
  password?: string;

  // Step 4
  address?: string;
  city?: string;
  province?: string;
  postalCode?: string;
  alternativePhone?: string;
  notes?: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  loading: boolean;

  // Auth
  login: (token: string, userData?: User) => Promise<void>;
  logout: () => Promise<void>;

  // Registration
  registerData: RegisterData;
  setRegisterData: React.Dispatch<React.SetStateAction<RegisterData>>;
  clearRegisterData: () => void;
};

/* ================= CONTEXT ================= */

const AuthContext = createContext<AuthContextType | null>(null);

/* ================= HOOK ================= */

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};

/* ================= PROVIDER ================= */

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [registerData, setRegisterData] = useState<RegisterData>({});

  /* ================= LOAD AUTH ================= */

  useEffect(() => {
    const loadAuth = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("token");
        const storedUser = await AsyncStorage.getItem("user");

        if (storedToken) {
          setToken(storedToken);

          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }
        }
      } catch (err) {
        console.log("Auth load error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadAuth();
  }, []);

  /* ================= LOGIN ================= */

  const login = async (token: string, userData?: User) => {
    try {
      await AsyncStorage.setItem("token", token);

      if (userData) {
        await AsyncStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
      }

      setToken(token);
    } catch (err) {
      console.log("Login error:", err);
    }
  };

  /* ================= LOGOUT ================= */

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user");

      setToken(null);
      setUser(null);

      clearRegisterData();
    } catch (err) {
      console.log("Logout error:", err);
    }
  };

  /* ================= CLEAR REGISTRATION ================= */

  const clearRegisterData = () => {
    setRegisterData({});
  };

  /* ================= PROVIDER ================= */

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
        registerData,
        setRegisterData,
        clearRegisterData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
