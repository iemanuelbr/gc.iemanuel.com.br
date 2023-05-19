import { At, User } from "@phosphor-icons/react";
import React from "react";

export function Soon() {
  return (
    <>
      <span>
        <h2>Em breve!</h2>
        <p>Seja o primeiro a saber sobre os GC's.</p>
      </span>
      <form
        title="Quero ser avisado logo que os GC's estiverem disponíveis."
        name="Quero ser avisado logo que os GC's estiverem disponíveis."
        className="_letter"
        action="https://formsubmit.co/gc@iemanuel.com.br"
        method="post"
      >
        <input
          type="hidden"
          name="_autoresponse"
          value="Logo logo avisaremos sobre o lançamento dos GC's!"
        />
        <input type="hidden" name="_subject" value="Quero ser avisado!" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <div>
          <User />
          <input
            type="text"
            name="Nome"
            placeholder="Nome"
            id="name"
            required
          />
        </div>
        <div>
          <At />
          <input
            type="email"
            name="E-mail"
            placeholder="E-mail"
            id="email"
            required
          />
        </div>
        <button type="submit" title="Enviar" name="Enviar">
          Enviar!
        </button>
      </form>
    </>
  );
}
