import React from 'react';
import './creditsScreen.css';
import yellowPlayerImage from '../credits/yellow-player.png';

const YELLOW = 'YELLOW';

function CreditsScreen() {
  return (
    <div className="credits-container">
      <a href="https://onerpm.link/721046957373" target="_blank" rel="noopener noreferrer">
        <img 
          src={yellowPlayerImage}
          alt="Portada de import { YELLOW }" 
          className="credits-image"
        />
      </a>
      <div className="credits">
        <h2>import { YELLOW } from './CVLTVRE'</h2>
        <p><strong>Portada y diseño conceptual del proyecto:</strong> Judá Inacua @heey.yude</p>
        <p><strong>Letra y composición:</strong> Julio César Anzures y José Roberto Torres Martínez</p>
        <p><strong>Arreglo de batería:</strong> José Roberto Torres Martínez</p>
        <p><strong>Arreglo de cuerdas:</strong> Diego Romero</p>
        <p><strong>Batería:</strong> @jampii_drummer</p>
        <p><strong>Guitarra:</strong> Javier Chávez</p>
        <p><strong>Producción musical, mezcla, master y arreglos:</strong> Sebastián Almaraz Coria</p>
        <p><strong>Voz y vocal coaching:</strong> Sharon Cuevas</p>
        <p><strong>Interpretación:</strong> Romero Arias</p>
        <br/>
        <p><strong>import { YELLOW } from './CVLTVRE';</strong> es una canción que tiene un gran valor emocional para mí. Todo comenzó cuando mis amigos <strong>Julio</strong> y <strong>Roberto</strong> escribieron la canción para su banda CVLTVRE cuando tenían alrededor de 18 años. Años después, en 2018 o 2019, tuve la suerte de participar en la mezcla de la canción, pero por cosas de la vida, nunca salió. Con el tiempo nos distanciamos, pero hace poco les pedí a mis amigos de la prepa que me dejaran volver a producirla para mi proyecto, esta vez con más experiencia.</p>

        <p>Esta canción es muy valiosa para mí, no solo por la letra y el tema que me parecen conmovedores, sino porque es un símbolo de la amistad que tuvimos, que en su momento fue muy fuerte. Con el tiempo, aunque me siento culpable, fui yo quien eligió alejarme poco a poco. Al volver a trabajar en la canción, comencé haciendo un arreglo de cuerdas más completo usando un plugin de LABS, que tiene grabaciones de cuerdas realmente buenas: contrabajos, cellos, violas y violines, lo que le dio una atmósfera orquestal rica.</p>

        <p>Mientras trabajaba en los arreglos, se unió a la producción mi gran amigo y productor <strong>Tatan</strong>. Durante varias sesiones de arreglos, fuimos añadiendo capas de sonidos que ayudaron a crear la atmósfera que queríamos para la canción. Incluimos sonidos como el golpeo de las teclas del piano eléctrico al inicio, efectos y ruidos de guitarra a lo largo de la canción, el sonido del metrónomo que se coló en una parte de la grabación, el ambiente de un parque que <strong>Tatan</strong> grabó, y hasta el ruido de fondo mientras <strong>Juanpi</strong>, el baterista, se acomodaba durante la sesión.</p>

        <p>En la grabación también participaron <strong>Javier Chávez</strong> en la guitarra y <strong>Juanpi</strong> en la batería. Queríamos un sonido de guitarras con fuzz inspirado en "Gemini" de Alabama Shakes, y <strong>Javier</strong> lo logró a la perfección. Para la batería, buscábamos un sonido seco, en un espacio pequeño y cerrado, y <strong>Tatan</strong> y <strong>Juanpi</strong> consiguieron exactamente eso al cerrar el estudio con cobijas y paneles acústicos.</p>

        <p>En la grabación de la voz, participó una querida amiga de la prepa, <strong>Sharon</strong>, quien me ayudó a encontrar una voz más expresiva y con la técnica adecuada. Me dio confianza con mi voz y grabamos varias tomas hasta que logramos las que mejor nos hicieron sentir.</p>

        <p>En cuanto a la portada, <strong>Jude</strong> y yo discutimos que queríamos recrear un entorno íntimo relacionado con la programación y nuestra relación con la computadora, algo importante ya que tanto en la creación de la página web como en la producción de la canción, pasamos muchas horas frente a la computadora.</p>

        <p>El título de la canción, <strong>import { YELLOW } from './CVLTVRE';</strong>, es un homenaje al proyecto original de mis amigos. Es una sentencia básica de código para importar, lo cual es lo que hice con la canción para integrarla en mi proyecto <strong>ROM_01</strong>. Para mí, esta es una canción no solo sobre un amor perdido, sino también una celebración de las antiguas amistades y las nuevas colaboraciones.</p>
      </div>
    </div>
  )
}

export default CreditsScreen;

