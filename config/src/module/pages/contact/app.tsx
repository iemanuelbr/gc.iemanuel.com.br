import { At, MapPin, PenNib, User, WhatsappLogo } from "@phosphor-icons/react";
import React from "react";

export function Contact() {
  return (
    <>
      <section className="">
        <h2>Entrar em Contato</h2>
        <form title="Entrar em Contato" name="Entrar em Contato" action="https://formsubmit.co/gc@iemanuel.com.br" method="post" className="_letter">
          <input type="hidden" name="_autoresponse" value="Entraremos em contato em breve!"/>
          <input type="hidden" name="_subject" value="Entrar em Contato!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <section>
            <div>
              <User />
              <input type="text" name="Nome" placeholder="Nome" id="name" required/>
            </div>
            <div>
              <WhatsappLogo />
              <input type="tel" name="WhatsApp" placeholder="WhatsApp" id="whats" required/>
            </div>
            <div>
              <At />
              <input type="email" name="E-mail" placeholder="E-mail" id="email" required/>
            </div>
            <div>
              <MapPin />
              <input type="text" name="Cidade/UF" placeholder="Cidade/UF" id="local" required/>
            </div>
          </section>
          <div>
            <PenNib />
            <input type="text" name="Assunto" placeholder="Assunto" id="assunto" required/>
          </div>
          <div className="_text">
            <textarea placeholder="Mensagem" name="mensagem" id="mensagem"></textarea>
          </div>
          <button type="submit" title="Enviar" name="Enviar">
            Enviar!
          </button>
        </form>
      </section>
    </>
  );
}
