import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { User, Student, Instructor, Admin, UserRole } from "@/types/users";

interface UserContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  userRole: UserRole | null;
  isStudent: boolean;
  isInstructor: boolean;
  isAdmin: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for existing user session
    const studentUser = localStorage.getItem("studentUser");
    const adminUser = localStorage.getItem("adminUser");
    const instructorUser = localStorage.getItem("instructorUser");

    if (studentUser) {
      const parsed = JSON.parse(studentUser);
      setCurrentUser({
        id: "student-1",
        name: parsed.name,
        email: parsed.email,
        role: "student"
      });
    } else if (adminUser) {
      const parsed = JSON.parse(adminUser);
      setCurrentUser({
        id: "admin-1",
        name: parsed.name,
        email: parsed.email,
        role: "admin"
      });
    } else if (instructorUser) {
      const parsed = JSON.parse(instructorUser);
      setCurrentUser({
        id: "instructor-1",
        name: parsed.name,
        email: parsed.email,
        role: "instructor"
      });
    }
  }, []);

  const userRole = currentUser?.role || null;
  const isStudent = userRole === "student";
  const isInstructor = userRole === "instructor";
  const isAdmin = userRole === "admin";

  return (
    <UserContext.Provider value={{
      currentUser,
      setCurrentUser,
      userRole,
      isStudent,
      isInstructor,
      isAdmin
    }}>
      {children}
    </UserContext.Provider>
  );
};