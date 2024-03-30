import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Jepo RPG'
    }
  },
  logo: (
    <>
      <Image src="/jeporpg.jpeg" alt="Hello" width={24} height={24} />
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Jepo RPG
      </span>
    </>
    ),
    toc: {
      title: "Nesta página",      
      backToTop: true,
    },
    editLink: {
      component: null,
    },
    feedback: {
      content: null
    },
    footer: {
      text: "Jepo RPG | Comitiva Escarlate"
    },
    themeSwitch: {
      useOptions() {
        return {
          light: 'Claro',
          dark: 'Escuro',
          system: 'Sistema'
        }
      }
    },
    search: {
      placeholder: "Pesquise..."
    }
}

export default config
