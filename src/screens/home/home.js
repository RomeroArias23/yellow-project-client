import React from 'react';
import './home.css';

const YELLOW = '{ YELLOW }'

function Home() {
  return (
    <div className='text'>
      <h1>{'{ YELLOW } Project'}</h1>
      <p>El proyecto <strong>{ YELLOW }</strong> se inspira en el proyecto en inglés <strong><a href='https://theunsentproject.com/about'>The Unsent Project</a></strong>, esta aplicación tiene como objetivo recopilar mensajes de texto no enviados a primeros amores, permitiendo a quienes participen expresar de manera anónima mensajes que no pudieron enviar en su momento.</p>

      <p>El término "primer amor" se deja abierto a la interpretación, permitiendo que los mensajes se dirijan a amantes, mejores amigos, ex parejas, padres o madres, hermanxs, e incluso mascotas. Todos los textos enviados son almacenados en un archivo en línea y son dedicados a un remitente. Si quieres saber si alguien escribió una carta con tu nombre, puedes buscarlo.</p>

      <p><strong>{ YELLOW }</strong> busca proporcionar una vía emocional para quienes necesitan expresarse. Al enviar un mensaje a través de <strong>{ YELLOW }</strong> recibirás un enlace para escuchar la canción titulada <code>import { YELLOW } from './CVLTVRE'</code>. Una canción escrita a un amor perdido.</p>

      <p>Te invito a participar y enviar ese mensaje que nunca pudiste enviar a tu primer amor. Forma parte de una comunidad que comparte experiencias y sentimientos por los que todas y todos hemos pasado.</p>
    </div>
  );
}

export default Home;