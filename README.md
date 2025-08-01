# Bowling Game Kata

**Créditos**
Inspirado por el Tío Bob

---

**Reglas de los bolos**
El juego consta de 10 rondas (frames). En cada ronda, la persona jugadora tiene dos lanzamientos para derribar los 10 bolos. La puntuación de la ronda es el total de bolos derribados, más bonificaciones por *strikes* y *spares*.

Un *spare* ocurre cuando se derriban los 10 bolos en dos lanzamientos. La bonificación para esa ronda es la cantidad de bolos derribados en el siguiente lanzamiento.

Un *strike* ocurre cuando se derriban los 10 bolos en el primer lanzamiento. La ronda termina con ese único tiro. La bonificación en ese caso es la suma de los siguientes dos lanzamientos.

En la décima ronda, si se logra un *spare* o un *strike*, se permite lanzar bolas extra para completar la ronda. Sin embargo, no se pueden lanzar más de tres bolas en la décima ronda.

---

**Requisitos**
Escribe una clase `Game` que tenga dos métodos:

* `void roll(int)` se llama cada vez que la persona jugadora lanza una bola. El argumento es el número de bolos derribados.
* `int score()` devuelve la puntuación total de la partida.
