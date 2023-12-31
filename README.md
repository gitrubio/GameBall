
# GameBall

## Documentación de Interfaces
A continuación se describen las interfaces utilizadas en el proyecto:

### ISession
La interfaz ISession representa una sesión de juego. Contiene los siguientes campos:

- id (string): Identificador único de firebase de la sesión.
- dateStart (Date): Fecha de inicio de la sesión.
- dateEnd (Date): Fecha de finalización de la sesión.
- players (Array<IPlayer>): Array de objetos IPlayer que representan los jugadores de la sesión
- statusSession (StatusSession): Estado actual de la sesión, puede ser "pending", "playing" o "finished".
- configApparence (Object): Objeto que define la configuración de apariencia de la sesión, incluyendo los colores de la bola del jugador, la meta y los obstáculos.
- limitPlayers (number): Número máximo de jugadores permitidos en la sesión.
### IPlayer
La interfaz IPlayer representa un jugador en la sesión. Tiene los siguientes campos:

- name (string): Nombre del jugador.
- startPlay (Date): Fecha de inicio del turno del jugador.
- endPlay (Date): Fecha de finalización del turno del jugador.
- status (StatusPlayed): Estado del jugador durante su turno, puede ser "pending", "playing" o "finished".
