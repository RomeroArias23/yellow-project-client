import React from 'react';
import './home.css';

const YELLOW = '{ YELLOW }'

function Home() {
  return (
    <div className='text'>
      <h1>{'{ YELLOW }'}</h1>
      <p>Se inspira en <strong><a href='https://theunsentproject.com/about'>The Unsent Project</a></strong>, <strong>{ YELLOW }</strong> es un archivo que recopila mensajes de texto nunca enviados, permitiéndote expresar de manera anónima esas palabras que se quedaron atrapadas en el tiempo.</p>

      <p><strong>¿A quién puedes escribir?</strong><br/>
      No hay límites en el destinatario: amores del pasado o presente, amistades, familia, mascotas, lugares, objetos queridos, o versiones de ti mismo... cualquier ser o concepto significativo es válido para recibir tus palabras.</p>

      <p><strong>¿Cómo funciona?</strong><br/>
      Cada mensaje se almacena en nuestro archivo en línea y se dedica a un destinatario específico. Si quieres saber si alguien te escribió, puedes buscar tu nombre en la plataforma.</p>

      <p><strong>La experiencia { YELLOW }</strong><br/>
      Al enviar tu mensaje, recibirás acceso a la canción <code>import { YELLOW } from './CVLTVRE'</code> - una composición musical que acompaña tu proceso emocional.</p>

      <p><strong>Te invitamos a:</strong><br/>
      Liberar ese mensaje que cargas contigo. Únete a una comunidad que entiende que todos tenemos palabras pendientes y que juntos creamos un mapa emocional de lo que pudo ser y no fue.</p>

      <p><em>Porque algunas palabras merecen ser liberadas, aunque lleguen tarde.<br/>
      Porque todos tenemos un { YELLOW } en el corazón.</em></p>

      <div className="links">
          <a href="https://discord.gg/yzXKJq8TDm" className="btn">💛 Únete a nuestra comunidad en Discord</a>
      </div>
    </div>
  );
}

export default Home;