export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export type Database = {
  public: {
    Tables: {
      enrollments: {
        Row: {
          id: number;
          student_id: number;
          program_id: number;
          approved: boolean;
          created_at: string;
        };
        Insert: {
          student_id: number;
          program_id: number;
          approved?: boolean;
          created_at?: string;
        };
        Update: {
          student_id?: number;
          program_id?: number;
          approved?: boolean;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "enrollments_program_id_fkey";
            columns: ["program_id"];
            referencedRelation: "school_programs";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "enrollments_student_id_fkey";
            columns: ["student_id"];
            referencedRelation: "students";
            referencedColumns: ["id"];
          }
        ];
      };
      school_programs: {
        Row: {
          id: number;
          name: string;
          description: string;
          created_at: string;
          // Add other fields here if you have them
        };
        Insert: {
          name: string;
          description?: string;
          created_at?: string;
        };
        Update: {
          name?: string;
          description?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      students: {
        Row: {
          id: number;
          full_name: string;
          email: string;
          auth_id: string;
          created_at: string;
          // Add other fields if any
        };
        Insert: {
          full_name: string;
          email: string;
          auth_id: string;
          created_at?: string;
        };
        Update: {
          full_name?: string;
          email?: string;
          auth_id?: string;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
    CompositeTypes: {};
  };
};
