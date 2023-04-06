import React from "react";

const QuinkLink = {
  // IME: {
  //   local: "https://iemanuel.com.br/",
  //   alt: "IME - Deus Conosco!",
  //   title: "IME"
  // },
  IMEALVORADARS: {
    local: "https://emanuelalvorada.com.br/",
    alt: "IME - Alvorada/RS",
    title: "IME - Alvorada/RS",
  },
  GCS: {
    local: "https://gc.iemanuel.com.br/",
    alt: "Grupos Caseiros",
    title: "GC'S",
  },
};

export function SobHeader() {
  return (
    <section className="_sob">
      <nav>
        {Object.entries(QuinkLink).map(([key, value]) => {
          return (
            <>
              <a
                key={key}
                href={value.local}
                title={value.alt}
                target="_blank"
                rel="noopener noreferrer"
              >
                {value.title}
              </a>
            </>
          );
        })}
      </nav>
      <a href="https://iemanuel.com.br/deus_conosco" target="_blank" rel="noopener noreferrer">Deus Conosco!</a>
    </section>
  );
}
