export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      base_unica: {
        Row: {
          created_at: string
          email: string | null
          id: number
          lancamento: string | null
          motivo: string | null
          nome: string | null
          telefone: string | null
          utm_campaign: string | null
          utm_content: string | null
          utm_headline: string | null
          utm_medium: string | null
          utm_referralUrl: string | null
          utm_source: string | null
          utm_term: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          lancamento?: string | null
          motivo?: string | null
          nome?: string | null
          telefone?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_headline?: string | null
          utm_medium?: string | null
          utm_referralUrl?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          lancamento?: string | null
          motivo?: string | null
          nome?: string | null
          telefone?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_headline?: string | null
          utm_medium?: string | null
          utm_referralUrl?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Relationships: []
      }
      pesquisa: {
        Row: {
          aluno: string | null
          animal: string | null
          area_dificuldade: string | null
          ciente_dataevento: string | null
          como_conhece: string | null
          como_teajudo: string | null
          confia_pedro: string | null
          conhece_enem: string | null
          curso: string | null
          curso_principal: string | null
          data: string | null
          dizer_algo: string | null
          email: string | null
          enem: string | null
          horas_estudo: string | null
          id: number
          idade: string | null
          lead_scoring: string | null
          media_salarial: string | null
          motivacao: string | null
          motivacao_maior: string | null
          oque_espera: string | null
          problema_aprovacao: string | null
          quanto_ser_aprovado: string | null
          regiao: string | null
          religiao: string | null
          rotina: string | null
          sexo: string | null
          sinceridade: string | null
          situacao: string | null
          superpoder: string | null
          tempo_conhece: string | null
          tipo_escola: string | null
        }
        Insert: {
          aluno?: string | null
          animal?: string | null
          area_dificuldade?: string | null
          ciente_dataevento?: string | null
          como_conhece?: string | null
          como_teajudo?: string | null
          confia_pedro?: string | null
          conhece_enem?: string | null
          curso?: string | null
          curso_principal?: string | null
          data?: string | null
          dizer_algo?: string | null
          email?: string | null
          enem?: string | null
          horas_estudo?: string | null
          id?: number
          idade?: string | null
          lead_scoring?: string | null
          media_salarial?: string | null
          motivacao?: string | null
          motivacao_maior?: string | null
          oque_espera?: string | null
          problema_aprovacao?: string | null
          quanto_ser_aprovado?: string | null
          regiao?: string | null
          religiao?: string | null
          rotina?: string | null
          sexo?: string | null
          sinceridade?: string | null
          situacao?: string | null
          superpoder?: string | null
          tempo_conhece?: string | null
          tipo_escola?: string | null
        }
        Update: {
          aluno?: string | null
          animal?: string | null
          area_dificuldade?: string | null
          ciente_dataevento?: string | null
          como_conhece?: string | null
          como_teajudo?: string | null
          confia_pedro?: string | null
          conhece_enem?: string | null
          curso?: string | null
          curso_principal?: string | null
          data?: string | null
          dizer_algo?: string | null
          email?: string | null
          enem?: string | null
          horas_estudo?: string | null
          id?: number
          idade?: string | null
          lead_scoring?: string | null
          media_salarial?: string | null
          motivacao?: string | null
          motivacao_maior?: string | null
          oque_espera?: string | null
          problema_aprovacao?: string | null
          quanto_ser_aprovado?: string | null
          regiao?: string | null
          religiao?: string | null
          rotina?: string | null
          sexo?: string | null
          sinceridade?: string | null
          situacao?: string | null
          superpoder?: string | null
          tempo_conhece?: string | null
          tipo_escola?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
