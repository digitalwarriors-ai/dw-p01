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
      leads: {
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
      pesquisa_old: {
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
      venda: {
        Row: {
          bairro: string | null
          canal_usado_para_venda: string | null
          cidade: string | null
          codigo_da_transacao: string | null
          codigo_de_cupom: string | null
          codigo_do_assinante: string | null
          codigo_do_preco: string | null
          codigo_do_produto: string | null
          codigo_postal: string | null
          codigo_sck: string | null
          codigo_src: string | null
          comissao_do_afiliado: number | null
          complemento: string | null
          comprador: string | null
          confirmacao_do_pagamento: string | null
          data: string
          data_da_transacao: string | null
          data_de_vencimento_vouchers: string | null
          documento: string | null
          email_do_comprador: string | null
          endereco: string | null
          estado_provincia: string | null
          faturamento_bruto_sem_impostos: number | null
          faturamento_do_coprodutor: number | null
          faturamento_liquido: number | null
          faturamento_liquido_do_produtor: number | null
          ferramenta_de_venda: string | null
          id: number
          imposto_sobre_servico_hotmart: string | null
          impostos_locais: string | null
          impostos_locais_de_compra_taxa_de_parcelamento: number | null
          instagram: string | null
          metodo_de_pagamento: string | null
          moeda_das_taxas: string | null
          moeda_de_compra: string | null
          moeda_de_recebimento: string | null
          motivo_de_recusa_de_cartao: string | null
          nome_deste_preco: string | null
          nome_do_afiliado: string | null
          numero: string | null
          outras_taxas: number | null
          pais: string | null
          periodo_gratuito_trial: string | null
          produto: string | null
          produtor: string | null
          quantidade_de_cobrancas: number | null
          quantidade_de_itens: number | null
          quantidade_total_de_parcelas: number | null
          status_da_transacao: string | null
          tax_collected: string | null
          tax_jurisdiction: string | null
          tax_solutions: string | null
          taxa_de_conversao_moeda_de_compra: number | null
          taxa_de_conversao_moeda_de_recebimento: number | null
          taxa_de_parcelamento: number | null
          taxa_de_processamento: number | null
          taxa_de_streaming: number | null
          telefone: string | null
          tipo_da_antecipacao_de_assinatura: string | null
          tipo_de_cobranca: string | null
          transacao_do_produto_principal: string | null
          valor_de_compra_com_impostos: number | null
          valor_de_compra_sem_impostos: number | null
          valor_do_frete_bruto: number | null
          venda_feita_como: string | null
        }
        Insert: {
          bairro?: string | null
          canal_usado_para_venda?: string | null
          cidade?: string | null
          codigo_da_transacao?: string | null
          codigo_de_cupom?: string | null
          codigo_do_assinante?: string | null
          codigo_do_preco?: string | null
          codigo_do_produto?: string | null
          codigo_postal?: string | null
          codigo_sck?: string | null
          codigo_src?: string | null
          comissao_do_afiliado?: number | null
          complemento?: string | null
          comprador?: string | null
          confirmacao_do_pagamento?: string | null
          data?: string
          data_da_transacao?: string | null
          data_de_vencimento_vouchers?: string | null
          documento?: string | null
          email_do_comprador?: string | null
          endereco?: string | null
          estado_provincia?: string | null
          faturamento_bruto_sem_impostos?: number | null
          faturamento_do_coprodutor?: number | null
          faturamento_liquido?: number | null
          faturamento_liquido_do_produtor?: number | null
          ferramenta_de_venda?: string | null
          id?: number
          imposto_sobre_servico_hotmart?: string | null
          impostos_locais?: string | null
          impostos_locais_de_compra_taxa_de_parcelamento?: number | null
          instagram?: string | null
          metodo_de_pagamento?: string | null
          moeda_das_taxas?: string | null
          moeda_de_compra?: string | null
          moeda_de_recebimento?: string | null
          motivo_de_recusa_de_cartao?: string | null
          nome_deste_preco?: string | null
          nome_do_afiliado?: string | null
          numero?: string | null
          outras_taxas?: number | null
          pais?: string | null
          periodo_gratuito_trial?: string | null
          produto?: string | null
          produtor?: string | null
          quantidade_de_cobrancas?: number | null
          quantidade_de_itens?: number | null
          quantidade_total_de_parcelas?: number | null
          status_da_transacao?: string | null
          tax_collected?: string | null
          tax_jurisdiction?: string | null
          tax_solutions?: string | null
          taxa_de_conversao_moeda_de_compra?: number | null
          taxa_de_conversao_moeda_de_recebimento?: number | null
          taxa_de_parcelamento?: number | null
          taxa_de_processamento?: number | null
          taxa_de_streaming?: number | null
          telefone?: string | null
          tipo_da_antecipacao_de_assinatura?: string | null
          tipo_de_cobranca?: string | null
          transacao_do_produto_principal?: string | null
          valor_de_compra_com_impostos?: number | null
          valor_de_compra_sem_impostos?: number | null
          valor_do_frete_bruto?: number | null
          venda_feita_como?: string | null
        }
        Update: {
          bairro?: string | null
          canal_usado_para_venda?: string | null
          cidade?: string | null
          codigo_da_transacao?: string | null
          codigo_de_cupom?: string | null
          codigo_do_assinante?: string | null
          codigo_do_preco?: string | null
          codigo_do_produto?: string | null
          codigo_postal?: string | null
          codigo_sck?: string | null
          codigo_src?: string | null
          comissao_do_afiliado?: number | null
          complemento?: string | null
          comprador?: string | null
          confirmacao_do_pagamento?: string | null
          data?: string
          data_da_transacao?: string | null
          data_de_vencimento_vouchers?: string | null
          documento?: string | null
          email_do_comprador?: string | null
          endereco?: string | null
          estado_provincia?: string | null
          faturamento_bruto_sem_impostos?: number | null
          faturamento_do_coprodutor?: number | null
          faturamento_liquido?: number | null
          faturamento_liquido_do_produtor?: number | null
          ferramenta_de_venda?: string | null
          id?: number
          imposto_sobre_servico_hotmart?: string | null
          impostos_locais?: string | null
          impostos_locais_de_compra_taxa_de_parcelamento?: number | null
          instagram?: string | null
          metodo_de_pagamento?: string | null
          moeda_das_taxas?: string | null
          moeda_de_compra?: string | null
          moeda_de_recebimento?: string | null
          motivo_de_recusa_de_cartao?: string | null
          nome_deste_preco?: string | null
          nome_do_afiliado?: string | null
          numero?: string | null
          outras_taxas?: number | null
          pais?: string | null
          periodo_gratuito_trial?: string | null
          produto?: string | null
          produtor?: string | null
          quantidade_de_cobrancas?: number | null
          quantidade_de_itens?: number | null
          quantidade_total_de_parcelas?: number | null
          status_da_transacao?: string | null
          tax_collected?: string | null
          tax_jurisdiction?: string | null
          tax_solutions?: string | null
          taxa_de_conversao_moeda_de_compra?: number | null
          taxa_de_conversao_moeda_de_recebimento?: number | null
          taxa_de_parcelamento?: number | null
          taxa_de_processamento?: number | null
          taxa_de_streaming?: number | null
          telefone?: string | null
          tipo_da_antecipacao_de_assinatura?: string | null
          tipo_de_cobranca?: string | null
          transacao_do_produto_principal?: string | null
          valor_de_compra_com_impostos?: number | null
          valor_de_compra_sem_impostos?: number | null
          valor_do_frete_bruto?: number | null
          venda_feita_como?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      view_conversao_por_curso_principal: {
        Row: {
          curso_principal: string | null
          taxa_conversao: number | null
          total_compradores: number | null
          total_respondentes: number | null
        }
        Relationships: []
      }
      view_conversao_por_renda: {
        Row: {
          media_salarial: string | null
          taxa_conversao: number | null
          total_compradores: number | null
          total_respondentes: number | null
        }
        Relationships: []
      }
      view_conversao_por_sexo: {
        Row: {
          sexo: string | null
          taxa_conversao: number | null
          total_compradores: number | null
          total_respondentes: number | null
        }
        Relationships: []
      }
      view_conversao_renda_sexo: {
        Row: {
          media_salarial: string | null
          receita_total: number | null
          sexo: string | null
          taxa_conversao: number | null
          ticket_medio: number | null
          total_compradores: number | null
          total_respondentes: number | null
        }
        Relationships: []
      }
      view_conversao_utm_por_lancamento: {
        Row: {
          lancamento: string | null
          receita_total: number | null
          taxa_conversao: number | null
          ticket_medio: number | null
          total_leads: number | null
          total_vendas: number | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_referralUrl: string | null
          utm_source: string | null
          utm_term: string | null
        }
        Relationships: []
      }
      view_conversao_utm_referral: {
        Row: {
          receita_total: number | null
          taxa_conversao: number | null
          ticket_medio: number | null
          total_leads: number | null
          total_vendas: number | null
          utm_referralUrl: string | null
        }
        Relationships: []
      }
      view_conversao_utm_source: {
        Row: {
          receita_total: number | null
          taxa_conversao: number | null
          ticket_medio: number | null
          total_leads: number | null
          total_vendas: number | null
          utm_source: string | null
        }
        Relationships: []
      }
      view_conversao_utm_term: {
        Row: {
          receita_total: number | null
          taxa_conversao: number | null
          ticket_medio: number | null
          total_leads: number | null
          total_vendas: number | null
          utm_term: string | null
        }
        Relationships: []
      }
      view_desempenho_detalhado_campanhas: {
        Row: {
          lancamento: string | null
          receita_total: number | null
          taxa_conversao: number | null
          tempo_medio_dias_ate_compra: number | null
          ticket_medio: number | null
          total_leads: number | null
          total_vendas: number | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_referralUrl: string | null
          utm_source: string | null
          utm_term: string | null
        }
        Relationships: []
      }
      view_leads_lancamento_diario: {
        Row: {
          data: string | null
          lancamento: string | null
          total_leads: number | null
        }
        Relationships: []
      }
      view_leads_lancamento_periodo: {
        Row: {
          lancamento: string | null
          total_leads: number | null
        }
        Relationships: []
      }
      view_leads_por_periodo: {
        Row: {
          data_dia: string | null
          mes: string | null
          semana_iso: string | null
          total_leads: number | null
        }
        Relationships: []
      }
      view_leads_resumo_periodo: {
        Row: {
          emails_unicos: number | null
          total_leads: number | null
        }
        Relationships: []
      }
      view_leads_utm_periodo: {
        Row: {
          total_leads: number | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_referralUrl: string | null
          utm_source: string | null
          utm_term: string | null
        }
        Relationships: []
      }
      view_leads_vendas_por_preco: {
        Row: {
          nome_deste_preco: string | null
          receita_total: number | null
          ticket_medio: number | null
          total_leads: number | null
          total_vendas: number | null
        }
        Relationships: []
      }
      view_motivo_inscricao_periodo: {
        Row: {
          motivo: string | null
          taxa_conversao: number | null
          total_leads: number | null
          total_vendas: number | null
        }
        Relationships: []
      }
      view_perfil_comprador: {
        Row: {
          curso_mais_desejado: string | null
          escola_predominante: string | null
          idade_media: number | null
          media_vezes_enem: number | null
          regiao_predominante: string | null
          sexo_predominante: string | null
        }
        Relationships: []
      }
      view_receita_detalhada_com_lancamento: {
        Row: {
          compradores_unicos: number | null
          lancamento: string | null
          maior_ticket: number | null
          menor_ticket: number | null
          primeira_venda: string | null
          receita_bruta: number | null
          receita_liquida: number | null
          receita_produtor: number | null
          ticket_medio_geral: number | null
          total_aprovadas: number | null
          total_canceladas: number | null
          total_comissao_afiliado: number | null
          total_pendentes: number | null
          total_taxas: number | null
          total_vendas: number | null
          ultima_venda: string | null
          vendas_boleto: number | null
          vendas_cartao: number | null
          vendas_pix: number | null
        }
        Relationships: []
      }
      view_renda_compradores: {
        Row: {
          media_salarial: string | null
          receita_total: number | null
          taxa_conversao: number | null
          ticket_medio: number | null
          total_compradores: number | null
          total_respondentes: number | null
        }
        Relationships: []
      }
      view_taxa_qualificacao_periodo: {
        Row: {
          respondeu_pesquisa: number | null
          taxa_qualificacao: number | null
          total_leads: number | null
        }
        Relationships: []
      }
      view_taxa_resposta_pesquisa_utm: {
        Row: {
          respondeu_pesquisa: number | null
          taxa_resposta_pesquisa: number | null
          total_leads: number | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_referralUrl: string | null
          utm_source: string | null
          utm_term: string | null
        }
        Relationships: []
      }
      view_tempo_ate_compra: {
        Row: {
          tempo_medio_dias: unknown | null
        }
        Relationships: []
      }
      view_utm_leads_vendas: {
        Row: {
          receita_total: number | null
          taxa_conversao: number | null
          ticket_medio: number | null
          total_leads: number | null
          total_vendas: number | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_referralUrl: string | null
          utm_source: string | null
          utm_term: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      get_column_frequency: {
        Args: {
          p_table_name: string
          p_column_name: string
          p_schema_name?: string
          p_limit?: number
        }
        Returns: {
          value: string
          frequency: number
        }[]
      }
      get_schema_info: {
        Args: { p_schema_name: string }
        Returns: {
          table_name: string
          schema_name: string
          row_count: number
        }[]
      }
      get_table_columns: {
        Args: { p_table_name: string; p_schema_name: string }
        Returns: {
          column_name: string
          data_type: string
          is_nullable: boolean
          column_default: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
